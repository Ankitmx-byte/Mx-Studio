"use client";

import React, { useState } from "react";
import { Mic2, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const stems = [
  { name: "Vocal Channel", level: 92, color: "#35C8F5", state: "Isolated" },
  {
    name: "Drums & Percussion",
    level: 68,
    color: "#F13DBB",
    state: "Stem Separated",
  },
  { name: "Bass & Sub", level: 75, color: "#8B5CF6", state: "Cleaned" },
  {
    name: "Background Ambient",
    level: 14,
    color: "#367BFF",
    state: "-24dB Denoised",
  },
];

export function AudioStudioMockup() {
  const [denoiseActive, setDenoiseActive] = useState(true);

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-[#090812] font-sans text-xs text-white shadow-xl">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-[#111326] px-3 py-2">
        <div className="flex items-center gap-2">
          <Mic2 className="h-4 w-4 text-[#35C8F5]" />
          <span className="text-[11px] font-medium text-white">
            Episode_42_Studio_Master.wav
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Badge
            variant="outline"
            className="border-white/10 py-0 text-[9px] text-green-400"
          >
            Demucs 4-Stem Active
          </Badge>
          <span className="font-mono text-[10px] text-[#A5A5B8]">
            96kHz / 24-bit
          </span>
        </div>
      </div>

      {/* Main Waveform Canvas */}
      <div className="flex flex-col gap-3 bg-[#0d0c18] p-3">
        {/* Real-time Spectrum Waveform Graphic */}
        <div className="flex h-20 w-full items-center justify-between gap-1 overflow-hidden rounded-xl border border-white/5 bg-[#111326] p-2">
          {Array.from({ length: 48 }).map((_, i) => {
            const height = 15 + Math.sin(i * 0.4) * 25 + (i % 5) * 8;
            return (
              <div
                key={i}
                className="w-1.5 rounded-full transition-all duration-300"
                style={{
                  height: `${Math.min(95, Math.max(15, height))}%`,
                  background:
                    i < 24
                      ? "linear-gradient(to top, #367BFF, #35C8F5)"
                      : "linear-gradient(to top, #8B5CF6, #F13DBB)",
                }}
              />
            );
          })}
        </div>

        {/* Stem Channels */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {stems.map((stem) => (
            <div
              key={stem.name}
              className="flex items-center justify-between rounded-xl border border-white/5 bg-[#111326] p-2"
            >
              <div className="flex items-center gap-2">
                <div
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: stem.color }}
                />
                <span className="text-[11px] font-medium text-white">
                  {stem.name}
                </span>
              </div>
              <span className="font-mono text-[9px] text-[#A5A5B8]">
                {stem.state}
              </span>
            </div>
          ))}
        </div>

        {/* AI Voice Clean Controls */}
        <div className="flex items-center justify-between rounded-xl border border-white/5 bg-[#17182B] p-2.5">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#F13DBB]" />
            <div>
              <p className="text-[11px] font-medium text-white">
                Spectral Noise Suppression
              </p>
              <p className="text-[9px] text-[#A5A5B8]">
                De-reverb, de-hum & breath leveling
              </p>
            </div>
          </div>
          <Button
            size="sm"
            onClick={() => setDenoiseActive(!denoiseActive)}
            className={`h-6 px-3 text-[10px] ${
              denoiseActive
                ? "bg-[#35C8F5] font-semibold text-black"
                : "bg-white/10 text-white"
            }`}
          >
            {denoiseActive ? "Active (-18dB)" : "Bypassed"}
          </Button>
        </div>
      </div>
    </div>
  );
}
