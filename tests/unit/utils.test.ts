import { describe, it, expect } from "vitest";
import { cn, formatTimecode } from "@/lib/utils";

describe("Utility Functions", () => {
  describe("cn (tailwind merge + clsx)", () => {
    it("merges class names correctly", () => {
      const result = cn("p-4", "bg-red-500", "p-2");
      expect(result).toBe("bg-red-500 p-2");
    });

    it("handles conditional classes", () => {
      const active = true;
      const inactive = false;
      const result = cn(
        "base-class",
        active && "active-class",
        inactive && "inactive-class"
      );
      expect(result).toBe("base-class active-class");
    });
  });

  describe("formatTimecode", () => {
    it("formats milliseconds to MM:SS:FF correctly at 30fps", () => {
      // 1000ms = 1s, 0 frames
      expect(formatTimecode(1000, 30)).toBe("00:01:00");

      // 65000ms = 1m 5s 0 frames
      expect(formatTimecode(65000, 30)).toBe("01:05:00");

      // 500ms = 0s 15 frames
      expect(formatTimecode(500, 30)).toBe("00:00:15");
    });

    it("formats hours when duration exceeds 60 minutes", () => {
      // 3600000ms = 1 hour
      expect(formatTimecode(3600000, 30)).toBe("01:00:00:00");
    });
  });
});
