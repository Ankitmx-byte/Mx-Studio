"use client";

import React from "react";
import { Film, Scissors, Subtitles, Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function VideoFeatureMockup() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-[#090812] font-sans text-xs text-white shadow-xl">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-[#111326] px-3 py-2">
        <div className="flex items-center gap-2">
          <Film className="h-4 w-4 text-[#F13DBB]" />
          <span className="text-[11px] font-medium text-white">
            AI_Smart_Edit_Sequence.mx
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="border-[#F13DBB]/40 bg-[#F13DBB]/20 py-0 text-[9px] text-[#F13DBB]">
            Auto-Cut Enabled
          </Badge>
          <span className="font-mono text-[10px] text-[#A5A5B8]">4K UHD</span>
        </div>
      </div>

      {/* Center Video Frame with Caption & Detection */}
      <div className="relative flex aspect-video w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#120e24] via-[#0b1021] to-[#060814] p-4">
        {/* Glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#8B5CF6]/15 via-transparent to-transparent" />

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Animated Highlight Subtitle Overlay */}
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-3 py-1 backdrop-blur-md">
            <Subtitles className="h-3 w-3 text-[#35C8F5]" />
            <span className="text-[10px] font-medium text-[#35C8F5]">
              Kinetic AI Captions
            </span>
          </div>

          <p className="text-base font-bold tracking-wide text-white sm:text-lg">
            &ldquo;Turn hours of raw footage into viral gold.&rdquo;
          </p>

          <div className="mt-2 flex items-center gap-2">
            <span className="rounded border border-[#F13DBB]/30 bg-[#F13DBB]/20 px-2 py-0.5 font-mono text-[10px] text-[#F13DBB]">
              #AI-Creative
            </span>
            <span className="rounded border border-[#367BFF]/30 bg-[#367BFF]/20 px-2 py-0.5 font-mono text-[10px] text-[#35C8F5]">
              #Speedrun
            </span>
          </div>
        </div>

        {/* Scene Detection Chip Top-Left */}
        <div className="absolute left-2 top-2 flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#17182B]/90 px-2 py-1 backdrop-blur-md">
          <Scissors className="h-3 w-3 text-[#F13DBB]" />
          <span className="text-[9px] text-white">Scene 03: Hook Moment</span>
        </div>

        {/* 9:16 Reframe Toggle Top-Right */}
        <div className="absolute right-2 top-2 flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#17182B]/90 px-2 py-1 backdrop-blur-md">
          <Smartphone className="h-3 w-3 text-[#35C8F5]" />
          <span className="text-[9px] text-[#35C8F5]">Auto-Track Subject</span>
        </div>
      </div>

      {/* Timeline Strip */}
      <div className="flex items-center gap-1.5 border-t border-white/5 bg-[#111326] p-2.5">
        <div className="flex h-6 w-20 items-center justify-center rounded border border-[#F13DBB]/60 bg-[#F13DBB]/30 text-[9px] font-medium text-white">
          Hook (0-3s)
        </div>
        <div className="flex h-6 w-36 items-center justify-center rounded border border-[#8B5CF6]/60 bg-[#8B5CF6]/30 text-[9px] font-medium text-white">
          Core Value Pitch
        </div>
        <div className="flex h-6 flex-1 items-center justify-center rounded border border-[#367BFF]/60 bg-[#367BFF]/30 text-[9px] font-medium text-white">
          Call to Action
        </div>
      </div>
    </div>
  );
}
