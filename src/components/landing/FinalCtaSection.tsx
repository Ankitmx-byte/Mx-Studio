"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#090812] py-28 text-center sm:py-40">
      {/* Background Cinematic Nebula */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[500px] w-[800px] animate-pulse rounded-full bg-gradient-to-r from-[#F13DBB]/20 via-[#8B5CF6]/20 to-[#35C8F5]/20 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-white/15 bg-gradient-to-b from-[#1a1333] via-[#111326] to-[#090812] p-10 shadow-2xl shadow-black/80 backdrop-blur-2xl sm:p-16"
        >
          {/* Subtle Top Gradient Flare */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#F13DBB] to-transparent" />

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#17182B] px-4 py-1.5 text-xs text-[#35C8F5]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Ready in under 60 seconds</span>
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Your Next Great Creation Starts Here.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#A5A5B8] sm:text-lg">
            Bring your ideas, footage and creativity into one powerful
            workspace. Join thousands of high-growth creators and modern
            agencies building the future of media.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="#pricing">
              <Button
                size="lg"
                className="h-12 rounded-xl bg-gradient-to-r from-[#F13DBB] via-[#8B5CF6] to-[#367BFF] px-8 font-semibold text-white shadow-xl shadow-[#F13DBB]/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="mr-2 h-4 w-4 text-[#35C8F5]" />
                Start Creating Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Link href="#features">
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-xl border-white/10 bg-[#17182B] px-7 font-medium text-white transition-all duration-200 hover:bg-[#20223d]"
              >
                <Play className="mr-2 h-4 w-4 fill-current text-[#35C8F5]" />
                Explore Features
              </Button>
            </Link>
          </div>

          <p className="mt-4 text-xs text-[#A5A5B8]/70">
            3-day full-feature trial • Cancel anytime with one click
          </p>
        </motion.div>
      </div>
    </section>
  );
}
