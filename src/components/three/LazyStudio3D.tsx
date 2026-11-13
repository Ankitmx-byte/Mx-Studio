"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

export const LazyStudio3D = dynamic(
  () => import("@/components/three/Studio3DCanvas"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full min-h-[320px] w-full items-center justify-center rounded-xl border border-white/5 bg-[#111326]">
        <div className="flex flex-col items-center gap-3">
          <Skeleton className="h-16 w-16 animate-pulse rounded-full bg-white/10" />
          <p className="font-mono text-xs text-secondary-foreground">
            Loading 3D Canvas...
          </p>
        </div>
      </div>
    ),
  }
);
