"use client";

import React, { useState } from "react";
import {
  UploadCloud,
  Cpu,
  Sliders,
  CheckCircle2,
  Sparkles,
  Layers,
  Download,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";

const steps = [
  {
    num: "01",
    title: "Upload",
    tagline: "Bring your footage into Mx Studio.",
    description:
      "Drop raw 4K clips, mobile vertical video, screen recordings, or audio files. Zero codec re-compression required.",
    icon: UploadCloud,
    accent: "#F13DBB",
  },
  {
    num: "02",
    title: "AI Understands",
    tagline: "AI analyzes scenes and creates an editable editing plan.",
    description:
      "Neural models detect pacing, identify key emotional moments, generate kinetic captions, and isolate speech stems into multi-track layers.",
    icon: Cpu,
    accent: "#8B5CF6",
  },
  {
    num: "03",
    title: "Refine and Export",
    tagline: "Customize the timeline and export your final creation.",
    description:
      "You retain 100% creative control. Move clips, adjust keyframes, swap music stems, and render in ProRes or MP4.",
    icon: Sliders,
    accent: "#35C8F5",
  },
];

export function VideoEditingShowcase() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#090812] py-24 sm:py-36">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[600px] w-[900px] rounded-full bg-gradient-to-r from-[#F13DBB]/10 via-[#8B5CF6]/10 to-[#367BFF]/10 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#111326] px-3.5 py-1 text-xs font-medium text-[#35C8F5]">
            <Layers className="h-3.5 w-3.5" />
            <span>Interactive Workflow Breakdown</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            From Raw Footage to Ready-to-Publish.
          </h2>

          <p className="mt-4 text-base text-[#A5A5B8] sm:text-lg">
            Unlike black-box AI tools that output static non-editable videos, Mx
            Studio generates an **open, multi-track timeline** that you can
            infinitely modify.
          </p>
        </div>

        {/* 3 Step Selector Buttons */}
        <div className="mx-auto mb-12 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
          {steps.map((s, index) => {
            const Icon = s.icon;
            const isActive = activeStep === index;
            return (
              <button
                key={s.num}
                onClick={() => setActiveStep(index)}
                className={`relative flex flex-col justify-between rounded-2xl border p-5 text-left transition-all duration-300 ${
                  isActive
                    ? "border-white/30 bg-[#17182B] shadow-xl shadow-black/60"
                    : "border-white/5 bg-[#111326]/60 hover:border-white/15"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-step-border"
                    className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-[#35C8F5]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <span
                      className="rounded px-2 py-0.5 font-mono text-xs font-bold"
                      style={{
                        backgroundColor: `${s.accent}20`,
                        color: s.accent,
                      }}
                    >
                      STEP {s.num}
                    </span>
                    <Icon className="h-4 w-4 text-[#A5A5B8]" />
                  </div>

                  <h3 className="text-base font-semibold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#A5A5B8]">
                    {s.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Mockup Display for the Active Step */}
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-[#111326]/80 p-4 shadow-2xl backdrop-blur-2xl sm:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col gap-4"
            >
              {/* Top Banner explaining Current Step */}
              <div className="flex flex-col justify-between gap-3 rounded-xl border border-white/5 bg-[#17182B] p-3.5 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white"
                    style={{ backgroundColor: steps[activeStep].accent }}
                  >
                    {React.createElement(steps[activeStep].icon, {
                      className: "h-5 w-5",
                    })}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white sm:text-sm">
                      {steps[activeStep].title}: {steps[activeStep].tagline}
                    </h4>
                    <p className="text-[11px] text-[#A5A5B8]">
                      {steps[activeStep].description}
                    </p>
                  </div>
                </div>

                <Badge
                  variant="outline"
                  className="self-start border-white/10 text-xs text-white sm:self-auto"
                >
                  {activeStep === 0
                    ? "Ingest Mode"
                    : activeStep === 1
                      ? "Neural Analysis"
                      : "Timeline Synthesis"}
                </Badge>
              </div>

              {/* Dynamic Viewport Container */}
              <div className="grid min-h-[300px] grid-cols-12 gap-3">
                {/* Left Preview Screen */}
                <div className="relative col-span-12 flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-[#090812] p-4 md:col-span-8">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="font-mono text-[11px] text-[#A5A5B8]">
                      TIMELINE_STREAM:{" "}
                      {activeStep === 0
                        ? "Raw_Files_Staged"
                        : activeStep === 1
                          ? "Analyzing_Cuts"
                          : "MultiTrack_Master"}
                    </span>
                    <span className="font-mono text-[11px] text-[#35C8F5]">
                      00:00:42:15
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    {activeStep === 0 && (
                      <div className="flex flex-col items-center">
                        <UploadCloud className="animate-bounce-subtle mb-2 h-12 w-12 text-[#F13DBB]" />
                        <p className="text-sm font-semibold text-white">
                          Drag footage here or link Cloud storage
                        </p>
                        <p className="mt-1 text-xs text-[#A5A5B8]">
                          Accepts ProRes, MP4, MOV, WAV, RAW
                        </p>
                      </div>
                    )}

                    {activeStep === 1 && (
                      <div className="flex max-w-sm flex-col items-center">
                        <div className="relative mb-3">
                          <Cpu className="h-12 w-12 animate-pulse text-[#8B5CF6]" />
                          <Sparkles className="absolute -right-1 -top-1 h-4 w-4 text-[#35C8F5]" />
                        </div>
                        <p className="text-sm font-semibold text-white">
                          AI Structuring Project Plan
                        </p>
                        <p className="mt-1 text-xs text-[#A5A5B8]">
                          Generated 14 scene markers • Synchronized dialogue •
                          Added kinetic subtitles
                        </p>
                      </div>
                    )}

                    {activeStep === 2 && (
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="mb-2 h-12 w-12 text-[#35C8F5]" />
                        <p className="text-sm font-semibold text-white">
                          Full Non-Linear Multi-Track Workspace
                        </p>
                        <p className="mt-1 text-xs text-[#A5A5B8]">
                          Every track, keyframe, sound effect, and subtitle is
                          100% editable
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Bottom Strip */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-2 text-[11px] text-[#A5A5B8]">
                    <span>Frame Accurate Playhead</span>
                    <span className="font-mono text-white">
                      Rec.709 Color Space
                    </span>
                  </div>
                </div>

                {/* Right Inspector Box */}
                <div className="col-span-12 flex flex-col justify-between rounded-2xl border border-white/5 bg-[#090812] p-4 md:col-span-4">
                  <div>
                    <h5 className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-white">
                      <Sparkles className="h-3.5 w-3.5 text-[#F13DBB]" />
                      Editable Project Graph
                    </h5>
                    <div className="flex flex-col gap-2">
                      <div className="rounded border border-white/5 bg-[#17182B] p-2 text-[11px]">
                        <span className="font-mono text-[#35C8F5]">
                          Track V1:
                        </span>{" "}
                        A-Roll Footage
                      </div>
                      <div className="rounded border border-white/5 bg-[#17182B] p-2 text-[11px]">
                        <span className="font-mono text-[#F13DBB]">
                          Track V2:
                        </span>{" "}
                        B-Roll Transitions
                      </div>
                      <div className="rounded border border-white/5 bg-[#17182B] p-2 text-[11px]">
                        <span className="font-mono text-[#8B5CF6]">
                          Track A1:
                        </span>{" "}
                        Isolated Vocals
                      </div>
                      <div className="rounded border border-white/5 bg-[#17182B] p-2 text-[11px]">
                        <span className="font-mono text-green-400">
                          Track A2:
                        </span>{" "}
                        Sound FX & Stems
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 border-t border-white/5 pt-3">
                    <Button
                      size="sm"
                      className="h-8 w-full bg-gradient-to-r from-[#F13DBB] to-[#367BFF] text-xs text-white"
                    >
                      <Download className="mr-1.5 h-3.5 w-3.5" />
                      Export Master Package
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
