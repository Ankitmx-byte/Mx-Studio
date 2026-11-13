# Mx Studio - AI Models & Integration Roadmap

## 1. Overview & Policy

Mx Studio integrates advanced AI models across four creative domains: Video, Photo, Audio, and Multimodal Ads.

> **CRITICAL REPOSITORY POLICY**:
> Large AI model binary weights (`.safetensors`, `.bin`, `.onnx`, `.ckpt`) are **never** committed directly into the Git repository or downloaded automatically during frontend builds. All model assets are cached in external storage (Cloudflare R2 / Hugging Face Hub / Dedicated Model Registries) and provisioned on-demand or served via specialized inference endpoints.

---

## 2. Model Catalog, Licenses & Resource Specifications

### 2.1 AI Video Generation & Editing

| Model / Pipeline         | Commercial License | Format / Precision        | Storage Requirement | Recommended Deployment                                                          |
| :----------------------- | :----------------- | :------------------------ | :------------------ | :------------------------------------------------------------------------------ |
| **Wan2.1 (T2V & I2V)**   | Apache 2.0         | FP8 / BF16 `.safetensors` | 14 GB – 28 GB       | Private GPU Node (1x NVIDIA A100 80GB or L40S) or serverless fal.ai / Replicate |
| **CogVideoX-5B**         | Apache 2.0         | BF16 `.safetensors`       | 10 GB – 12 GB       | Private GPU Node (1x NVIDIA A10G 24GB)                                          |
| **AnimatedDiff-Evolved** | Apache 2.0         | FP16 `.safetensors`       | 3.5 GB              | Containerized ComfyUI worker                                                    |
| **Real-ESRGAN Video**    | BSD 3-Clause       | ONNX / FP16               | 65 MB               | Client-side WebGPU (small upscaling) or Server Worker (4K)                      |

### 2.2 AI Photo Studio (Generation, Inpainting, Restoration)

| Model / Pipeline             | Commercial License                             | Format / Precision        | Storage Requirement              | Recommended Deployment                                   |
| :--------------------------- | :--------------------------------------------- | :------------------------ | :------------------------------- | :------------------------------------------------------- |
| **FLUX.1 [schnell]**         | Apache 2.0                                     | FP8 / BF16 `.safetensors` | 12 GB – 24 GB                    | Private GPU Pool or BFL API / fal.ai                     |
| **FLUX.1 [dev]**             | Non-Commercial / Commercial with BFL Agreement | FP8 / BF16 `.safetensors` | 24 GB                            | Dedicated Enterprise Tier                                |
| **SDXL 1.0 + ControlNet**    | OpenRAIL++ (Commercial Allowed)                | FP16 `.safetensors`       | 6.5 GB + 1.4 GB (per ControlNet) | GPU Worker (RunPod / Modal)                              |
| **BRIA RMBG 1.4 / 2.0**      | BRIA Commercial License / CreativeML           | ONNX FP16                 | 175 MB                           | Client Edge (WebGPU) for instant background removal      |
| **Segment Anything (SAM 2)** | Apache 2.0                                     | ONNX INT8 / FP16          | 350 MB (Tiny) to 1.8 GB (Large)  | Hybrid: SAM-Tiny on client WebAssembly; SAM-Large on GPU |

### 2.3 Audio Studio (Voice, Music, Stems)

| Model / Pipeline                   | Commercial License                            | Format / Precision    | Storage Requirement       | Recommended Deployment                                               |
| :--------------------------------- | :-------------------------------------------- | :-------------------- | :------------------------ | :------------------------------------------------------------------- |
| **Demucs v4 (Hybrid Transformer)** | MIT                                           | PyTorch / TorchScript | 1.2 GB                    | GPU Worker for 4-stem separation (vocals, drums, bass, other)        |
| **Whisper large-v3-turbo**         | MIT                                           | GGUF / ONNX / PyTorch | 1.6 GB                    | Client-side ONNX / WebGPU for instant subtitles; Server for batch    |
| **XTTS v2 / ElevenLabs**           | Coqui Public License / Proprietary Commercial | PyTorch / REST API    | 1.8 GB (XTTS) / Cloud API | Managed ElevenLabs API for pro voiceovers; self-hosted XTTS fallback |
| **MusicGen Small/Medium**          | MIT                                           | PyTorch FP16          | 1.5 GB – 3.2 GB           | Background music generation worker                                   |

### 2.4 Multi-Platform AI Ad Studio

| Model / Pipeline                      | Commercial License                              | Format / Precision | Storage Requirement | Recommended Deployment                                                                |
| :------------------------------------ | :---------------------------------------------- | :----------------- | :------------------ | :------------------------------------------------------------------------------------ |
| **Llama 3.3 70B / Claude 3.5 Sonnet** | Meta Llama 3 Community License / Commercial API | Token-based API    | Cloud Hosted        | Generates platform-specific ad hooks, CTA copy, and audience variants                 |
| **YOLOv10 / MediaPipe Vision**        | AGPL-3.0 / Apache 2.0                           | ONNX INT8          | 25 MB – 45 MB       | Client-side instant subject framing and smart aspect ratio cropping (9:16, 1:1, 16:9) |

---

## 3. Client-Side Edge Inference (WebAssembly & WebGPU)

To deliver instant interactive responses in the editor without server latency:

1. **MediaPipe Tasks Vision**:
   - Packaged with `@mediapipe/tasks-vision`.
   - Client executes face landmarks, background matting, and gesture tracking directly in browser canvas memory.
2. **ONNX Runtime Web (`onnxruntime-web`)**:
   - Executes quantized INT8 ONNX models via WebGPU backend.
   - Used for interactive smart scissors, subject selection, and real-time audio waveform noise profiling.

---

## 4. Multi-Phase Implementation Roadmap

### Phase 1: Foundations & Hybrid Gateway (Current)

- Complete UI shell, design tokens, and timeline architecture.
- Wire WebAssembly FFmpeg and client-side MediaPipe foundation.
- Implement API proxy layer for managed providers (fal.ai, Replicate, ElevenLabs, OpenAI).

### Phase 2: Dedicated Microservices & In-Browser Edge ML

- Deploy containerized FastAPI microservices on RunPod / Modal for FLUX and Wan2.1.
- Enable ONNX WebGPU background removal and Whisper client transcription.

### Phase 3: Distributed Rendering & Enterprise Fine-Tuning

- BullMQ worker fleet for high-concurrency 4K video rendering.
- LoRA training pipeline for custom brand kit styles and enterprise avatar synthesis.
