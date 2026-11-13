/**
 * Mx Studio Core Type Definitions
 * "Create Beyond Limits."
 */

export type WorkspaceRole = "owner" | "admin" | "editor" | "viewer";

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  creditsBalance: number;
  planTier: "free" | "creator" | "pro" | "studio";
  createdAt: string;
}

export type ModuleType =
  | "video-studio"
  | "video-editor"
  | "photo-studio"
  | "ad-studio"
  | "audio-studio";

export interface ProjectMetadata {
  id: string;
  title: string;
  module: ModuleType;
  thumbnailUrl?: string;
  updatedAt: string;
  durationMs?: number;
  aspectRatio: "16:9" | "9:16" | "1:1" | "4:5" | "21:9";
}

// ============================================================================
// Video Editor Timeline Types
// ============================================================================

export type TrackType = "video" | "audio" | "text" | "effect";

export interface Keyframe {
  id: string;
  timeMs: number;
  value: number;
  easing: "linear" | "easeIn" | "easeOut" | "easeInOut";
}

export interface TimelineClip {
  id: string;
  trackId: string;
  assetId: string;
  title: string;
  startMs: number;
  durationMs: number;
  sourceStartMs: number;
  sourceDurationMs: number;
  volume?: number;
  opacity?: number;
  speed?: number;
  keyframes?: Keyframe[];
}

export interface TimelineTrack {
  id: string;
  title: string;
  type: TrackType;
  isMuted: boolean;
  isLocked: boolean;
  order: number;
  clips: TimelineClip[];
}

export interface TimelineState {
  playheadMs: number;
  durationMs: number;
  isPlaying: boolean;
  zoomLevel: number; // Pixels per second
  selectedClipId: string | null;
  tracks: TimelineTrack[];
}

// ============================================================================
// AI Credit Transaction Types
// ============================================================================

export interface CreditTransaction {
  id: string;
  amount: number;
  type: "deduction" | "grant" | "purchase" | "refund";
  module: ModuleType;
  description: string;
  createdAt: string;
}
