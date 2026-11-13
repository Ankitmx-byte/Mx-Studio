"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "monthly"
  );

  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-t border-white/5 bg-[#090812] py-24 sm:py-36"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#F13DBB]/10 via-[#8B5CF6]/10 to-[#367BFF]/10 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#111326] px-3.5 py-1 text-xs font-medium text-[#F13DBB]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Honest & Predictable Pricing</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Start Creating. Upgrade When You&apos;re Ready.
          </h2>

          <p className="mt-4 text-base text-[#A5A5B8] sm:text-lg">
            Experience the full suite with a 3-day trial. Zero hidden fees.
            Cancel anytime with 1-click.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#111326] p-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`rounded-lg px-4 py-1.5 text-xs font-medium transition-all ${
                billingCycle === "monthly"
                  ? "border border-white/10 bg-[#17182B] text-white shadow-md"
                  : "text-[#A5A5B8] hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`flex items-center gap-1.5 rounded-lg px-4 py-1.5 text-xs font-medium transition-all ${
                billingCycle === "annual"
                  ? "border border-white/10 bg-[#17182B] text-white shadow-md"
                  : "text-[#A5A5B8] hover:text-white"
              }`}
            >
              <span>Annual Billing</span>
              <Badge className="border-0 bg-[#35C8F5]/20 py-0 text-[9px] text-[#35C8F5]">
                Save 20%
              </Badge>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
          {/* Card 1: Free Trial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#111326]/60 p-8 backdrop-blur-xl"
          >
            <div>
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-wider text-[#A5A5B8]">
                  Free Trial
                </span>
                <Badge
                  variant="outline"
                  className="border-white/10 text-[10px] text-white"
                >
                  3 Days Full Access
                </Badge>
              </div>

              <div className="mb-2 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">$0</span>
                <span className="text-xs text-[#A5A5B8]">for 3 days</span>
              </div>

              <p className="mb-6 text-xs leading-relaxed text-[#A5A5B8]">
                Test-drive the complete AI creation workstation with 30
                complimentary AI credits.
              </p>

              <div className="space-y-3 border-t border-white/5 pt-6 text-xs text-white">
                <div className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-[#35C8F5]" />
                  <span>3-day full-feature trial</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-[#35C8F5]" />
                  <span>30 AI credits allowance</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-[#35C8F5]" />
                  <span>Access to supported creative tools</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-[#35C8F5]" />
                  <span>Personal project workspace</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-white/5 pt-6">
              <Link href="/pricing">
                <Button
                  variant="outline"
                  className="w-full border-white/10 bg-[#17182B] text-white hover:bg-white/10"
                >
                  Start Free Trial
                </Button>
              </Link>
              <p className="text-center text-[10px] leading-tight text-[#A5A5B8]/80">
                Requires payment method. Renews to selected plan automatically
                unless cancelled.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Pro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#111326]/60 p-8 backdrop-blur-xl"
          >
            <div>
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-wider text-[#367BFF]">
                  Pro Tier
                </span>
                <Badge
                  variant="outline"
                  className="border-[#367BFF]/40 text-[10px] text-[#367BFF]"
                >
                  Individual Creators
                </Badge>
              </div>

              <div className="mb-2 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">
                  {billingCycle === "monthly" ? "$9.99" : "$7.99"}
                </span>
                <span className="text-xs text-[#A5A5B8]">/month</span>
              </div>

              <p className="mb-6 text-xs leading-relaxed text-[#A5A5B8]">
                Ideal for YouTubers, podcasters, and solo editors requiring
                consistent monthly compute.
              </p>

              <div className="space-y-3 border-t border-white/5 pt-6 text-xs text-white">
                <div className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-[#35C8F5]" />
                  <span className="font-semibold text-[#35C8F5]">
                    200 AI credits monthly
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-[#35C8F5]" />
                  <span>Creative AI tools (Wan2.1 & FLUX)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-[#35C8F5]" />
                  <span>Video, photo, audio & ad workflows</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-[#35C8F5]" />
                  <span>Standard GPU processing queue</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-[#35C8F5]" />
                  <span>Project management & 100GB R2 storage</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-white/5 pt-6">
              <Link href="/pricing">
                <Button className="w-full bg-[#367BFF] text-white hover:bg-[#367BFF]/90">
                  Choose Pro Plan
                </Button>
              </Link>
              <p className="text-center text-[10px] leading-tight text-[#A5A5B8]/80">
                Billed{" "}
                {billingCycle === "monthly"
                  ? "monthly"
                  : "annually ($95.88/yr)"}
                . Cancel anytime.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Studio (Highlighted / Recommended) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative flex flex-col justify-between rounded-3xl border-2 border-[#F13DBB] bg-gradient-to-b from-[#1c1433] via-[#111326] to-[#0d0f21] p-8 shadow-2xl shadow-[#F13DBB]/15"
          >
            {/* Top Recommended Tag */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="rounded-full bg-gradient-to-r from-[#F13DBB] via-[#8B5CF6] to-[#367BFF] px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                ★ Recommended For Agencies
              </span>
            </div>

            <div>
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-wider text-[#F13DBB]">
                  Studio Tier
                </span>
                <Badge className="border-[#F13DBB]/40 bg-[#F13DBB]/20 text-[10px] text-[#F13DBB]">
                  Power Creators
                </Badge>
              </div>

              <div className="mb-2 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">
                  {billingCycle === "monthly" ? "$19.99" : "$15.99"}
                </span>
                <span className="text-xs text-[#A5A5B8]">/month</span>
              </div>

              <p className="mb-6 text-xs leading-relaxed text-[#A5A5B8]">
                Maximized GPU bandwidth, priority generation lanes, and
                collaborative workspace assets.
              </p>

              <div className="space-y-3 border-t border-white/10 pt-6 text-xs text-white">
                <div className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-[#F13DBB]" />
                  <span className="font-semibold text-[#F13DBB]">
                    600 AI credits monthly
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-[#35C8F5]" />
                  <span>All Pro features included</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-[#35C8F5]" />
                  <span className="font-semibold text-white">
                    Priority VIP GPU processing queue
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-[#35C8F5]" />
                  <span>Higher concurrent batch jobs</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-[#35C8F5]" />
                  <span>Uncompressed 4K ProRes Master exports</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-[#35C8F5]" />
                  <span>500GB Fast Cloudflare R2 storage</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6">
              <Link href="/pricing">
                <Button className="w-full bg-gradient-to-r from-[#F13DBB] via-[#8B5CF6] to-[#367BFF] font-semibold text-white shadow-lg shadow-[#F13DBB]/30 hover:opacity-95">
                  Start 3-Day Trial on Studio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <p className="text-center text-[10px] leading-tight text-[#A5A5B8]/80">
                Requires payment method. Renews to selected plan automatically
                unless cancelled.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Transparent Billing Disclosure Banner */}
        <div className="mx-auto mt-16 flex max-w-4xl items-start gap-3.5 rounded-2xl border border-white/10 bg-[#111326]/60 p-4 text-xs leading-relaxed text-[#A5A5B8] sm:p-5">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#35C8F5]" />
          <div>
            <span className="font-semibold text-white">
              Transparent Billing Commitment:
            </span>{" "}
            The 3-day free trial provides full feature access and requires a
            valid payment method upon signup. We clearly disclose the plan
            selected, monthly billing amount, and first billing date prior to
            checkout. You can cancel at any time with one click from your user
            dashboard prior to the trial conclusion without being charged.
          </div>
        </div>
      </div>
    </section>
  );
}
