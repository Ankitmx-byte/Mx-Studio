import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format milliseconds into standard video editor timecode (HH:MM:SS:FF)
 * Defaulting to 30 frames per second.
 */
export function formatTimecode(ms: number, fps = 30): string {
  const totalSeconds = Math.floor(ms / 1000);
  const frames = Math.floor(((ms % 1000) * fps) / 1000);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600);

  const pad = (n: number) => n.toString().padStart(2, "0");

  if (hours > 0) {
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(frames)}`;
  }
  return `${pad(minutes)}:${pad(seconds)}:${pad(frames)}`;
}
