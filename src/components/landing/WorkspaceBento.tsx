"use client";

import React from "react";
import {
  Film,
  Camera,
  Target,
  Music,
  Palette,
  Sparkles,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

export function WorkspaceBento() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#090812] py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#111326] px-3.5 py-1 text-xs font-medium text-[#8B5CF6]">
            <Layers className="h-3.5 w-3.5" />
            <span>Unified Studio Ecosystem</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            One Workspace. Every Creative Possibility.
          </h2>

          <p className="mt-4 text-base text-[#A5A5B8] sm:text-lg">
            Never lose momentum switching between multiple single-purpose
            subscription apps.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* Card 1: Video Projects (Large: 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#111326]/60 p-7 backdrop-blur-xl transition-all hover:border-white/20 md:col-span-7"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#F13DBB]/40 bg-[#F13DBB]/20 text-[#F13DBB]">
                  <Film className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Non-Linear Video Timelines
                  </h3>
                  <p className="text-xs text-[#A5A5B8]">
                    Frame-accurate scrubbing & multi-layer composition
                  </p>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-[#A5A5B8] transition-colors group-hover:text-white" />
            </div>

            {/* Simulated Timeline Snippet */}
            <div className="my-4 space-y-2 rounded-xl border border-white/5 bg-[#090812] p-3">
              <div className="flex h-6 items-center justify-between rounded border border-[#F13DBB]/40 bg-gradient-to-r from-[#F13DBB]/30 to-[#8B5CF6]/30 px-3 text-[10px] font-medium text-white">
                <span>Cyberpunk_City_4K.mov</span>
                <span className="font-mono text-[#35C8F5]">00:01:14</span>
              </div>
              <div className="flex h-6 items-center justify-between rounded border border-[#8B5CF6]/40 bg-gradient-to-r from-[#8B5CF6]/30 to-[#367BFF]/30 px-3 text-[10px] font-medium text-white">
                <span>Vocal_Speech_Stem.wav</span>
                <span className="font-mono text-[#35C8F5]">Cleaned</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 text-xs text-[#A5A5B8]">
              <span>Supports ProRes 422, MP4, H.265</span>
              <span className="font-mono text-[#35C8F5]">60 FPS Native</span>
            </div>
          </motion.div>

          {/* Card 2: Photo Projects (Medium: 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#111326]/60 p-7 backdrop-blur-xl transition-all hover:border-white/20 md:col-span-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#8B5CF6]/40 bg-[#8B5CF6]/20 text-[#8B5CF6]">
                  <Camera className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Generative Photo Retouch
                  </h3>
                  <p className="text-xs text-[#A5A5B8]">
                    FLUX.1 Diffusion & 8K Inpainting
                  </p>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-[#A5A5B8] transition-colors group-hover:text-white" />
            </div>

            <div className="my-4 flex h-24 items-center justify-center rounded-xl border border-white/5 bg-gradient-to-tr from-[#1b1236] to-[#0d1633]">
              <Badge className="border-[#8B5CF6]/50 bg-[#8B5CF6]/30 px-3 py-1 text-xs text-white">
                <Sparkles className="mr-1 h-3 w-3 text-[#35C8F5]" />
                Zero-Artifact Edge Matting
              </Badge>
            </div>

            <div className="flex items-center justify-between text-xs text-[#A5A5B8]">
              <span>Background Removal in &lt;1.2s</span>
              <span className="font-mono text-green-400">8192×5464 RAW</span>
            </div>
          </motion.div>

          {/* Card 3: Ad Campaigns (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-[#111326]/60 p-7 backdrop-blur-xl transition-all hover:border-white/20 md:col-span-4"
          >
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#367BFF]/40 bg-[#367BFF]/20 text-[#367BFF]">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Ad Campaign Matrix
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#A5A5B8]">
                Generate 9:16, 1:1, and 16:9 creative sets simultaneously with
                automated hook variations.
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-3 text-xs text-[#35C8F5]">
              <span>Multi-Platform Ready</span>
              <span>1-Click Sync</span>
            </div>
          </motion.div>

          {/* Card 4: Audio Stems (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-[#111326]/60 p-7 backdrop-blur-xl transition-all hover:border-white/20 md:col-span-4"
          >
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#35C8F5]/40 bg-[#35C8F5]/20 text-[#35C8F5]">
                <Music className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Stem Isolation Engine
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#A5A5B8]">
                Demucs 4-stem separation extracts vocals, drums, bass, and
                ambience directly in browser memory.
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-3 text-xs text-[#35C8F5]">
              <span>99.4% Vocal Isolation</span>
              <span>WAV Master</span>
            </div>
          </motion.div>

          {/* Card 5: Brand Kits & Cloud Render (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-[#111326]/60 p-7 backdrop-blur-xl transition-all hover:border-white/20 md:col-span-4"
          >
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#F13DBB]/40 bg-[#F13DBB]/20 text-[#F13DBB]">
                <Palette className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Brand Kits & Storage
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#A5A5B8]">
                Persistent brand colors, custom font hierarchies, and
                zero-egress Cloudflare R2 asset hosting.
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-3 text-xs text-[#35C8F5]">
              <span>Distributed Sync</span>
              <span>Unlimited Bins</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
