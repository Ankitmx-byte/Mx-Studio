# Mx Studio

> **Create Beyond Limits.**

**Mx Studio** is a premium, AI-powered creative workspace designed for creators, agencies, influencers, and enterprise advertisers worldwide. It brings together generative AI, a professional non-linear video editor, high-resolution photo generation, multi-format ad synthesis, and stem-separated audio production under a unified, luxury workstation.

---

## 🎨 Core Creative Modules

1. **AI Video Studio**: Prompt-to-video generation powered by Wan2.1 and CogVideo diffusion models.
2. **Professional Video Editor**: Desktop-first, multi-track timeline with keyframe precision, audio scrubbing, and Remotion composition.
3. **AI Photo Studio**: Ultra-high-resolution FLUX.1 generation, inpainting, object removal, and edge segmentation.
4. **AI Ad Studio**: Intelligent aspect-ratio reframing (9:16, 1:1, 16:9), automated copy generation, and conversion hooks.
5. **Audio Studio**: Demucs 4-stem separation, interactive waveforms (WaveSurfer), and neural voice cloning.
6. **Templates & Assets**: Curated motion presets, transitions, sound effects, and 3D overlays.
7. **Brand Kits**: Multi-brand palette management, typography, and watermarking.
8. **AI Credits**: Transparent real-time ledger accounting for GPU compute allocation.
9. **Subscription & Billing**: Stripe-integrated tiered subscriptions and on-demand credit packs.
10. **User Dashboard**: High-density workspace for active projects, assets, and render queues.
11. **Admin Dashboard**: Operational metrics, GPU worker cluster health, and billing telemetry.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router, Server Components)
- **UI & Components**: React 19, TypeScript, Tailwind CSS, shadcn/ui (46 components), Lucide React
- **Animations & 3D**: GSAP, Motion (`motion/react`), Three.js, React Three Fiber, Drei, Lenis Smooth Scroll, OGL
- **State & Data**: Zustand, TanStack Query, TanStack Table, React Hook Form, Zod, dnd-kit
- **In-Browser Compute**: WebAssembly FFmpeg (`@ffmpeg/ffmpeg`), ONNX Runtime Web (`onnxruntime-web`), Google MediaPipe (`@mediapipe/tasks-vision`, `@mediapipe/tasks-audio`), WaveSurfer.js
- **Quality Assurance**: Vitest, React Testing Library, Playwright, ESLint 9, Prettier, Husky, lint-staged

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v20+` or `v22+` (Active LTS)
- npm `v10+` or `v11+`

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/Mx-Studio.git
cd Mx-Studio

# Copy environment variables template
cp .env.example .env.local

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

- `npm run dev` — Start the Next.js development server
- `npm run build` — Build production application
- `npm run start` — Run production server
- `npm run lint` — Check code style with ESLint
- `npm run typecheck` — Strict TypeScript checking (`tsc --noEmit`)
- `npm run test` — Run unit and component tests with Vitest
- `npm run test:watch` — Interactive watch mode tests
- `npm run test:e2e` — End-to-end tests with Playwright
- `npm run format` — Format codebase with Prettier
- `npm run format:check` — Verify code formatting

---

## 📚 Documentation

Comprehensive architectural blueprints and developer documentation are located in `docs/`:

- [Architecture & Blueprint](docs/architecture.md)
- [Dependency Registry & Rationale](docs/dependencies.md)
- [Design System & Theme Tokens](docs/design-system.md)
- [Development Setup Guide](docs/development-setup.md)
- [AI Models & Integration Roadmap](docs/ai-integration-roadmap.md)
- [Video Editor SDK Evaluation](docs/video-editor-evaluation.md)

---

## 📄 License

Proprietary © Mx Studio. All rights reserved.
