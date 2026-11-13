# Mx Studio - Design System & Visual Guidelines

## 1. Aesthetic Identity

**Mx Studio** is designed as a **luxury, high-precision creative workstation**. Its visual identity avoids generic SaaS dashboards, cartoonish elements, excessive neon flares, or distracting background animations.

Instead, the interface mirrors the refined ergonomics of professional creative suites (such as DaVinci Resolve, Cinema 4D, and Figma), elevated by cinematic dark tones, subtle glassmorphic layers, razor-thin gradient borders, and purposeful micro-interactions.

---

## 2. Color Palette & Design Tokens

### 2.1 Surfaces & Canvas (Dark by Default)

| Token Name               | Hex Code  | HSL Representation   | Semantic Purpose                                                            |
| :----------------------- | :-------- | :------------------- | :-------------------------------------------------------------------------- |
| **Workspace Background** | `#090812` | `hsl(247, 38%, 5%)`  | Deep cosmic canvas. Primary background for editors and viewport wrappers.   |
| **Secondary Surface**    | `#111326` | `hsl(235, 38%, 11%)` | Sidebars, inspector panels, timeline tracks, and toolbar dock containers.   |
| **Elevated Surface**     | `#17182B` | `hsl(237, 30%, 13%)` | Modals, dropdown menus, context menus, hover cards, and active layer items. |

### 2.2 Brand Accents & Gradients

| Accent Name        | Hex Code  | HSL Representation    | Semantic Purpose                                                         |
| :----------------- | :-------- | :-------------------- | :----------------------------------------------------------------------- |
| **Primary Pink**   | `#F13DBB` | `hsl(318, 86%, 59%)`  | Primary CTA buttons, video studio accents, recording indicators.         |
| **Vibrant Purple** | `#8B5CF6` | `hsl(258, 90%, 66%)`  | Secondary actions, AI transformation indicators, audio track highlights. |
| **Electric Blue**  | `#367BFF` | `hsl(219, 100%, 61%)` | Keyframe markers, timeline playhead, selection rings, active tabs.       |
| **Luminous Cyan**  | `#35C8F5` | `hsl(194, 91%, 58%)`  | Data visualizations, credit badges, audio waveform peaks, tooltips.      |

### 2.3 Typography & Text Contrast

| Token Name         | Hex Code  | HSL Representation   | Purpose                                                            |
| :----------------- | :-------- | :------------------- | :----------------------------------------------------------------- |
| **Primary Text**   | `#FFFFFF` | `hsl(0, 0%, 100%)`   | Headings, active menu labels, clip titles, primary value readouts. |
| **Secondary Text** | `#A5A5B8` | `hsl(240, 11%, 69%)` | Subtitles, timecodes, secondary metadata, inactive button labels.  |
| **Muted Text**     | `#606075` | `hsl(240, 10%, 42%)` | Placeholder text, disabled actions, minor timeline ticks.          |

---

## 3. Glassmorphism & Elevation Hierarchy

### Elevation Layers

1. **Level 0 (Canvas Base)**: `#090812` - Raw backdrop, zero shadow.
2. **Level 1 (Dock / Panels)**: `#111326` with `1px solid rgba(255, 255, 255, 0.06)` border.
3. **Level 2 (Floating Cards / Menus)**: `#17182B` with `backdrop-blur-md`, subtle box shadow `0 8px 32px rgba(0, 0, 0, 0.45)`.
4. **Level 3 (Modals / Overlays)**: `#17182B` with high-emphasis border gradient `linear-gradient(135deg, rgba(241, 61, 187, 0.25), rgba(54, 123, 255, 0.25))`.

---

## 4. Typography Scale & Hierarchy

- **Font Family**: Inter / Geist Sans for UI elements; JetBrains Mono for timecodes, frame counters, and coordinate readouts.
- **Display Headings**: Font weight 700 / 800, tight tracking (`-0.025em`).
- **Workspace Labels**: Font size `11px - 13px`, font weight 500 / 600, uppercase with letter-spacing `0.05em` for panel section headers.
- **Timecode & Scrubbers**: Tabular numerals (`tabular-nums`) to prevent layout jittering during real-time scrubbing.

---

## 5. Micro-Interactions & Animation Guidelines

1. **Snappy Workspace Controls**:
   - Tool switches, button hover states: `duration-150 ease-out`.
   - Scale feedback on click: `transform: scale(0.98)` on active.
2. **Context Menus & Modals**:
   - Enter: Opacity 0 -> 1, Scale 0.95 -> 1.0 (`duration-200 cubic-bezier(0.16, 1, 0.3, 1)`).
3. **Timeline Scrubbing**:
   - Zero transition latency on cursor follow to maintain immediate tactile responsiveness.
4. **Accessibility (Reduced Motion)**:
   - All motion and CSS transition styles must be conditionally bypassed when `@media (prefers-reduced-motion: reduce)` is detected.

---

## 6. Curated UI Component Integration Guidelines

For non-npm copy-and-paste component libraries:

- **Aceternity UI** (`https://ui.aceternity.com/`):
  - _Adopted_: Glowing gradient borders, Bento Grid layouts, Lamp/Beam hero headers.
  - _Filtered Out_: Overly dramatic full-screen particle explosions that hinder readability.
- **Magic UI** (`https://magicui.design/`):
  - _Adopted_: Animated grid backgrounds, marquee badges, shine border buttons, number tickers for credits.
  - _Filtered Out_: Cluttered decorative shapes.
- **React Bits** (`https://www.reactbits.dev/`):
  - _Adopted_: Split text reveals, magnetic buttons, spotlight cards.
- **Origin UI** (`https://originui.com/`):
  - _Adopted_: Micro-inputs, multi-select dropdowns, compact slider inputs with numeric badges, tab switchers.
