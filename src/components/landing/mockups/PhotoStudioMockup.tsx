"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Eraser,
  Image as ImageIcon,
  Layers,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function PhotoStudioMockup() {
  const [activeTool, setActiveTool] = useState<
    "cutout" | "inpaint" | "enhance"
  >("cutout");
  const sliderPos = 55;

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-[#090812] font-sans text-xs text-white shadow-xl">
      {/* Top Toolbar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-[#111326] px-3 py-2">
        <div className="flex items-center gap-2">
          <ImageIcon className="h-4 w-4 text-[#F13DBB]" />
          <span className="text-[11px] font-medium text-white">
            FLUX_Fashion_Portrait_8K.png
          </span>
          <Badge
            variant="outline"
            className="border-white/10 py-0 text-[9px] text-[#35C8F5]"
          >
            RAW 8192×5464
          </Badge>
        </div>

        <div className="flex items-center gap-1 rounded-lg border border-white/5 bg-[#17182B] p-0.5">
          <button
            onClick={() => setActiveTool("cutout")}
            className={`flex items-center gap-1 rounded px-2 py-0.5 text-[10px] transition-colors ${
              activeTool === "cutout"
                ? "bg-[#F13DBB] text-white"
                : "text-[#A5A5B8]"
            }`}
          >
            <Layers className="h-3 w-3" />
            Cutout
          </button>
          <button
            onClick={() => setActiveTool("inpaint")}
            className={`flex items-center gap-1 rounded px-2 py-0.5 text-[10px] transition-colors ${
              activeTool === "inpaint"
                ? "bg-[#8B5CF6] text-white"
                : "text-[#A5A5B8]"
            }`}
          >
            <Eraser className="h-3 w-3" />
            Erase
          </button>
          <button
            onClick={() => setActiveTool("enhance")}
            className={`flex items-center gap-1 rounded px-2 py-0.5 text-[10px] transition-colors ${
              activeTool === "enhance"
                ? "bg-[#367BFF] text-white"
                : "text-[#A5A5B8]"
            }`}
          >
            <Sparkles className="h-3 w-3" />
            Enhance
          </button>
        </div>
      </div>

      {/* Main Interactive Before / After Canvas */}
      <div className="group relative aspect-[16/10] w-full select-none overflow-hidden bg-[#0d0c18]">
        {/* "Before" Side (Original Background) */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-[#1b1c2b] to-[#121422] p-6">
          <div className="text-center">
            <div className="mx-auto mb-2 flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <span className="text-xs text-[#A5A5B8]">Original Subject</span>
            </div>
            <p className="text-[11px] text-[#A5A5B8]">Noisy urban backdrop</p>
          </div>
        </div>

        {/* "After" Side (AI Enhanced + Isolated + Studio Lighting) */}
        <div
          className="absolute inset-0 flex items-center justify-center border-r-2 border-[#F13DBB] bg-gradient-to-tr from-[#2d123b] via-[#17182b] to-[#0c1a3b] p-6 shadow-2xl"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="text-center">
            <div className="mx-auto mb-2 flex h-24 w-24 items-center justify-center rounded-2xl border border-[#F13DBB] bg-gradient-to-br from-[#F13DBB]/40 to-[#8B5CF6]/40 shadow-lg shadow-[#F13DBB]/20">
              <Sparkles className="h-8 w-8 text-[#35C8F5]" />
            </div>
            <Badge className="border-[#F13DBB]/40 bg-[#F13DBB]/20 text-[9px] text-[#F13DBB]">
              Studio Isolated + 4X Upscale
            </Badge>
          </div>
        </div>

        {/* Interactive Scrub Slider Handle */}
        <div
          className="pointer-events-none absolute bottom-0 top-0 flex w-0.5 cursor-ew-resize items-center justify-center bg-white"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="pointer-events-auto flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#F13DBB] text-[9px] font-bold text-white shadow-lg">
            ⇄
          </div>
        </div>

        {/* Labels Overlay */}
        <div className="absolute bottom-2 left-2 rounded bg-black/70 px-2 py-0.5 text-[9px] text-[#A5A5B8]">
          AI GENERATED / ENHANCED
        </div>
        <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-0.5 text-[9px] text-[#A5A5B8]">
          ORIGINAL RAW
        </div>
      </div>

      {/* Bottom Adjustment Controls */}
      <div className="flex items-center justify-between border-t border-white/5 bg-[#111326] p-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-[11px] text-[#A5A5B8]">
            <span>Brush Size:</span>
            <span className="font-mono font-medium text-white">32px</span>
          </div>
          <div className="h-1.5 w-20 overflow-hidden rounded-full bg-[#17182B]">
            <div className="h-full w-1/2 rounded-full bg-[#8B5CF6]" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="ghost"
            className="h-6 px-2 text-[10px] text-[#A5A5B8] hover:text-white"
          >
            Reset
          </Button>
          <Button
            size="sm"
            className="flex h-6 items-center gap-1 bg-[#8B5CF6] px-3 text-[10px] text-white"
          >
            <Check className="h-3 w-3" />
            Apply Mask
          </Button>
        </div>
      </div>
    </div>
  );
}
