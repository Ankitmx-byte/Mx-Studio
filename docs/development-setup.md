# Mx Studio - Local Development & Environment Setup Guide

## 1. Prerequisites

Before running the Mx Studio workspace locally, ensure your workstation meets the following minimum requirements:

- **Node.js**: `v20.x` or `v22.x` LTS (Active LTS `v22.13.0` verified).
- **Package Manager**: `npm` `v10.x` or `v11.x` (or `pnpm` `v9.x`).
- **Git**: `v2.40+`.
- **System Memory**: 16 GB RAM recommended (8 GB minimum) for WebAssembly and WebGL rendering.
- **Hardware Acceleration**: WebGPU / WebGL 2.0 supported browser (Chrome 113+, Edge 113+, Firefox 115+, Safari 17+).

---

## 2. Quick Start

### 2.1 Clone and Enter Directory

```bash
git clone https://github.com/your-org/Mx-Studio.git
cd Mx-Studio
```

### 2.2 Configure Environment Variables

Copy the placeholder environment file:

```bash
cp .env.example .env.local
```

Review `.env.local` and add any necessary local provider keys when working on specific microservices.

### 2.3 Install Dependencies

```bash
npm install
```

### 2.4 Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 3. Package Scripts

| Command                | Action                                                                     |
| :--------------------- | :------------------------------------------------------------------------- |
| `npm run dev`          | Starts the Next.js App Router local development server on port 3000.       |
| `npm run build`        | Compiles production bundles, validates types, and optimizes static pages.  |
| `npm run start`        | Boots the compiled production application server.                          |
| `npm run lint`         | Runs ESLint 9 checks to verify code quality and style conformance.         |
| `npm run typecheck`    | Invokes the TypeScript compiler (`tsc --noEmit`) in strict mode.           |
| `npm run test`         | Runs Vitest unit and component integration tests.                          |
| `npm run test:watch`   | Starts Vitest in interactive watch mode for TDD workflows.                 |
| `npm run test:e2e`     | Runs Playwright end-to-end browser tests across Chromium, Firefox, WebKit. |
| `npm run format`       | Formats all code, markdown, and style files with Prettier.                 |
| `npm run format:check` | Verifies code formatting conformance without modifying files.              |

---

## 4. WebAssembly & Cross-Origin Isolation Note

Because Mx Studio leverages `@ffmpeg/ffmpeg` and client-side ONNX runtime threads via `SharedArrayBuffer`, your local server headers are pre-configured in `next.config.ts`:

```typescript
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: credentialless
```

When integrating external CDN media assets (e.g. testing with external video URLs), ensure the source server serves appropriate CORS headers (`Access-Control-Allow-Origin: *`), or proxy requests through the internal media bridge.

---

## 5. Git Hooks & Code Quality

Husky and lint-staged are configured to run automatically before commits:

- Pre-commit executes `prettier --write` and `eslint --fix` on all staged files.
- Ensures zero broken types, syntax errors, or formatting inconsistencies enter version control.
