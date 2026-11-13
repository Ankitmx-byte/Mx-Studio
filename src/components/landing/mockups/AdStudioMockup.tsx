"use client";

import React, { useState } from "react";
import { Smartphone, Square, Monitor, Tag, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function AdStudioMockup() {
  const [ratio, setRatio] = useState<"9:16" | "1:1" | "16:9">("9:16");
  const [selectedVariant, setSelectedVariant] = useState<"A" | "B" | "C">("A");

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-[#090812] font-sans text-xs text-white shadow-xl">
      {/* Top Bar: Platform Selector */}
      <div className="flex items-center justify-between border-b border-white/10 bg-[#111326] px-3 py-2">
        <div className="flex items-center gap-2">
          <Tag className="h-4 w-4 text-[#35C8F5]" />
          <span className="text-[11px] font-medium text-white">
            Campaign: Aura_Wireless_Earbuds
          </span>
        </div>

        {/* Aspect Ratio Switcher */}
        <div className="flex items-center gap-1 rounded-lg border border-white/5 bg-[#17182B] p-0.5">
          <button
            onClick={() => setRatio("9:16")}
            className={`flex items-center gap-1 rounded px-2 py-0.5 text-[10px] transition-colors ${
              ratio === "9:16" ? "bg-[#367BFF] text-white" : "text-[#A5A5B8]"
            }`}
          >
            <Smartphone className="h-3 w-3" />
            9:16 Reels/TikTok
          </button>
          <button
            onClick={() => setRatio("1:1")}
            className={`flex items-center gap-1 rounded px-2 py-0.5 text-[10px] transition-colors ${
              ratio === "1:1" ? "bg-[#367BFF] text-white" : "text-[#A5A5B8]"
            }`}
          >
            <Square className="h-3 w-3" />
            1:1 Feed
          </button>
          <button
            onClick={() => setRatio("16:9")}
            className={`flex items-center gap-1 rounded px-2 py-0.5 text-[10px] transition-colors ${
              ratio === "16:9" ? "bg-[#367BFF] text-white" : "text-[#A5A5B8]"
            }`}
          >
            <Monitor className="h-3 w-3" />
            16:9 Landscape
          </button>
        </div>
      </div>

      {/* Main Grid: Ad Preview + Variant Matrix */}
      <div className="grid grid-cols-12 gap-3 bg-[#0d0c18] p-3">
        {/* Left: Active Creative Mockup */}
        <div className="col-span-12 flex flex-col items-center justify-center rounded-xl border border-white/5 bg-[#111326]/60 p-3 sm:col-span-7">
          <div
            className={`relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#1c1236] via-[#10142b] to-[#0b1b36] p-3.5 shadow-lg transition-all duration-300 ${
              ratio === "9:16"
                ? "h-72 w-44"
                : ratio === "1:1"
                  ? "h-56 w-56"
                  : "h-44 w-72"
            }`}
          >
            {/* Top Hook Pill */}
            <div className="self-start">
              <span className="inline-flex items-center gap-1 rounded-full border border-[#F13DBB]/40 bg-black/70 px-2 py-0.5 text-[9px] font-bold text-[#F13DBB] backdrop-blur-md">
                <Sparkles className="h-2.5 w-2.5" />
                {selectedVariant === "A"
                  ? "Stop Scrolling: 40hr Battery"
                  : selectedVariant === "B"
                    ? "Audiophiles Call It Perfection"
                    : "Why 50,000 Creators Upgraded"}
              </span>
            </div>

            {/* Product Center Visual */}
            <div className="flex flex-col items-center self-center text-center">
              <div className="flex h-16 w-16 animate-pulse items-center justify-center rounded-full border border-[#35C8F5]/50 bg-gradient-to-tr from-[#35C8F5]/20 to-[#8B5CF6]/20">
                <span className="text-[10px] font-bold tracking-widest text-white">
                  AURA
                </span>
              </div>
              <span className="mt-1 text-[10px] font-semibold text-white">
                Noise Cancelling v2
              </span>
            </div>

            {/* Bottom CTA Button */}
            <div className="self-stretch">
              <div className="w-full rounded-lg bg-gradient-to-r from-[#F13DBB] to-[#367BFF] py-1.5 text-center text-[10px] font-bold text-white shadow-md">
                Claim 20% Off Launch Deal
              </div>
            </div>
          </div>
        </div>

        {/* Right: Variation Matrix */}
        <div className="col-span-12 flex flex-col justify-between gap-2 sm:col-span-5">
          <div className="flex items-center justify-between text-[11px] font-semibold text-white">
            <span>A/B Creative Matrix</span>
            <Badge className="bg-[#35C8F5]/20 py-0 text-[9px] text-[#35C8F5]">
              3 Variations
            </Badge>
          </div>

          {/* Variant A */}
          <div
            onClick={() => setSelectedVariant("A")}
            className={`cursor-pointer rounded-xl border p-2 transition-all ${
              selectedVariant === "A"
                ? "border-[#F13DBB] bg-[#17182B]"
                : "border-white/5 bg-[#111326] hover:border-white/20"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold text-white">
                Variation A (Pain Point Hook)
              </span>
              <span className="font-mono text-[9px] text-[#35C8F5]">
                Predicted CTR: 4.8%
              </span>
            </div>
            <p className="mt-0.5 truncate text-[9px] text-[#A5A5B8]">
              &ldquo;Tired of battery dying mid-podcast?&rdquo;
            </p>
          </div>

          {/* Variant B */}
          <div
            onClick={() => setSelectedVariant("B")}
            className={`cursor-pointer rounded-xl border p-2 transition-all ${
              selectedVariant === "B"
                ? "border-[#8B5CF6] bg-[#17182B]"
                : "border-white/5 bg-[#111326] hover:border-white/20"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold text-white">
                Variation B (Social Proof)
              </span>
              <span className="font-mono text-[9px] text-green-400">
                Predicted CTR: 5.2%
              </span>
            </div>
            <p className="mt-0.5 truncate text-[9px] text-[#A5A5B8]">
              &ldquo;The #1 studio monitoring wireless audio.&rdquo;
            </p>
          </div>

          {/* Variant C */}
          <div
            onClick={() => setSelectedVariant("C")}
            className={`cursor-pointer rounded-xl border p-2 transition-all ${
              selectedVariant === "C"
                ? "border-[#367BFF] bg-[#17182B]"
                : "border-white/5 bg-[#111326] hover:border-white/20"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold text-white">
                Variation C (Discount Offer)
              </span>
              <span className="font-mono text-[9px] text-[#35C8F5]">
                Predicted CTR: 4.5%
              </span>
            </div>
            <p className="mt-0.5 truncate text-[9px] text-[#A5A5B8]">
              &ldquo;Limited launch allocation: 20% savings.&rdquo;
            </p>
          </div>

          <Button
            size="sm"
            className="h-7 w-full bg-gradient-to-r from-[#F13DBB] to-[#367BFF] text-[10px] text-white"
          >
            Generate Multi-Format Campaign
          </Button>
        </div>
      </div>
    </div>
  );
}
