"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What is Mx Studio?",
    a: "Mx Studio is a premium AI-powered creative workstation that brings together professional non-linear video editing, generative photo enhancement, sound engineering, and multi-platform advertising creation into a unified web workspace. It is designed desktop-first for creators, agencies, editors, and marketing teams.",
  },
  {
    q: "What creative tools are included?",
    a: "Mx Studio includes four interconnected studios: (1) AI Video Studio with Wan2.1 and CogVideo prompt diffusion; (2) Professional Video Editor featuring a multi-track NLE timeline, keyframing, and kinetic subtitles; (3) AI Photo Studio with FLUX.1 generative inpainting, background matting, and 8K upscaling; (4) AI Ad Studio with automated multi-format aspect framing (9:16, 1:1, 16:9); and (5) Audio Studio with Demucs 4-stem separation and spectral voice noise reduction.",
  },
  {
    q: "How does the 3-day free trial work?",
    a: "When you sign up for the 3-day free trial, you receive immediate full access to all supported creative studios, including 30 initial AI credits to test generation pipelines. A payment method is required to activate the trial. We clearly disclose the selected plan tier, recurring price, and first billing date. If you cancel at any time within the 3-day trial period from your dashboard settings, you will never be charged.",
  },
  {
    q: "How do AI credits work?",
    a: "AI credits are transparently deducted each time you perform neural compute operations: 1–5 credits per high-resolution image generation, 10–25 credits per 5-second video diffusion, and 2 credits per minute of audio stem separation. Traditional manual editing, timeline trimming, scrubbing, and standard local export operations do not consume credits. Credits reload monthly based on your subscription tier, and top-up packs can be added at any time.",
  },
  {
    q: "Can I edit my AI-generated video manually?",
    a: "Yes, absolutely! This is one of Mx Studio's foundational product differentiators. Unlike basic AI video generators that flatten output into a static, immutable MP4 file, Mx Studio generates an open, multi-track timeline project. You can drag clips, adjust splice cuts, manipulate audio stems, modify keyframes, and swap color LUTs just like in DaVinci Resolve or Final Cut Pro.",
  },
  {
    q: "Can I use Mx Studio for commercial projects?",
    a: "Yes. All assets, videos, photos, and ad campaigns created and exported from Mx Studio using your paid or trial plan are 100% yours. You hold the full commercial rights to use your creations in client projects, brand advertisements, YouTube monetization, TikTok/Instagram campaigns, and print media.",
  },
  {
    q: "Can I cancel my subscription?",
    a: "Yes, at any time with one click. There are no long-term contracts or lock-ins. You can manage or cancel your subscription directly in your User Dashboard under Billing. If you cancel, your account remains active with full access until the end of your current paid billing period.",
  },
  {
    q: "Which export formats are supported?",
    a: "Mx Studio supports video exports in MP4 (H.264 / H.265), WebM, and uncompressed Apple ProRes 422 at up to 4K 60fps. Audio exports support uncompressed 24-bit 48kHz WAV and 320kbps MP3. Photo exports support lossless PNG, WebP, and high-quality JPEG at resolutions up to 8192×5464.",
  },
];

export function FaqSection() {
  return (
    <section
      id="faq"
      className="relative border-t border-white/5 bg-[#090812] py-24 sm:py-36"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#111326] px-3.5 py-1 text-xs font-medium text-[#35C8F5]">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Everything You Need to Know.
          </h2>

          <p className="mt-4 text-base text-[#A5A5B8] sm:text-lg">
            Clear, honest answers about our technology, free trial, and
            commercial licensing.
          </p>
        </div>

        {/* Accordion List */}
        <div className="rounded-3xl border border-white/10 bg-[#111326]/60 p-6 backdrop-blur-xl sm:p-10">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border-b border-white/5 pb-2"
              >
                <AccordionTrigger className="py-4 text-left text-sm font-semibold text-white transition-colors hover:text-[#35C8F5] sm:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-4 pt-1 text-xs leading-relaxed text-[#A5A5B8] sm:text-sm">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
