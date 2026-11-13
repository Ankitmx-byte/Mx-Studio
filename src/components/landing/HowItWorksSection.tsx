"use client";

import React from "react";
import {
  MousePointerClick,
  Cpu,
  SlidersHorizontal,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    step: "01",
    title: "Choose Your Creative Tool",
    description:
      "Start with video editing, photo transformation, audio production or advertising campaigns from one unified command dashboard.",
    icon: MousePointerClick,
    gradient: "from-[#F13DBB] to-[#8B5CF6]",
  },
  {
    step: "02",
    title: "Let AI Assist",
    description:
      "Use intelligent generative tools, automated scene cut recognition, neural stem isolation and prompt-to-video diffusion to accelerate your workflow.",
    icon: Cpu,
    gradient: "from-[#8B5CF6] to-[#367BFF]",
  },
  {
    step: "03",
    title: "Refine and Create",
    description:
      "Customize your work directly on the multi-track timeline, tweak color grades and export uncompressed 4K media ready for publication.",
    icon: SlidersHorizontal,
    gradient: "from-[#367BFF] to-[#35C8F5]",
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="workflow"
      className="relative overflow-hidden border-t border-white/5 bg-[#090812] py-24 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#111326] px-3.5 py-1 text-xs font-medium text-[#35C8F5]">
            <span>Simple, Frictionless Onboarding</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Your Creative Workflow, Simplified.
          </h2>

          <p className="mt-4 text-base text-[#A5A5B8] sm:text-lg">
            Three high-efficiency steps engineered to take you from conceptual
            prompt to viral master asset.
          </p>
        </div>

        {/* 3 Step Connected Cards */}
        <div className="relative grid grid-cols-1 items-stretch gap-8 md:grid-cols-3">
          {/* Connecting Glow Line (Desktop only) */}
          <div className="pointer-events-none absolute left-16 right-16 top-1/2 hidden h-[2px] -translate-y-12 bg-gradient-to-r from-[#F13DBB] via-[#8B5CF6] to-[#35C8F5] opacity-30 md:block" />

          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#111326]/60 p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/20"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-mono text-3xl font-black text-white/30 transition-colors group-hover:text-white">
                      {item.step}
                    </span>
                    <div
                      className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center p-3 text-white shadow-xl shadow-black/40 transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-[#A5A5B8]">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center border-t border-white/5 pt-4 text-xs font-medium text-[#35C8F5]">
                  <span>Interactive Phase {item.step}</span>
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
