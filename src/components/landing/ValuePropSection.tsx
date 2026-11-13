"use client";

import React from "react";
import { Zap, Clock, Award, Layers } from "lucide-react";
import { motion } from "motion/react";

const valueProps = [
  {
    icon: Zap,
    title: "Less Manual Work",
    description:
      "Automate repetitive tasks like scene cuts, rotoscoping, stem separation, and aspect ratio reframing so you can focus strictly on creative direction.",
    gradient: "from-[#F13DBB] to-[#8B5CF6]",
    badge: "Efficiency",
  },
  {
    icon: Clock,
    title: "Faster Creative Workflows",
    description:
      "Transform ideas into production-ready video, photo, audio, and ad assets in minutes instead of days through unified AI-driven generation pipelines.",
    gradient: "from-[#8B5CF6] to-[#367BFF]",
    badge: "Velocity",
  },
  {
    icon: Award,
    title: "Professional-Quality Output",
    description:
      "Export uncompressed 4K video, studio-mastered audio stems, and high-DPI visuals designed to meet the rigorous standards of modern commercial productions.",
    gradient: "from-[#367BFF] to-[#35C8F5]",
    badge: "Fidelity",
  },
  {
    icon: Layers,
    title: "Multiple Creative Tools in One",
    description:
      "Eliminate disjointed subscription fragmentation. Video editing, generative photo enhancement, sound engineering, and multi-format ad creation exist together seamlessly.",
    gradient: "from-[#35C8F5] to-[#F13DBB]",
    badge: "Unified",
  },
];

export function ValuePropSection() {
  return (
    <section className="relative border-t border-white/5 bg-[#090812] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#111326] px-3 py-1 text-xs font-medium text-[#35C8F5]"
          >
            <span>Core Value Architecture</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Everything You Need to Create More.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base leading-relaxed text-[#A5A5B8] sm:text-lg"
          >
            One intelligent workspace designed to simplify your entire creative
            process.
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/5 bg-[#111326]/60 p-6 transition-all duration-300 hover:border-white/15 hover:bg-[#17182B]/80"
              >
                {/* Glowing Top Border Highlight on Hover */}
                <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-transparent via-white/0 to-transparent transition-all duration-500 group-hover:via-[#35C8F5]/50" />

                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div
                      className={`h-12 w-12 rounded-xl bg-gradient-to-br ${prop.gradient} flex items-center justify-center p-2.5 text-white shadow-lg`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-[#A5A5B8]">
                      {prop.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-[#35C8F5]">
                    {prop.title}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-[#A5A5B8] sm:text-sm">
                    {prop.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4 font-mono text-[11px] text-[#A5A5B8]/80">
                  <span>{`0${index + 1} // MATRIX`}</span>
                  <span className="text-[#35C8F5]">READY</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
