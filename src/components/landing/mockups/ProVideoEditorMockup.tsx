"use client";

import React, { useState } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Sliders,
  Sparkles,
  Scissors,
  Wand2,
  CheckCircle2,
  Download,
  Film,
  Music,
  Type,
  Maximize2,
  Eye,
  Lock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProVideoEditorMockup() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<"media" | "ai" | "color">("ai");

  return (
    <div className="relative w-full select-none overflow-hidden rounded-2xl border border-white/10 bg-[#090812] font-sans text-xs text-white shadow-2xl shadow-black/80">
      {/* 1. Editor Window Top Titlebar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-[#111326] px-3 py-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 cursor-pointer rounded-full bg-red-500/80 hover:opacity-100" />
            <span className="h-2.5 w-2.5 cursor-pointer rounded-full bg-yellow-500/80 hover:opacity-100" />
            <span className="h-2.5 w-2.5 cursor-pointer rounded-full bg-green-500/80 hover:opacity-100" />
          </div>

          <div className="hidden items-center gap-2 border-l border-white/10 pl-2 text-[11px] text-[#A5A5B8] sm:flex">
            <span className="font-medium text-white">
              Cyberpunk_Ad_Master_4K.mx
            </span>
            <span className="text-white/20">•</span>
            <span>3840×2160</span>
            <span className="text-white/20">•</span>
            <span className="font-mono text-[#35C8F5]">60.00 fps</span>
          </div>
        </div>

        {/* Center Mode Switcher */}
        <div className="hidden items-center gap-1 rounded-lg border border-white/5 bg-[#17182B] p-0.5 md:flex">
          <button
            onClick={() => setActiveTab("media")}
            className={`rounded px-2.5 py-1 text-[11px] transition-colors ${
              activeTab === "media"
                ? "bg-[#367BFF] text-white"
                : "text-[#A5A5B8] hover:text-white"
            }`}
          >
            Media
          </button>
          <button
            onClick={() => setActiveTab("ai")}
            className={`flex items-center gap-1 rounded px-2.5 py-1 text-[11px] transition-colors ${
              activeTab === "ai"
                ? "bg-gradient-to-r from-[#F13DBB] to-[#8B5CF6] text-white"
                : "text-[#A5A5B8] hover:text-white"
            }`}
          >
            <Sparkles className="h-3 w-3" />
            AI Copilot
          </button>
          <button
            onClick={() => setActiveTab("color")}
            className={`rounded px-2.5 py-1 text-[11px] transition-colors ${
              activeTab === "color"
                ? "bg-[#8B5CF6] text-white"
                : "text-[#A5A5B8] hover:text-white"
            }`}
          >
            Color Grade
          </button>
        </div>

        {/* Right Action: Export */}
        <div className="flex items-center gap-2">
          <span className="hidden rounded border border-[#35C8F5]/20 bg-[#35C8F5]/10 px-2 py-0.5 font-mono text-[11px] text-[#35C8F5] sm:inline-block">
            00:01:24:18
          </span>
          <Button
            size="sm"
            className="flex h-7 items-center gap-1.5 bg-gradient-to-r from-[#F13DBB] to-[#8B5CF6] px-3 text-xs text-white hover:opacity-90"
          >
            <Download className="h-3 w-3" />
            <span>Export 4K</span>
          </Button>
        </div>
      </div>

      {/* 2. Main Middle Workspace (Media Bin + Viewport + AI Inspector) */}
      <div className="grid min-h-[300px] grid-cols-12 sm:min-h-[360px] lg:min-h-[400px]">
        {/* Left Panel: Media Bin / Layers (2.5 cols on desktop) */}
        <div className="col-span-3 hidden flex-col border-r border-white/5 bg-[#111326]/70 p-2.5 lg:flex">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A5A5B8]">
              Project Assets
            </span>
            <Badge
              variant="outline"
              className="border-white/10 py-0 text-[10px] text-[#35C8F5]"
            >
              9 Clips
            </Badge>
          </div>

          <div className="mt-2 flex max-h-[340px] flex-col gap-1.5 overflow-y-auto pr-1">
            {/* Asset Item 1 */}
            <div className="group flex cursor-pointer items-center gap-2 rounded-lg border border-white/5 bg-[#17182B] p-1.5 transition-all hover:border-white/20">
              <div className="relative flex h-10 w-16 shrink-0 items-center justify-center overflow-hidden rounded bg-gradient-to-br from-[#F13DBB]/30 to-[#8B5CF6]/30">
                <Film className="h-4 w-4 text-white/70" />
                <span className="absolute bottom-0.5 right-0.5 rounded bg-black/70 px-1 font-mono text-[8px]">
                  04.2s
                </span>
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="truncate text-[11px] font-medium text-white group-hover:text-[#35C8F5]">
                  Neon_Tokyo_Run.mp4
                </span>
                <span className="text-[10px] text-[#A5A5B8]">
                  4K • ProRes 422
                </span>
              </div>
            </div>

            {/* Asset Item 2 */}
            <div className="group flex cursor-pointer items-center gap-2 rounded-lg border border-white/5 bg-[#17182B]/60 p-1.5 transition-all hover:border-white/20">
              <div className="relative flex h-10 w-16 shrink-0 items-center justify-center overflow-hidden rounded bg-gradient-to-br from-[#367BFF]/30 to-[#35C8F5]/30">
                <Film className="h-4 w-4 text-white/70" />
                <span className="absolute bottom-0.5 right-0.5 rounded bg-black/70 px-1 font-mono text-[8px]">
                  08.6s
                </span>
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="truncate text-[11px] font-medium text-white group-hover:text-[#35C8F5]">
                  Futuristic_Vehicle.mp4
                </span>
                <span className="text-[10px] text-[#A5A5B8]">
                  AI Generated • Wan2.1
                </span>
              </div>
            </div>

            {/* Asset Item 3 */}
            <div className="group flex cursor-pointer items-center gap-2 rounded-lg border border-white/5 bg-[#17182B]/60 p-1.5 transition-all hover:border-white/20">
              <div className="relative flex h-10 w-16 shrink-0 items-center justify-center overflow-hidden rounded bg-gradient-to-br from-[#8B5CF6]/30 to-[#F13DBB]/30">
                <Music className="h-4 w-4 text-white/70" />
                <span className="absolute bottom-0.5 right-0.5 rounded bg-black/70 px-1 font-mono text-[8px]">
                  24.0s
                </span>
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="truncate text-[11px] font-medium text-white group-hover:text-[#35C8F5]">
                  Voiceover_AI_Master.wav
                </span>
                <span className="text-[10px] text-[#A5A5B8]">
                  Demucs Stem Clean
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Center Panel: Real Video Monitor (6.5 cols on desktop, 12 on mobile) */}
        <div className="col-span-12 flex flex-col justify-between bg-[#090812] p-3 lg:col-span-6">
          {/* Video Preview Canvas */}
          <div className="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-tr from-[#0b0a1a] via-[#120d2a] to-[#0a152e] shadow-inner">
            {/* Cinematic Background Simulation */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#8B5CF6]/20 via-[#F13DBB]/10 to-transparent" />

            {/* Simulated Cyberpunk Scene Footage */}
            <div className="relative z-10 flex flex-col items-center p-4 text-center">
              <div className="relative mb-3 flex items-center justify-center">
                <div className="flex h-20 w-20 animate-pulse items-center justify-center rounded-full border border-[#35C8F5]/40 bg-[#35C8F5]/10 backdrop-blur-sm">
                  <Film className="h-8 w-8 text-[#35C8F5]" />
                </div>
                {/* 3D Wireframe / Safe Margins Box */}
                <div className="pointer-events-none absolute inset-x-[-30px] inset-y-[-20px] rounded-lg border border-dashed border-[#F13DBB]/30" />
              </div>

              <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#111326]/90 px-3 py-1 text-[10px] text-[#A5A5B8]">
                <span className="h-1.5 w-1.5 animate-ping rounded-full bg-[#35C8F5]" />
                <span>AI Live Composite • Remotion Preview</span>
              </div>

              {/* Dynamic Animated Subtitle Sample */}
              <p className="mt-3 bg-gradient-to-r from-white via-white to-[#35C8F5] bg-clip-text text-sm font-bold tracking-wide text-transparent">
                &ldquo;Experience creative precision without boundaries.&rdquo;
              </p>
            </div>

            {/* Canvas Overlay Safe Grid & Markers */}
            <div className="absolute left-2 top-2 flex items-center gap-1 rounded bg-black/60 px-2 py-0.5 font-mono text-[10px] text-[#A5A5B8]">
              <span>CANVAS: 100%</span>
            </div>

            <div className="absolute right-2 top-2 flex items-center gap-1 rounded bg-black/60 px-2 py-0.5 text-[10px] text-[#35C8F5]">
              <Maximize2 className="h-3 w-3" />
            </div>
          </div>

          {/* Transport Player Controls Bar */}
          <div className="mt-2 flex items-center justify-between border-t border-white/5 px-2 pt-2">
            <div className="flex items-center gap-1 text-[#A5A5B8]">
              <button className="rounded p-1 hover:bg-white/5 hover:text-white">
                <SkipBack className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-[#F13DBB] to-[#8B5CF6] text-white shadow-md transition-transform hover:scale-105"
              >
                {isPlaying ? (
                  <Pause className="h-3.5 w-3.5 fill-current" />
                ) : (
                  <Play className="ml-0.5 h-3.5 w-3.5 fill-current" />
                )}
              </button>
              <button className="rounded p-1 hover:bg-white/5 hover:text-white">
                <SkipForward className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="flex items-center gap-2 font-mono text-[11px]">
              <span className="text-[#35C8F5]">00:01:24:18</span>
              <span className="text-white/30">/</span>
              <span className="text-[#A5A5B8]">00:03:00:00</span>
            </div>

            <div className="flex items-center gap-2 text-[#A5A5B8]">
              <Volume2 className="h-3.5 w-3.5" />
              <div className="h-1.5 w-16 overflow-hidden rounded-full bg-[#17182B]">
                <div className="h-full w-3/4 rounded-full bg-[#35C8F5]" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: AI Creative Copilot & Inspector (3 cols on desktop) */}
        <div className="col-span-3 hidden flex-col border-l border-white/5 bg-[#111326]/70 p-3 lg:flex">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-white">
              <Wand2 className="h-3.5 w-3.5 text-[#F13DBB]" />
              AI Assistant
            </span>
            <span className="flex items-center gap-1 text-[10px] text-green-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
              Active
            </span>
          </div>

          <div className="mt-3 flex flex-col gap-3">
            {/* AI Action Card 1: Auto Color Matching */}
            <div className="rounded-xl border border-[#8B5CF6]/30 bg-[#17182B] p-2.5">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="flex items-center gap-1 text-[11px] font-medium text-white">
                  <Sliders className="h-3 w-3 text-[#8B5CF6]" />
                  Cinematic Color LUT
                </span>
                <CheckCircle2 className="h-3.5 w-3.5 text-[#35C8F5]" />
              </div>
              <p className="text-[10px] leading-tight text-[#A5A5B8]">
                Matched to Blade Runner neon aesthetic automatically.
              </p>
              <div className="mt-2 flex items-center gap-2">
                <div className="h-3 w-full rounded bg-gradient-to-r from-[#090812] via-[#8B5CF6] to-[#F13DBB]" />
              </div>
            </div>

            {/* AI Action Card 2: Voice Isolation */}
            <div className="rounded-xl border border-white/5 bg-[#17182B] p-2.5">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="flex items-center gap-1 text-[11px] font-medium text-white">
                  <Music className="h-3 w-3 text-[#35C8F5]" />
                  Demucs Stem Isolation
                </span>
                <span className="font-mono text-[10px] text-[#35C8F5]">
                  99.4%
                </span>
              </div>
              <p className="text-[10px] leading-tight text-[#A5A5B8]">
                Background traffic & HVAC noise removed from vocal channel.
              </p>
            </div>

            {/* Quick AI Prompt Box */}
            <div className="mt-1 rounded-xl border border-white/10 bg-[#090812] p-2">
              <div className="mb-1 text-[10px] text-[#A5A5B8]">
                AI Prompt Assistant:
              </div>
              <div className="flex items-center justify-between rounded border border-white/5 bg-[#17182B] p-1.5 text-[11px] text-white/90">
                <span className="truncate">
                  &ldquo;Auto-reframe for 9:16 TikTok&rdquo;
                </span>
                <Button
                  size="sm"
                  className="h-5 bg-[#367BFF] px-2 text-[9px] text-white"
                >
                  Apply
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Multi-Track Timeline (Bottom Area) */}
      <div className="border-t border-white/10 bg-[#111326] p-2.5">
        {/* Timeline Header Tools & Time Markers */}
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <div className="flex items-center gap-2 text-[#A5A5B8]">
            <span className="flex items-center gap-1 text-[11px] font-medium text-white">
              <Scissors className="h-3.5 w-3.5 text-[#F13DBB]" />
              Timeline
            </span>
            <span className="text-white/20">|</span>
            <span className="cursor-pointer text-[10px] hover:text-white">
              Snapping: ON
            </span>
            <span className="text-white/20">•</span>
            <span className="cursor-pointer text-[10px] hover:text-white">
              Zoom: 100%
            </span>
          </div>

          {/* Timecode Ruler */}
          <div className="flex items-center gap-8 font-mono text-[9px] text-[#A5A5B8]">
            <span>00:00</span>
            <span>00:15</span>
            <span className="font-bold text-[#35C8F5]">00:30</span>
            <span>00:45</span>
            <span>01:00</span>
            <span>01:15</span>
          </div>
        </div>

        {/* Timeline Tracks Grid */}
        <div className="flex flex-col gap-1.5 pt-2">
          {/* Track 1: Text & Overlays (V2) */}
          <div className="flex items-center gap-2">
            <div className="flex w-14 shrink-0 items-center justify-between rounded bg-[#17182B] px-1.5 py-1 text-[10px] text-[#A5A5B8]">
              <span className="flex items-center gap-1">
                <Type className="h-3 w-3 text-[#35C8F5]" />
                V2
              </span>
              <Eye className="h-3 w-3" />
            </div>
            <div className="relative flex h-7 flex-1 items-center overflow-hidden rounded border border-white/5 bg-[#090812] px-1">
              {/* Overlay Clip */}
              <div className="ml-12 flex h-5 w-44 items-center rounded border border-[#35C8F5]/60 bg-gradient-to-r from-[#35C8F5]/30 to-[#367BFF]/30 px-2 text-[9px] font-medium text-white shadow-sm">
                Animated_Title_Hook.preset
              </div>
            </div>
          </div>

          {/* Track 2: Primary Video (V1) */}
          <div className="flex items-center gap-2">
            <div className="flex w-14 shrink-0 items-center justify-between rounded bg-[#17182B] px-1.5 py-1 text-[10px] text-[#A5A5B8]">
              <span className="flex items-center gap-1">
                <Film className="h-3 w-3 text-[#F13DBB]" />
                V1
              </span>
              <Eye className="h-3 w-3" />
            </div>
            <div className="relative flex h-8 flex-1 items-center gap-1 overflow-hidden rounded border border-white/5 bg-[#090812] px-1">
              {/* Video Clip 1 */}
              <div className="flex h-6 w-36 items-center justify-between rounded border border-[#F13DBB]/60 bg-gradient-to-r from-[#F13DBB]/40 to-[#8B5CF6]/40 px-2 text-[9px] font-medium text-white">
                <span>Cyber_Shot_01</span>
                <span className="text-[8px] opacity-70">4K</span>
              </div>
              {/* Transition Marker */}
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#367BFF] text-[7px] font-bold text-white shadow-sm">
                AI
              </div>
              {/* Video Clip 2 */}
              <div className="flex h-6 w-52 items-center justify-between rounded border border-[#8B5CF6]/60 bg-gradient-to-r from-[#8B5CF6]/40 to-[#367BFF]/40 px-2 text-[9px] font-medium text-white">
                <span>Futuristic_Drive_Gen</span>
                <span className="text-[8px] opacity-70">Wan2.1</span>
              </div>
              {/* Video Clip 3 */}
              <div className="flex h-6 flex-1 items-center rounded border border-[#367BFF]/60 bg-gradient-to-r from-[#367BFF]/40 to-[#35C8F5]/40 px-2 text-[9px] font-medium text-white">
                <span>Product_Reveal_UGC</span>
              </div>
            </div>
          </div>

          {/* Track 3: Audio Dialogue (A1) */}
          <div className="flex items-center gap-2">
            <div className="flex w-14 shrink-0 items-center justify-between rounded bg-[#17182B] px-1.5 py-1 text-[10px] text-[#A5A5B8]">
              <span className="flex items-center gap-1">
                <Music className="h-3 w-3 text-[#35C8F5]" />
                A1
              </span>
              <Lock className="h-3 w-3" />
            </div>
            <div className="relative flex h-7 flex-1 items-center overflow-hidden rounded border border-white/5 bg-[#090812] px-1">
              {/* Waveform Strip */}
              <div className="flex h-5 w-3/4 items-center rounded border border-[#35C8F5]/40 bg-gradient-to-r from-[#35C8F5]/20 to-[#367BFF]/20 px-2 text-[9px] text-white/90">
                <div className="mr-2 flex h-3 items-center gap-0.5">
                  <span className="h-2 w-0.5 bg-[#35C8F5]" />
                  <span className="h-3 w-0.5 bg-[#35C8F5]" />
                  <span className="h-1.5 w-0.5 bg-[#35C8F5]" />
                  <span className="h-2.5 w-0.5 bg-[#35C8F5]" />
                  <span className="h-3 w-0.5 bg-[#35C8F5]" />
                  <span className="h-2 w-0.5 bg-[#35C8F5]" />
                  <span className="h-1 w-0.5 bg-[#35C8F5]" />
                </div>
                <span>ElevenLabs_Voice_Sync.wav (Auto-leveled)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
