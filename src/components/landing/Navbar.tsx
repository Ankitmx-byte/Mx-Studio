"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MxLogo } from "@/components/landing/MxLogo";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "AI Video", href: "#ai-video" },
  { label: "AI Photo", href: "#ai-photo" },
  { label: "AI Ads", href: "#ai-ads" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 transition-all duration-300 sm:pt-6">
      <nav
        className={`w-full max-w-6xl rounded-2xl transition-all duration-300 ${
          scrolled
            ? "border border-white/10 bg-[#111326]/85 px-4 py-2.5 shadow-2xl shadow-black/60 backdrop-blur-xl sm:px-6"
            : "border border-white/5 bg-[#111326]/50 px-4 py-3.5 backdrop-blur-md sm:px-6"
        }`}
        aria-label="Main Navigation"
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#367BFF]"
          >
            <MxLogo size={32} />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-1 md:flex lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-1.5 text-xs font-medium text-[#A5A5B8] transition-colors hover:bg-white/5 hover:text-white lg:text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden items-center gap-3 sm:flex">
            <Link href="/login">
              <span className="cursor-pointer px-3 py-1.5 text-xs font-medium text-[#A5A5B8] transition-colors hover:text-white lg:text-sm">
                Sign In
              </span>
            </Link>

            <Link href="#pricing">
              <Button
                size="sm"
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#F13DBB] via-[#8B5CF6] to-[#367BFF] p-[1px] font-medium text-white shadow-lg shadow-[#F13DBB]/15 transition-all duration-300 hover:shadow-[#F13DBB]/30"
              >
                <span className="flex items-center gap-1.5 rounded-[11px] bg-[#090812]/90 px-3.5 py-1.5 text-xs transition-colors group-hover:bg-transparent lg:text-sm">
                  <Sparkles className="h-3.5 w-3.5 text-[#35C8F5]" />
                  <span>Start Free Trial</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 sm:hidden">
            <Link href="#pricing">
              <Button
                size="sm"
                className="h-8 bg-gradient-to-r from-[#F13DBB] to-[#8B5CF6] px-3 text-xs text-white"
              >
                Trial
              </Button>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-1.5 text-[#A5A5B8] hover:bg-white/5 hover:text-white focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-50 flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#111326]/95 p-5 shadow-2xl shadow-black backdrop-blur-2xl sm:hidden"
          >
            <div className="flex flex-col gap-1 border-b border-white/5 pb-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-[#A5A5B8] transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2 text-center text-sm text-[#A5A5B8] hover:text-white"
              >
                Sign In
              </Link>
              <Link href="#pricing" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-[#F13DBB] via-[#8B5CF6] to-[#367BFF] text-white">
                  Start 3-Day Free Trial
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
