# Mx Studio - AI Agent Guidelines & Architecture Rules

Welcome to **Mx Studio** ("Create Beyond Limits."). This document governs AI-assisted development across this repository.

---

## 1. Core Principles & Philosophy

1. **Desktop-First, Responsive & Professional**: Mx Studio is an advanced creative workspace designed for creators, agencies, and advertisers. Treat UI/UX with the precision of pro creative suites (Figma, After Effects, DaVinci Resolve) merged with high-end web aesthetics.
2. **Strict TypeScript & Type Safety**: Never use `any` unless strictly interfacing with an un-typed third-party binary. Avoid type assertions (`as Type`) where proper type guards or schemas can be used.
3. **Design System Adherence**: Always use defined brand tokens and CSS variables. Do not introduce arbitrary hex colors in component classes.
4. **Performance & Bundle Conscious**: Creative web apps easily become sluggish. Always use dynamic imports (`next/dynamic` with `ssr: false`) for heavy client components (Three.js canvas, Remotion player, WaveSurfer, ONNX runtime, Mediapipe).
5. **No Hallucinated Packages or APIs**: Only use verified npm packages. When integrating copy-paste libraries (Aceternity UI, Magic UI, React Bits, Origin UI), review and adapt the code to our design system.

---

## 2. Directory Structure Conventions

- `src/app/`: Next.js App Router route groups:
  - `(marketing)`: Public-facing marketing pages (Landing, Features, Solutions).
  - `(auth)`: Login, Registration, Password recovery.
  - `dashboard/`: User project manager, templates, media gallery, credits overview.
  - `video-studio/`: AI Video generation & prompt-to-video workflow.
  - `video-editor/`: Non-linear multi-track timeline video editor.
  - `photo-studio/`: AI photo generator, upscale, inpainting, object removal.
  - `ad-studio/`: Multi-platform AI ad generation (aspect ratios, copy, CTAs).
  - `audio-studio/`: AI voiceover, stem separation, sound FX, background music.
  - `pricing/`: Subscription plans and credit packages.
  - `admin/`: Operational dashboard, user management, credit allocations.
- `src/components/ui/`: Atomic primitives powered by Radix UI & Tailwind CSS.
- `src/components/animations/`: Motion and GSAP orchestration wrappers.
- `src/components/three/`: 3D canvas and WebGL shaders (always lazy-loaded).
- `src/features/`: Domain-specific business logic, timeline states, and hooks.
- `src/stores/`: Zustand stores for reactive client state (project, editor, credits, UI).
- `src/lib/`: Shared utilities, API clients, schema validators.
- `docs/`: Technical specifications, architecture docs, and roadmaps.

---

## 3. Design System & Theme Tokens

- **Background**: `#090812` (HSL: `247 38% 5%`)
- **Secondary Surface**: `#111326` (HSL: `235 38% 11%`)
- **Elevated Surface**: `#17182B` (HSL: `237 30% 13%`)
- **Primary Pink**: `#F13DBB` (HSL: `318 86% 59%`)
- **Purple**: `#8B5CF6` (HSL: `258 90% 66%`)
- **Electric Blue**: `#367BFF` (HSL: `219 100% 61%`)
- **Cyan**: `#35C8F5` (HSL: `194 91% 58%`)
- **Primary Text**: `#FFFFFF`
- **Secondary Text**: `#A5A5B8` (HSL: `240 11% 69%`)

---

## 4. Coding Standards

- **State Management**: Use Zustand for complex multi-module client state (timeline tracks, playback cursor, layer hierarchy). Use TanStack Query for remote server state.
- **Forms**: React Hook Form with Zod schemas via `@hookform/resolvers/zod`.
- **Animations**:
  - Motion (`motion/react`) for UI transitions, modals, drag-and-drop feedback.
  - GSAP for complex timeline sequences and ScrollTrigger interactions.
  - Respect `prefers-reduced-motion` at all times.
- **Git Hygiene**:
  - Never commit credentials or `.env.local`.
  - Maintain clean, descriptive commit messages following Conventional Commits.

