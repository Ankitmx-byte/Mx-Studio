# Mx Studio - Dependency Registry & Rationale

This document catalogs every core, animation, creative media, UI, and dev dependency installed in the Mx Studio project, documenting its purpose, usage boundaries, and architectural significance.

---

## 1. Core Framework & Language

| Package               | Version   | Purpose                   | Usage / Guidelines                                                                            |
| :-------------------- | :-------- | :------------------------ | :-------------------------------------------------------------------------------------------- |
| `next`                | `^15.1.7` | Web application framework | Provides App Router, server/client boundaries, image optimization, dynamic route splitting.   |
| `react` & `react-dom` | `^19.0.0` | UI Library                | Core React runtime with Actions, concurrent rendering, and automatic memoization foundations. |
| `typescript`          | `^5.7.3`  | Static Type Checker       | Enforces strict type safety across all components, stores, features, and utility functions.   |

---

## 2. UI Component Primitives & Styling

| Package                    | Version    | Purpose                                  | Usage / Guidelines                                                                                  |
| :------------------------- | :--------- | :--------------------------------------- | :-------------------------------------------------------------------------------------------------- |
| `tailwindcss`              | `^3.4.17`  | Utility-first CSS framework              | Applied for design token implementation, responsive layouts, and workspace themes.                  |
| `@radix-ui/react-*`        | `latest`   | Headless accessible UI primitives        | Foundation for dialogs, dropdowns, popovers, tooltips, tabs, sliders, accordions, context menus.    |
| `class-variance-authority` | `^0.7.1`   | Component variant builder                | Used in `src/components/ui/` for type-safe button, badge, input, and card variants.                 |
| `clsx` & `tailwind-merge`  | `latest`   | Class manipulation & conflict resolution | Unified in `src/lib/utils.ts` as the standard `cn(...)` utility helper.                             |
| `lucide-react`             | `^0.475.0` | Vector Iconography                       | Consistent, clean icon library across toolbar actions, status indicators, and menus.                |
| `next-themes`              | `^0.4.4`   | Theme Management                         | Defaults to dark theme (`studio.bg`), controls dark/light mode toggling and HTML class injection.   |
| `sonner`                   | `^2.0.1`   | Toast Notification System                | High-performance, non-blocking toast notifications for credit updates, export statuses, and errors. |
| `vaul`                     | `^1.1.2`   | Mobile Drawer primitive                  | Responsive drawer component for mobile inspector sheets and bottom sheets.                          |
| `cmdk`                     | `^1.0.0`   | Command Palette                          | Quick-action `Cmd+K` launcher for search, keyboard shortcuts, tools, and project switching.         |
| `input-otp`                | `^1.4.2`   | One-time password inputs                 | Clean 6-digit verification code input for authentication flows.                                     |
| `react-resizable-panels`   | `^2.1.7`   | Resizable Workspace Panes                | Powers multi-pane pro desktop layout (timeline bottom, canvas center, inspectors right/left).       |
| `embla-carousel-react`     | `^8.5.2`   | Carousel / Slider                        | Used in template galleries, asset browsers, and marketing feature showcases.                        |
| `recharts`                 | `^2.15.1`  | Data Visualization                       | Renders analytics charts for credit burn rates, view counts, and admin revenue dashboards.          |

---

## 3. Animation, Motion & 3D Graphics

| Package                  | Version    | Purpose                         | Usage / Guidelines                                                                                  |
| :----------------------- | :--------- | :------------------------------ | :-------------------------------------------------------------------------------------------------- |
| `motion`                 | `^12.4.7`  | Declarative UI animations       | Smooth UI layout transitions, gestures, modals, hover states, and drag feedback.                    |
| `gsap` & `@gsap/react`   | `^3.12.7`  | High-precision animation engine | Timeline-based sequencing, complex landing page animations with ScrollTrigger.                      |
| `three` & `@types/three` | `^0.173.0` | 3D WebGL Library                | Low-level 3D graphics rendering, shader materials, and lighting calculations.                       |
| `@react-three/fiber`     | `^9.0.0`   | React renderer for Three.js     | Declarative 3D scene construction with full React component lifecycle integration.                  |
| `@react-three/drei`      | `^10.0.0`  | R3F Helper ecosystem            | Orbit controls, environment maps, camera management, shader materials, text geometries.             |
| `lenis`                  | `^1.1.20`  | Smooth Scrolling                | Inertial scrolling for public marketing pages and long template showcases.                          |
| `lottie-react`           | `^2.4.1`   | Vector Animation Player         | Renders After Effects Lottie animations for loading states, success celebrations, and empty states. |
| `ogl`                    | `^1.0.11`  | Minimal WebGL library           | Ultra-lightweight WebGL engine for background canvas effects, particles, and low-overhead shaders.  |

---

## 4. State Management, Forms & Data Flow

| Package                                                    | Version   | Purpose                     | Usage / Guidelines                                                                             |
| :--------------------------------------------------------- | :-------- | :-------------------------- | :--------------------------------------------------------------------------------------------- |
| `zustand`                                                  | `^5.0.3`  | Lightweight Global State    | Stores editor track state, playhead position, selected clip, audio gain, and project metadata. |
| `@tanstack/react-query`                                    | `^5.66.0` | Server State Management     | Caches user profile, asset lists, AI job statuses, billing records; manages invalidation.      |
| `@tanstack/react-table`                                    | `^8.21.2` | Headless Data Tables        | Powers asset file managers, admin user lists, transaction histories, and batch jobs.           |
| `react-hook-form`                                          | `^7.54.2` | High-performance Form State | Form controls with minimal re-renders for generation settings, prompts, and preferences.       |
| `zod`                                                      | `^3.24.2` | Schema Validation           | Validates API payloads, generation prompts, form inputs, and environment configurations.       |
| `@hookform/resolvers`                                      | `^3.10.0` | Hook Form Resolver          | Bridges Zod schemas directly into React Hook Form validation pipelines.                        |
| `@dnd-kit/core`, `@dnd-kit/sortable`, `@dnd-kit/utilities` | `latest`  | Drag-and-Drop Primitives    | Powers multi-track timeline clip dragging, reordering, snapping, and media bin drops.          |
| `react-dropzone`                                           | `^14.3.5` | File Upload Drag-and-Drop   | Handles multi-file dragging into media libraries with mime-type checking and file size limits. |

---

## 5. Creative Media & In-Browser AI

| Package                           | Version    | Purpose                                 | Usage / Guidelines                                                                             |
| :-------------------------------- | :--------- | :-------------------------------------- | :--------------------------------------------------------------------------------------------- |
| `@remotion/player` & `remotion`   | `^4.0.245` | React Video Preview Player              | Frame-accurate browser video playback engine; previewing composite React video timelines.      |
| `@ffmpeg/ffmpeg` & `@ffmpeg/util` | `^0.12.15` | Client-Side WebAssembly FFmpeg          | Local video trimming, audio stream extraction, audio conversion, frame extraction.             |
| `wavesurfer.js`                   | `^7.8.15`  | Interactive Audio Waveform              | Renders interactive audio waveforms on timeline tracks with zoom, cursor, and cue markers.     |
| `onnxruntime-web`                 | `^1.21.0`  | Edge ML Inference in WebAssembly/WebGPU | Client-side inference for background segmentation, lightweight face tracking, and smart crops. |
| `@mediapipe/tasks-vision`         | `^0.10.21` | Google Vision ML Tasks                  | Real-time face detection, pose estimation, hand tracking, and image segmentation.              |
| `@mediapipe/tasks-audio`          | `^0.10.20` | Google Audio ML Tasks                   | Real-time audio classification, speech detection, and sound event identification.              |

---

## 6. Developer Experience & Quality Assurance

| Package                                    | Version   | Purpose                        | Usage / Guidelines                                                                            |
| :----------------------------------------- | :-------- | :----------------------------- | :-------------------------------------------------------------------------------------------- |
| `vitest`                                   | `^3.0.5`  | Fast Unit & Integration Runner | Executes component unit tests, math calculations for timeline frames, and store logic.        |
| `@testing-library/react`                   | `^16.2.0` | UI Testing Utilities           | Tests React component interactions, accessibility roles, and state transitions.               |
| `@playwright/test`                         | `^1.50.1` | End-to-End Test Suite          | Headless browser automation testing complete user journeys (login, generation, timeline).     |
| `eslint` & `eslint-config-next`            | `latest`  | Code Quality & Style Linter    | Enforces Next.js best practices, clean imports, and detects syntax or accessibility pitfalls. |
| `prettier` & `prettier-plugin-tailwindcss` | `latest`  | Code Formatting                | Standardizes spacing, quotes, and automatically sorts Tailwind CSS classes.                   |
| `husky` & `lint-staged`                    | `latest`  | Git Hooks & Pre-commit Linters | Automatically checks and formats staged files before commits are accepted.                    |
