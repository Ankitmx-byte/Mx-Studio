"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Video, Camera, Sparkles, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VideoFeatureMockup } from "@/components/landing/mockups/VideoFeatureMockup";
import { PhotoStudioMockup } from "@/components/landing/mockups/PhotoStudioMockup";
import { AdStudioMockup } from "@/components/landing/mockups/AdStudioMockup";
import { AudioStudioMockup } from "@/components/landing/mockups/AudioStudioMockup";
import { motion } from "motion/react";

export function FeatureShowcase() {
  return (
    <section id="features" className="relative bg-[#090812] py-24 sm:py-36">
      {/* Subtle Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 h-[400px] w-[500px] rounded-full bg-[#F13DBB]/10 blur-[140px]" />
        <div className="absolute left-0 top-2/3 h-[450px] w-[550px] rounded-full bg-[#367BFF]/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#111326] px-3 py-1 text-xs font-medium text-[#F13DBB]">
            <Sparkles className="h-3 w-3" />
            <span>Built For Modern Creators</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Four Studios. One Seamless Workspace.
          </h2>
          <p className="mt-4 text-base text-[#A5A5B8] sm:text-lg">
            Engineered from the ground up for high-velocity creative teams and
            solo visionaries.
          </p>
        </div>

        {/* Feature 1: AI Video Studio */}
        <div id="ai-video" className="mb-24 sm:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 items-center gap-8 rounded-3xl border border-white/10 bg-[#111326]/60 p-6 backdrop-blur-xl sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12"
          >
            <div className="flex flex-col justify-center lg:col-span-5">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F13DBB]">
                <Video className="h-4 w-4" />
                <span>AI Video Studio</span>
              </div>
              <h3 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Videos That Come Together Intelligently.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#A5A5B8] sm:text-base">
                Turn raw footage into polished content with AI-powered editing
                workflows, smart scene selection, captions, reframing and audio
                enhancement.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs text-[#A5A5B8]">
                <span className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1">
                  ✓ Scene Cut Detection
                </span>
                <span className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1">
                  ✓ Kinetic Captions
                </span>
                <span className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1">
                  ✓ Smart 9:16 Reframe
                </span>
              </div>
              <div className="mt-8">
                <Link href="/video-studio">
                  <Button className="bg-gradient-to-r from-[#F13DBB] to-[#8B5CF6] text-white hover:opacity-95">
                    Explore AI Video Studio
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <VideoFeatureMockup />
            </div>
          </motion.div>
        </div>

        {/* Feature 2: AI Photo Studio */}
        <div id="ai-photo" className="mb-24 sm:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 items-center gap-8 rounded-3xl border border-white/10 bg-[#111326]/60 p-6 backdrop-blur-xl sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12"
          >
            <div className="order-2 lg:order-1 lg:col-span-7">
              <PhotoStudioMockup />
            </div>

            <div className="order-1 flex flex-col justify-center lg:order-2 lg:col-span-5">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8B5CF6]">
                <Camera className="h-4 w-4" />
                <span>AI Photo Studio</span>
              </div>
              <h3 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Transform Every Image.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#A5A5B8] sm:text-base">
                Enhance images, remove backgrounds, erase unwanted objects and
                create beautiful visuals using intelligent image editing tools.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs text-[#A5A5B8]">
                <span className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1">
                  ✓ Precision Background Matting
                </span>
                <span className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1">
                  ✓ Generative Inpainting
                </span>
                <span className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1">
                  ✓ 8K Upscale Diffusion
                </span>
              </div>
              <div className="mt-8">
                <Link href="/photo-studio">
                  <Button className="bg-gradient-to-r from-[#8B5CF6] to-[#367BFF] text-white hover:opacity-95">
                    Explore AI Photo Studio
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature 3: AI Ad Studio */}
        <div id="ai-ads" className="mb-24 sm:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 items-center gap-8 rounded-3xl border border-white/10 bg-[#111326]/60 p-6 backdrop-blur-xl sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12"
          >
            <div className="flex flex-col justify-center lg:col-span-5">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#367BFF]">
                <Sparkles className="h-4 w-4" />
                <span>AI Ad Studio</span>
              </div>
              <h3 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Create Ads That Capture Attention.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#A5A5B8] sm:text-base">
                Generate advertising concepts, video creatives, product visuals,
                UGC-style content and multiple creative variations from one
                workspace.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs text-[#A5A5B8]">
                <span className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1">
                  ✓ Hook Variant Generation
                </span>
                <span className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1">
                  ✓ Multi-Ratio Aspect Export
                </span>
                <span className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1">
                  ✓ Conversion Predictive Scoring
                </span>
              </div>
              <div className="mt-8">
                <Link href="/ad-studio">
                  <Button className="bg-gradient-to-r from-[#367BFF] to-[#35C8F5] text-white hover:opacity-95">
                    Explore AI Ad Studio
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <AdStudioMockup />
            </div>
          </motion.div>
        </div>

        {/* Feature 4: Audio Studio */}
        <div id="audio-studio">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 items-center gap-8 rounded-3xl border border-white/10 bg-[#111326]/60 p-6 backdrop-blur-xl sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12"
          >
            <div className="order-2 lg:order-1 lg:col-span-7">
              <AudioStudioMockup />
            </div>

            <div className="order-1 flex flex-col justify-center lg:order-2 lg:col-span-5">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#35C8F5]">
                <Music className="h-4 w-4" />
                <span>Audio Studio</span>
              </div>
              <h3 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Make Every Sound Better.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#A5A5B8] sm:text-base">
                Improve voice quality, clean recordings, reduce noise, visualize
                waveforms and enhance your audio production workflow.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs text-[#A5A5B8]">
                <span className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1">
                  ✓ Demucs 4-Stem Separation
                </span>
                <span className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1">
                  ✓ Spectral Noise Suppression
                </span>
                <span className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1">
                  ✓ Neural Voice Polish
                </span>
              </div>
              <div className="mt-8">
                <Link href="/audio-studio">
                  <Button className="bg-gradient-to-r from-[#35C8F5] to-[#F13DBB] text-white hover:opacity-95">
                    Explore Audio Studio
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
