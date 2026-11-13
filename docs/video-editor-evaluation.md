# Mx Studio - Video Editor Engine & SDK Architectural Evaluation

## 1. Executive Summary

A core pillar of **Mx Studio** is the **Professional Video Editor** and **AI Video Studio**. Selecting or constructing the core video timeline and composition engine is a foundational technical decision.

This document presents a rigorous comparative analysis between **IMG.LY CreativeEngine SDK (CE.SDK)**, **Banuba Web Video Editor SDK**, and a **Tailored Proprietary Web Engine** (leveraging Remotion, dnd-kit, WebAssembly FFmpeg, and WebGL/WebGPU).

> **HONESTY & INTEGRITY STATEMENT**:
> Installing npm dependencies such as `@remotion/player`, `@ffmpeg/ffmpeg`, or `@dnd-kit/core` establishes foundational building blocks. It **does not** constitute an end-to-end professional video editor out-of-the-box. A production-grade multi-track editor requires custom timeline coordinate mathematics, audio-video synchronization loops, keyframe interpolation, caching, and resilient rendering pipelines.

---

## 2. Comparative Matrix

| Evaluation Dimension              | IMG.LY CE.SDK                                                                                                    | Banuba Web SDK                                                                                | Custom Engine (Remotion + Wasm FFmpeg)                                                                    |
| :-------------------------------- | :--------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------- |
| **Primary Focus**                 | Canva / Figma-style creative design, graphic templates, lightweight video composition                            | TikTok / Instagram-style short-form video creation, Face AR, beauty filters                   | Professional NLE (Non-Linear Editor) desktop-grade workflows, AI layer fusion                             |
| **Browser & Web Support**         | Outstanding (WebGL2, WebAssembly, headless Node.js/Docker)                                                       | Good (WebGL, mobile-web responsive, optimized for portrait aspect ratios)                     | Excellent (Native Next.js 15, Web Workers, WebAssembly FFmpeg, WebGPU)                                    |
| **Timeline Editing Capabilities** | Track-based timeline, basic video trimming, text animations, asset layering. Limited advanced bezier keyframing. | Single-track or dual-track short-form editor. Limited multi-layer audio/video track stacking. | Unlimited arbitrary tracks, custom snapping, multi-track audio scrubbing, bezier curves.                  |
| **Export & Transcoding**          | Client-side WebAssembly export (1080p) + Headless Docker rendering for 4K.                                       | Client-side export (720p/1080p). Highly dependent on mobile/browser codec availability.       | Hybrid: Instant preview via Remotion; client-side quick trim via Wasm FFmpeg; server 4K via Cloud FFmpeg. |
| **Commercial Licensing**          | Proprietary annual license fee (typically starting at \$5,000–\$25,000+/yr depending on MAU/seats).              | Proprietary annual license fee + per-seat or per-export fee. Custom enterprise quotes.        | Open-source foundations (MIT / Apache / Remotion Company License). Zero vendor lock-in.                   |
| **Brand Customizability**         | Highly customizable headless engine with customizable UI elements.                                               | Semi-rigid opinionated UI themed primarily for mobile short-video apps.                       | 100% customized to Mx Studio design tokens (`#090812`, electric blue, precision scrubbers).               |
| **AI Integration Surface**        | Requires custom plugins to inject external AI generation endpoints into the canvas.                              | Built-in Face AR and background subtraction, but opaque AI pipelines.                         | Fully native: AI generation streams directly into asset bins and timeline tracks.                         |

---

## 3. Deep-Dive Evaluation by Dimension

### 3.1 IMG.LY CreativeEditor SDK (CE.SDK)

- **Strengths**:
  - Unified scene graph engine for both raster graphics and multi-page/timeline video.
  - Headless SDK allows building a completely custom UI on top of their C++ WebAssembly engine.
  - Proven enterprise stability with predictable rendering outputs across browsers.
- **Weaknesses**:
  - High annual licensing cost with restrictive terms for multi-tenant SaaS products.
  - Timeline functionality is oriented toward social media/ad templates rather than timeline-heavy professional video editing (limited multi-channel audio bus, audio slip/slide, ripple editing).
  - Heavy initial WebAssembly binary download payload (~15 MB - 25 MB).

### 3.2 Banuba Web Video Editor SDK

- **Strengths**:
  - Best-in-class Face AR, live virtual makeup, animated stickers, and face mesh tracking.
  - Highly optimized for mobile browser performance and short-form TikTok/Reels content.
  - Rapid time-to-market if targeting casual influencer/consumer applications.
- **Weaknesses**:
  - Unsuited for horizontal desktop-first professional creative workstations.
  - Constrained multi-track timeline capability (does not support multi-camera sync, advanced audio stem editing, or complex keyframing).
  - Rigid licensing and complex contract renewal terms.

### 3.3 Custom Engine (Remotion Player + dnd-kit + Wasm FFmpeg + WebGL)

- **Strengths**:
  - Complete control over design language, keyboard shortcuts (J-K-L scrubbing, Razor tool `C`, Selection `V`), and UX.
  - Seamless integration with Mx Studio's AI microservices (e.g. streaming Wan2.1 video generations directly into the timeline).
  - No recurring five-figure vendor licensing fees.
  - Remotion's React-based composition model allows video elements to be built as standard React components with hot module replacement during development.
- **Weaknesses**:
  - Substantial upfront engineering investment to implement timeline snapping, audio-video clock drift compensation, and rendering orchestration.
  - Requires maintaining dedicated cloud rendering infrastructure (FFmpeg worker fleet).

---

## 4. Strategic Recommendation for Mx Studio

### Recommended Architecture: **Hybrid Progressive Strategy**

1. **Immediate Phase (Current Architecture)**:
   - Build Mx Studio's proprietary desktop-first timeline interface using `@dnd-kit/core` and `@remotion/player`.
   - Use `@ffmpeg/ffmpeg` (WebAssembly) for in-browser preliminary tasks: client-side transcoding, waveform analysis, trimming, and instant clip slicing.
   - Use `wavesurfer.js` for audio track visualization and scrub feedback.

2. **Server Rendering Pipeline**:
   - Pair the Remotion React composition tree with a containerized AWS Lambda / BullMQ FFmpeg worker cluster for final high-resolution MP4/ProRes rendering.

3. **SDK Consideration**:
   - Retain IMG.LY CE.SDK as an optional white-label enterprise plugin for customers requiring Canva-like graphic template editing, without depending on it for core video editor functionality.
