import React from "react";
import Link from "next/link";
import {
  Video,
  Film,
  Camera,
  Sparkles,
  Music,
  Layers,
  Palette,
  Coins,
  CreditCard,
  LayoutDashboard,
  ShieldAlert,
  ArrowRight,
  Cpu,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { LazyStudio3D } from "@/components/three/LazyStudio3D";
import { FadeIn, ScaleHover } from "@/components/animations/MotionWrapper";

const modules = [
  {
    title: "AI Video Studio",
    desc: "Next-gen prompt-to-video and cinematic generation with Wan2.1.",
    icon: Video,
    href: "/video-studio",
    badge: "Gen-AI",
    accent: "from-[#F13DBB] to-[#8B5CF6]",
  },
  {
    title: "Professional Video Editor",
    desc: "Multi-track timeline, keyframe interpolation & Remotion integration.",
    icon: Film,
    href: "/video-editor",
    badge: "NLE Suite",
    accent: "from-[#367BFF] to-[#35C8F5]",
  },
  {
    title: "AI Photo Studio",
    desc: "Ultra-res FLUX diffusion, smart inpainting, and edge background removal.",
    icon: Camera,
    href: "/photo-studio",
    badge: "FLUX.1",
    accent: "from-[#8B5CF6] to-[#F13DBB]",
  },
  {
    title: "AI Ad Studio",
    desc: "Multi-platform commercial campaigns with smart auto-framing.",
    icon: Sparkles,
    href: "/ad-studio",
    badge: "Conversion",
    accent: "from-[#F13DBB] to-[#367BFF]",
  },
  {
    title: "Audio Studio",
    desc: "Demucs 4-stem separation, interactive waveforms & AI voiceover.",
    icon: Music,
    href: "/audio-studio",
    badge: "Pro Audio",
    accent: "from-[#35C8F5] to-[#8B5CF6]",
  },
  {
    title: "Templates & Assets",
    desc: "Curated motion graphics, audio stems, and stock overlays.",
    icon: Layers,
    href: "/templates",
    badge: "Library",
    accent: "from-[#367BFF] to-[#8B5CF6]",
  },
  {
    title: "Brand Kits",
    desc: "Typography, color tokens, and persistent style guides for teams.",
    icon: Palette,
    href: "/brand-kits",
    badge: "Identity",
    accent: "from-[#8B5CF6] to-[#35C8F5]",
  },
  {
    title: "AI Credits & Quotas",
    desc: "Real-time ledger accounting, token burn rate, and top-ups.",
    icon: Coins,
    href: "/dashboard/credits",
    badge: "Ledger",
    accent: "from-[#F13DBB] to-[#35C8F5]",
  },
  {
    title: "Subscription & Billing",
    desc: "Stripe-backed tiers, team seats, and automated invoicing.",
    icon: CreditCard,
    href: "/pricing",
    badge: "Stripe",
    accent: "from-[#367BFF] to-[#F13DBB]",
  },
  {
    title: "User Dashboard",
    desc: "Workspace project hub, collaborative bins, and render queue.",
    icon: LayoutDashboard,
    href: "/dashboard",
    badge: "Workspace",
    accent: "from-[#8B5CF6] to-[#367BFF]",
  },
  {
    title: "Admin Dashboard",
    desc: "Tenant monitoring, GPU cluster health, and revenue analytics.",
    icon: ShieldAlert,
    href: "/admin",
    badge: "Ops",
    accent: "from-[#F13DBB] to-[#111326]",
  },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#090812] text-white selection:bg-[#F13DBB]/30">
      {/* Background Cinematic Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#F13DBB]/15 via-[#8B5CF6]/15 to-[#367BFF]/15 blur-[140px]" />
        <div className="absolute right-0 top-1/2 h-[400px] w-[500px] rounded-full bg-[#35C8F5]/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24">
        {/* Header Hero */}
        <FadeIn className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#111326]/80 px-4 py-1.5 text-xs text-[#A5A5B8] backdrop-blur-md">
            <span className="flex h-2 w-2 animate-ping rounded-full bg-[#35C8F5]" />
            <span>Development Environment Active</span>
            <span className="text-white/20">•</span>
            <span className="font-medium text-white">v0.1.0 Ready</span>
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
            <span className="text-white">Mx </span>
            <span className="bg-gradient-to-r from-[#F13DBB] via-[#8B5CF6] to-[#35C8F5] bg-clip-text text-transparent">
              Studio
            </span>
          </h1>

          <p className="mt-4 text-xl font-light text-[#A5A5B8] sm:text-2xl">
            Create Beyond Limits.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#A5A5B8]/80 sm:text-base">
            Premium AI-powered creative workspace configured for creators,
            agencies, and enterprise advertisers worldwide.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/dashboard">
              <Button className="h-11 bg-gradient-to-r from-[#F13DBB] to-[#8B5CF6] px-6 font-semibold text-white shadow-lg shadow-[#F13DBB]/20 hover:opacity-95">
                Launch Workspace
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Link href="/video-editor">
              <Button
                variant="outline"
                className="h-11 border-white/10 bg-[#111326] px-6 text-white hover:bg-[#17182B]"
              >
                Open Video Editor
              </Button>
            </Link>
          </div>
        </FadeIn>

        {/* 3D Scene Showcase */}
        <FadeIn delay={0.2} className="mt-16">
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-[#111326]/50 p-2 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-3 font-mono text-xs text-[#A5A5B8]">
                  viewport.canvas.webgl3d
                </span>
              </div>
              <Badge
                variant="outline"
                className="border-[#367BFF]/40 text-[10px] text-[#367BFF]"
              >
                WebGL 2.0 / R3F
              </Badge>
            </div>
            <div className="h-72 w-full p-2">
              <LazyStudio3D />
            </div>
          </div>
        </FadeIn>

        {/* Core Modules Grid */}
        <section className="mt-20">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Core Production Modules
              </h2>
              <p className="text-sm text-[#A5A5B8]">
                Standardized architecture across all creative touchpoints
              </p>
            </div>
            <Badge className="border-[#367BFF]/30 bg-[#367BFF]/20 text-[#35C8F5]">
              11 Modules Ready
            </Badge>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((m) => {
              const Icon = m.icon;
              return (
                <ScaleHover key={m.title}>
                  <Card className="h-full border border-white/5 bg-[#111326]/70 transition-colors hover:border-white/15 hover:bg-[#17182B]/80">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${m.accent} p-2 text-white shadow-md`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-white/5 text-[11px] font-normal text-[#A5A5B8]"
                        >
                          {m.badge}
                        </Badge>
                      </div>
                      <CardTitle className="mt-4 text-base font-semibold text-white">
                        {m.title}
                      </CardTitle>
                      <CardDescription className="text-xs leading-relaxed text-[#A5A5B8]">
                        {m.desc}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Link
                        href={m.href}
                        className="inline-flex items-center text-xs font-medium text-[#35C8F5] hover:underline"
                      >
                        Explore Module
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </CardContent>
                  </Card>
                </ScaleHover>
              );
            })}
          </div>
        </section>

        {/* System & Runtime Verification Stats */}
        <section className="mt-20 rounded-2xl border border-white/10 bg-[#111326]/40 p-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-[#367BFF]/10 p-2.5 text-[#367BFF]">
                <Cpu className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-[#A5A5B8]">Framework Engine</p>
                <p className="font-semibold text-white">
                  Next.js 15 & React 19
                </p>
                <p className="text-[11px] text-white/50">App Router & RSC</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-[#F13DBB]/10 p-2.5 text-[#F13DBB]">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-[#A5A5B8]">Design System</p>
                <p className="font-semibold text-white">
                  Tailwind CSS + shadcn
                </p>
                <p className="text-[11px] text-white/50">
                  46 Atomic Components
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-[#8B5CF6]/10 p-2.5 text-[#8B5CF6]">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-[#A5A5B8]">Motion & 3D</p>
                <p className="font-semibold text-white">GSAP, Motion, R3F</p>
                <p className="text-[11px] text-white/50">
                  Three.js + Lenis Scroll
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-[#35C8F5]/10 p-2.5 text-[#35C8F5]">
                <Layers className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-[#A5A5B8]">Media & Edge ML</p>
                <p className="font-semibold text-white">FFmpeg & MediaPipe</p>
                <p className="text-[11px] text-white/50">Remotion + ONNX Web</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t border-white/5 pt-8 text-center text-xs text-[#A5A5B8]/60">
          <p>
            © {new Date().getFullYear()} Mx Studio. All rights reserved. Create
            Beyond Limits.
          </p>
        </footer>
      </div>
    </main>
  );
}
