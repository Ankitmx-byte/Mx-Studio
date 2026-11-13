import React from "react";
import Link from "next/link";
import { MxLogo } from "@/components/landing/MxLogo";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#07060e] py-16 text-xs text-[#A5A5B8] sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="flex flex-col justify-between lg:col-span-2">
            <div>
              <MxLogo size={34} />
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#A5A5B8]">
                Mx Studio is the premium AI-powered creative workstation.
                Unifying video editing, generative photography, advertising
                synthesis, and audio production.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[11px] text-[#A5A5B8]">
                <span className="flex h-2 w-2 rounded-full bg-green-400" />
                <span className="font-medium text-white">
                  All Cloud Systems Operational
                </span>
                <span className="text-white/20">•</span>
                <span>GPU Cluster 99.98%</span>
              </div>
              <p className="text-[11px] text-[#A5A5B8]/60">
                Create Beyond Limits.
              </p>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
              Product Studios
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/video-studio"
                  className="transition-colors hover:text-white"
                >
                  AI Video Studio
                </Link>
              </li>
              <li>
                <Link
                  href="/video-editor"
                  className="transition-colors hover:text-white"
                >
                  Professional Video Editor
                </Link>
              </li>
              <li>
                <Link
                  href="/photo-studio"
                  className="transition-colors hover:text-white"
                >
                  AI Photo Studio
                </Link>
              </li>
              <li>
                <Link
                  href="/ad-studio"
                  className="transition-colors hover:text-white"
                >
                  AI Ad Studio
                </Link>
              </li>
              <li>
                <Link
                  href="/audio-studio"
                  className="transition-colors hover:text-white"
                >
                  Audio Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Resources Column */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
              Resources & Support
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#faq" className="transition-colors hover:text-white">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <Link
                  href="/docs/architecture.md"
                  className="transition-colors hover:text-white"
                >
                  Technical Architecture
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/design-system.md"
                  className="transition-colors hover:text-white"
                >
                  Design System Tokens
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="transition-colors hover:text-white"
                >
                  Pricing Plans & Credits
                </Link>
              </li>
              <li>
                <span className="cursor-not-allowed text-[#A5A5B8]/60">
                  Careers (We&apos;re Hiring)
                </span>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
              Legal & Trust
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/privacy"
                  className="transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="transition-colors hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/refunds"
                  className="transition-colors hover:text-white"
                >
                  Refund & Cancellation Policy
                </Link>
              </li>
              <li>
                <span className="mt-4 block text-[11px] leading-tight text-[#A5A5B8]/80">
                  Commercial Rights: 100% Creator Owned Assets
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-[11px] text-[#A5A5B8]/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Mx Studio Inc. All rights reserved.
          </p>
          <p>Desktop-First Precision Creative Computing.</p>
        </div>
      </div>
    </footer>
  );
}
