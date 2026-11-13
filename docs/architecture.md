# Mx Studio - Architecture & Engineering Blueprint

## 1. Executive Summary

Mx Studio ("Create Beyond Limits.") is an enterprise-grade AI-powered creative workspace for video editing, photo enhancement, audio production, and multi-format ad generation. This document outlines the holistic system architecture, covering the frontend workspace, backend services, AI inference pipeline, media processing engines, asset storage, billing, and observability.

---

## 2. High-Level Architecture Diagram

```
+-----------------------------------------------------------------------------------+
|                                  CLIENT LAYER                                     |
|  Next.js 15 App Router | React 19 | Tailwind CSS | shadcn/ui | Motion | Three.js  |
|                                                                                   |
|  +---------------------+  +----------------------+  +---------------------------+ |
|  | WebGL / 3D Canvas   |  | Non-Linear Timeline  |  | Creative Studio Modals    | |
|  | (Three.js / Drei)   |  | (dnd-kit + Remotion) |  | (Video/Photo/Ad/Audio)    | |
|  +---------------------+  +----------------------+  +---------------------------+ |
|  +------------------------------------------------------------------------------+ |
|  | Client In-Browser Edge Compute: WebAssembly FFmpeg + WebGPU ONNX Runtime    | |
|  +------------------------------------------------------------------------------+ |
+-----------------------------------------------------------------------------------+
                                         |
                       HTTPS / WSS / gRPC / Webhook
                                         |
+----------------------------------------v------------------------------------------+
|                               API GATEWAY & CORE BACKEND                          |
|                               NestJS Modular Monolith                             |
|  - Auth & RBAC (NextAuth / JWT / API Keys)                                        |
|  - Project & Asset Metadata Management                                            |
|  - Credits Accounting & Balance Validation                                        |
|  - Dynamic Rate Limiting & Quotas                                                 |
|  - Webhook Dispatcher (Stripe, Cloudflare, AI Workers)                            |
+-----------------------------------------------------------------------------------+
           |                                  |                        |
           v                                  v                        v
+---------------------+            +-------------------+    +--------------------+
|  PostgreSQL 16 DB   |            |    Redis Cluster  |    |  Cloudflare R2     |
|  Prisma ORM         |            |  - Session Cache  |    |  Media Storage     |
|  - Users & Workspaces|           |  - Pub/Sub        |    |  - Source Assets   |
|  - Projects & Timelines          |  - BullMQ Queues  |    |  - Rendered Exports|
|  - Credit Transactions           +-------------------+    |  - AI Models Cache |
+---------------------+                       |             +--------------------+
                                              v
                              +--------------------------------+
                              |      ASYNCHRONOUS WORKERS      |
                              |      BullMQ Task Processors    |
                              +--------------------------------+
                                       /              \
                                      /                \
                                     v                  v
        +-----------------------------------+    +----------------------------------+
        |   HEAVY MEDIA PROCESSING WORKERS  |    |    AI MICROSERVICES (FastAPI)    |
        |   Containerized FFmpeg + Harfbuzz |    |    Python 3.11 + PyTorch / CUDA  |
        |   - Server-side Video Rendering   |    |    - Video: ComfyUI / Wan2.1     |
        |   - 4K / 60fps Pro Export         |    |    - Photo: FLUX.1 / SDXL / Bria |
        |   - Audio Stem Separation         |    |    - Audio: ElevenLabs / Demucs  |
        |   - Dynamic Subtitle Generation   |    |    - Ad: LLM Copy + Multi-Crop   |
        +-----------------------------------+    +----------------------------------+
```

---

## 3. Frontend Architecture

### 3.1 Stack

- **Framework**: Next.js 15 (App Router, Server Components where applicable, Dynamic Client Boundaries for interactive editors).
- **Language**: TypeScript 5.7+ (Strict Mode).
- **State Management**:
  - `zustand`: Modular stores for editor timeline state, active tools, viewport scaling, audio tracks, and credit balances.
  - `@tanstack/react-query`: Server state synchronization, caching, optimistic updates, and background refetching.
- **Rendering & Animation**:
  - `motion/react`: UI choreography, contextual toolbars, sidebars, modal transitions.
  - `gsap` + `ScrollTrigger`: Cinematic landing page sequences and high-precision keyframe interpolations.
  - `@react-three/fiber` & `@react-three/drei`: 3D mockups, product visualization, canvas preview effects.
  - `@remotion/player`: Real-time browser timeline preview for composite video layers.
- **Styling**: Tailwind CSS with custom design tokens (`studio.bg`, `studio.surface`, `studio.pink`, etc.), Radix UI primitives (`shadcn/ui`), and `lucide-react` iconography.

### 3.2 In-Browser Compute Engine

To minimize cloud infrastructure costs and enable instant preview:

- `@ffmpeg/ffmpeg` (Wasm): Fast local audio extraction, trim operations, thumbnail generation, and lightweight format transcoding.
- `onnxruntime-web` + `@mediapipe/tasks-vision`: Client-side face tracking, background matting, gesture recognition, and edge ML inference without round-trips.

---

## 4. Backend Services (NestJS Monolith / Microservices)

### 4.1 Modules

1. **AuthModule**: Session tokens, OAuth providers (Google, GitHub), Magic Link, API token issuance.
2. **ProjectsModule**: CRUD operations for projects, folders, collaborative workspace permissions.
3. **TimelineModule**: JSON timeline representations (tracks, clips, keyframes, transitions, text overlays, audio levels).
4. **CreditsModule**: Atomic ledger transactions for credit consumption, balance holds during rendering, and refund mechanics on generation failures.
5. **MediaModule**: Presigned upload URLs to Cloudflare R2, asset deduplication (SHA-256 hash), chunked multipart uploads for large video files.
6. **RenderingModule**: Task dispatch to BullMQ for remote rendering and FFmpeg cloud stitching.

---

## 5. Storage Architecture (Cloudflare R2)

- **Bucket Structure**:
  - `/raw/{userId}/{assetId}.{ext}`: Raw user uploaded footage, music, and images.
  - `/thumbnails/{assetId}.webp`: Auto-generated WebP thumbnails at 720p/360p.
  - `/projects/{projectId}/timeline.json`: Versioned timeline snapshots.
  - `/exports/{userId}/{exportId}.mp4`: Final high-bitrate MP4/ProRes exports with presigned download links.
  - `/cache/models/`: Cached weights for frequently accessed on-demand models.
- **Zero-Egress Cost**: Leveraging Cloudflare R2 eliminates egress bandwidth penalties when users download 4K video exports.

---

## 6. AI Microservices Pipeline

1. **Inference Orchestration**:
   - Python FastAPI services deployed on GPU-enabled instances (e.g., RunPod, Modal, or AWS EC2 G5/G6).
   - ComfyUI / Diffusers backend for diffusion-based workflows (FLUX.1 Schnell/Dev, Wan2.1 video generation).
   - Audio processing via Demucs for 4-stem separation (vocals, drums, bass, other) and ElevenLabs/XTTS for voice cloning.
2. **Resilience & Fallbacks**:
   - Exponential backoff retry loops.
   - Graceful fallback from local self-hosted GPU pools to managed APIs (Replicate, fal.ai, OpenAI) during traffic spikes.
   - Automated health checks and load shedding.

---

## 7. Billing & Credit Economics

- **Stripe Integration**:
  - Subscriptions: Free, Creator, Pro, Studio Agency tiers.
  - Credit Packs: One-time top-ups with instant credit ledger reconciliation via Stripe webhooks.
  - Idempotent webhook processing to prevent double-crediting.
- **Credit Metering**:
  - Video Generation: 10–50 credits/second depending on model and resolution.
  - Image Generation: 1–5 credits/image.
  - Audio Generation / Transcription: 2 credits/minute.
  - Video Upscale (4K): 15 credits.

---

## 8. Observability & Security

- **Monitoring**: Sentry for frontend crash analytics and backend error tracking.
- **Metrics**: OpenTelemetry tracing across Next.js, NestJS, and FastAPI services.
- **Security**:
  - Content Security Policy (CSP) with COOP/COEP for SharedArrayBuffer support (required by FFmpeg WebAssembly).
  - Rate limiting on all generation endpoints.
  - Encrypted asset URLs with time-limited expirations.
