"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Play,
  Scissors,
  Wand2,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProVideoEditorMockup } from "@/components/landing/mockups/ProVideoEditorMockup";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[95vh] flex-col justify-center overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-36">
      {/* Background Cinematic Lighting Accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Top Center Pink-Purple Nebula */}
        <div className="absolute -top-32 left-1/2 h-[550px] w-[950px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#F13DBB]/20 via-[#8B5CF6]/20 to-[#367BFF]/15 blur-[150px]" />
        {/* Right Electric Blue Rim Light */}
        <div className="absolute -right-20 top-1/3 h-[450px] w-[500px] rounded-full bg-[#367BFF]/15 blur-[140px]" />
        {/* Left Cyan Accent */}
        <div className="absolute -left-20 bottom-10 h-[400px] w-[450px] rounded-full bg-[#35C8F5]/10 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Top Tagline & Badge */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#111326]/80 px-4 py-1.5 text-xs text-[#A5A5B8] shadow-lg shadow-black/40 backdrop-blur-md"
          >
            <span className="flex h-2 w-2 animate-ping rounded-full bg-[#35C8F5]" />
            <span className="font-medium text-white">
              Next-Generation Creative Workspace
            </span>
            <span className="text-white/20">•</span>
            <span className="text-[#F13DBB]">v1.0 Pro Release</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Create{" "}
            <span className="bg-gradient-to-r from-[#F13DBB] via-[#8B5CF6] via-50% to-[#35C8F5] bg-clip-text text-transparent">
              Beyond Limits.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 text-xl font-light tracking-wide text-white/90 sm:text-2xl md:text-3xl"
          >
            Your Entire Creative Workflow, Powered by AI.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#A5A5B8] sm:text-base md:text-lg"
          >
            Create professional videos, transform photos, produce stunning
            advertisements and elevate your content with one powerful AI-powered
            creative workspace.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="#pricing">
              <Button
                size="lg"
                className="h-12 rounded-xl bg-gradient-to-r from-[#F13DBB] via-[#8B5CF6] to-[#367BFF] px-7 font-semibold text-white shadow-xl shadow-[#F13DBB]/25 transition-all duration-200 hover:scale-[1.02] hover:shadow-[#F13DBB]/40 active:scale-[0.98]"
              >
                <Sparkles className="mr-2 h-4 w-4 text-[#35C8F5]" />
                Start 3-Day Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Link href="#features">
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-xl border-white/10 bg-[#111326]/80 px-6 font-medium text-white backdrop-blur-md transition-all duration-200 hover:border-white/20 hover:bg-[#17182B]"
              >
                <Play className="mr-2 h-4 w-4 fill-current text-[#35C8F5]" />
                Explore Studio
              </Button>
            </Link>
          </motion.div>

          {/* Supporting Micro-copy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-3 text-xs text-[#A5A5B8]/70"
          >
            One creative workspace. Endless possibilities.
          </motion.p>
        </div>

        {/* Hero Visual: Realistic Pro Creative Software Interface Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="sm:mt-18 relative mt-14"
        >
          {/* Subtle Outer Glow & Gradient Rim Border */}
          <div className="relative mx-auto max-w-5xl rounded-3xl bg-gradient-to-b from-white/15 via-white/5 to-transparent p-1 shadow-2xl shadow-black/80 backdrop-blur-2xl">
            <ProVideoEditorMockup />
          </div>

          {/* Floating Feature Card 1 (Left Top) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="animate-bounce-subtle absolute -left-6 top-1/4 hidden max-w-xs items-center gap-3 rounded-2xl border border-white/10 bg-[#111326]/90 p-3.5 shadow-2xl shadow-black/60 backdrop-blur-xl lg:flex"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F13DBB] to-[#8B5CF6] text-white shadow-md">
              <Scissors className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-white">
                  Smart Scene Cut
                </span>
                <Badge className="bg-[#35C8F5]/20 px-1.5 py-0 text-[9px] text-[#35C8F5]">
                  AI
                </Badge>
              </div>
              <p className="mt-0.5 text-[11px] text-[#A5A5B8]">
                Scene detected at 00:14:22 with auto-transition.
              </p>
            </div>
          </motion.div>

          {/* Floating Feature Card 2 (Right Top) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute -right-6 top-1/3 hidden max-w-xs items-center gap-3 rounded-2xl border border-white/10 bg-[#111326]/90 p-3.5 shadow-2xl shadow-black/60 backdrop-blur-xl lg:flex"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#367BFF] to-[#35C8F5] text-white shadow-md">
              <Wand2 className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-white">
                  Voice Isolate
                </span>
                <span className="font-mono text-[10px] font-medium text-green-400">
                  99.4%
                </span>
              </div>
              <p className="mt-0.5 text-[11px] text-[#A5A5B8]">
                Studio-grade vocal purity via Demucs AI.
              </p>
            </div>
          </motion.div>

          {/* Floating Feature Card 3 (Bottom Center Left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="absolute -bottom-5 left-8 hidden items-center gap-2.5 rounded-xl border border-white/10 bg-[#17182B]/95 px-3.5 py-2 shadow-xl shadow-black/50 backdrop-blur-md sm:flex"
          >
            <CheckCircle2 className="h-4 w-4 text-[#35C8F5]" />
            <span className="text-xs font-medium text-white">
              Editable Timeline Multi-Track Generation
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
