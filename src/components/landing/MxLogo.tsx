import React from "react";

interface MxLogoProps {
  className?: string;
  size?: number;
  showWordmark?: boolean;
}

export function MxLogo({
  className = "",
  size = 32,
  showWordmark = true,
}: MxLogoProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Custom Geometric Abstract Creative Mark */}
      <div
        className="relative flex items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-[#17182B] to-[#111326] p-1.5 shadow-md shadow-[#F13DBB]/10 transition-all duration-300 group-hover:border-white/20"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <defs>
            <linearGradient
              id="mx-grad-pink-purple"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#F13DBB" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient
              id="mx-grad-blue-cyan"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#367BFF" />
              <stop offset="100%" stopColor="#35C8F5" />
            </linearGradient>
          </defs>

          {/* Left Wing / M-arm */}
          <path
            d="M6 28V8L14 20L18 14"
            stroke="url(#mx-grad-pink-purple)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Cross Slash / X-axis */}
          <path
            d="M30 8L15 28"
            stroke="url(#mx-grad-blue-cyan)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Right Pillar */}
          <path
            d="M22 22L30 28"
            stroke="url(#mx-grad-pink-purple)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Central Creative Node */}
          <circle cx="18" cy="18" r="2.2" fill="#FFFFFF" />
        </svg>
      </div>

      {showWordmark && (
        <div className="flex flex-col text-left">
          <span className="flex items-center gap-1 font-sans text-base font-bold leading-none tracking-tight text-white">
            Mx<span className="font-normal text-[#A5A5B8]">Studio</span>
          </span>
          <span className="mt-0.5 text-[9px] font-medium uppercase leading-none tracking-widest text-[#35C8F5]">
            Creative AI
          </span>
        </div>
      )}
    </div>
  );
}
