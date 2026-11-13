"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  TrendingUp,
  Target,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const adVariants = [
  {
    id: "variant-1",
    format: "TikTok & Reels (9:16)",
    hook: "The problem with traditional noise-cancelling headphones...",
    predictedCTR: "5.4%",
    badge: "Top Performer",
    badgeColor: "#F13DBB",
    aspect: "h-64 w-36",
    content: "Dynamic Fast-Cut UGC",
  },
  {
    id: "variant-2",
    format: "Instagram Feed (1:1)",
    hook: "Studio fidelity meets featherlight ergonomic comfort.",
    predictedCTR: "4.8%",
    badge: "High ROAS",
    badgeColor: "#8B5CF6",
    aspect: "h-52 w-52",
    content: "Product Macro Reveal",
  },
  {
    id: "variant-3",
    format: "YouTube & Display (16:9)",
    hook: "Hear every nuance in 24-bit lossless spatial audio.",
    predictedCTR: "4.2%",
    badge: "Scale Ready",
    badgeColor: "#367BFF",
    aspect: "h-36 w-60",
    content: "Cinematic Narrative",
  },
];

export function AdStudioShowcase() {
  const [activeHook, setActiveHook] = useState(0);

  const hooks = [
    "Stop wasting budget on ads nobody watches past second three.",
    "The 3-second hook that lifted DTC conversions by 38%.",
    "Why leading agency creative directors switched to AI ad matrices.",
  ];

  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#090812] py-24 sm:py-36">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-[#F13DBB]/10 blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-[#35C8F5]/10 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#111326] px-3.5 py-1 text-xs font-medium text-[#F13DBB]">
            <TrendingUp className="h-3.5 w-3.5" />
            <span>High-Conversion Ad Engine</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            One Product. Endless Ad Possibilities.
          </h2>

          <p className="mt-4 text-base text-[#A5A5B8] sm:text-lg">
            Create scroll-stopping video ads, image creatives and high-impact
            advertising concepts with AI.
          </p>
        </div>

        {/* Campaign Workspace Container */}
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-[#111326]/70 p-6 shadow-2xl backdrop-blur-2xl sm:p-10">
          {/* Top Campaign Control Ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#F13DBB] to-[#8B5CF6] text-white shadow-md">
                <Target className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">
                  Campaign: Aura Pro Audio — Global Q4 Rollout
                </h3>
                <p className="text-xs text-[#A5A5B8]">
                  Objective: Conversions • Target Audience: Creators & Tech
                  Enthusiasts
                </p>
              </div>
            </div>

            {/* Ethical Disclosure Badge */}
            <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#17182B] px-3 py-1 text-[11px] text-[#A5A5B8]">
              <ShieldCheck className="h-3.5 w-3.5 text-green-400" />
              <span>AI Creative Simulation • Disclosure Compliant</span>
            </div>
          </div>

          {/* Hook Generator Row */}
          <div className="border-b border-white/5 py-6">
            <div className="mb-3 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-white">
                <Sparkles className="h-3.5 w-3.5 text-[#35C8F5]" />
                Neural Hook Generation Engine (Tested on 10,000+ winning
                creatives)
              </span>
              <span className="text-[11px] text-[#35C8F5]">Select Hook:</span>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              {hooks.map((hook, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveHook(idx)}
                  className={`cursor-pointer rounded-xl border p-3 text-xs transition-all ${
                    activeHook === idx
                      ? "border-[#F13DBB] bg-[#17182B] text-white shadow-lg shadow-[#F13DBB]/10"
                      : "border-white/5 bg-[#090812] text-[#A5A5B8] hover:border-white/20"
                  }`}
                >
                  <div className="mb-1 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#F13DBB]">
                      HOOK 0{idx + 1}
                    </span>
                    {activeHook === idx && (
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#F13DBB]" />
                    )}
                  </div>
                  <p className="leading-relaxed">&ldquo;{hook}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>

          {/* Side-by-Side Multi-Format Creative Preview Matrix */}
          <div className="pt-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Multi-Platform Creative Variations Generated in Parallel
                </h4>
                <p className="text-xs text-[#A5A5B8]">
                  Export formatted for TikTok, Reels, Instagram Feed, YouTube
                  Shorts, and Display.
                </p>
              </div>

              <Badge className="border-[#367BFF]/30 bg-[#367BFF]/20 text-xs text-[#35C8F5]">
                Batch Render Ready
              </Badge>
            </div>

            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
              {adVariants.map((variant) => (
                <div
                  key={variant.id}
                  className="group flex flex-col items-center justify-between rounded-2xl border border-white/10 bg-[#090812] p-4 text-center transition-all duration-300 hover:border-white/25"
                >
                  {/* Top Details */}
                  <div className="mb-3 flex w-full items-center justify-between text-[11px]">
                    <span className="font-medium text-[#A5A5B8]">
                      {variant.format}
                    </span>
                    <Badge
                      style={{
                        backgroundColor: `${variant.badgeColor}20`,
                        color: variant.badgeColor,
                        borderColor: `${variant.badgeColor}40`,
                      }}
                      className="py-0 text-[10px]"
                    >
                      {variant.badge}
                    </Badge>
                  </div>

                  {/* Creative Preview Display */}
                  <div className="my-3 flex min-h-[220px] w-full items-center justify-center">
                    <div
                      className={`flex flex-col justify-between rounded-xl border border-white/15 bg-gradient-to-br from-[#1d1238] via-[#0e1633] to-[#0a233b] p-3 shadow-xl ${variant.aspect}`}
                    >
                      <div className="self-start">
                        <span className="rounded bg-black/60 px-1.5 py-0.5 text-[8px] font-bold text-white">
                          SPONSORED
                        </span>
                      </div>

                      <div className="my-auto text-center">
                        <div className="mx-auto mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                          <Sparkles className="h-5 w-5 text-[#35C8F5]" />
                        </div>
                        <span className="block text-[9px] font-bold text-white">
                          AURA EARBUDS
                        </span>
                        <span className="block text-[7px] text-[#A5A5B8]">
                          {variant.content}
                        </span>
                      </div>

                      <div className="w-full rounded bg-[#F13DBB] py-1 text-center text-[8px] font-bold text-white">
                        Shop Now
                      </div>
                    </div>
                  </div>

                  {/* Metrics Footer */}
                  <div className="flex w-full items-center justify-between border-t border-white/5 pt-3 text-[11px]">
                    <span className="text-[#A5A5B8]">Predicted CTR:</span>
                    <span className="font-mono font-bold text-green-400">
                      {variant.predictedCTR}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Link href="/ad-studio">
                <Button className="h-11 bg-gradient-to-r from-[#F13DBB] via-[#8B5CF6] to-[#367BFF] px-8 text-white">
                  Launch AI Ad Campaign Matrix
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
