import { create } from "zustand";
import type { TimelineTrack, TimelineClip, TimelineState } from "@/types";

interface EditorStore extends TimelineState {
  setPlayhead: (timeMs: number) => void;
  setIsPlaying: (playing: boolean) => void;
  togglePlayback: () => void;
  setZoom: (zoom: number) => void;
  selectClip: (clipId: string | null) => void;
  addTrack: (type: TimelineTrack["type"], title: string) => void;
  addClipToTrack: (
    trackId: string,
    clip: Omit<TimelineClip, "trackId">
  ) => void;
  updateClipPosition: (clipId: string, newStartMs: number) => void;
  removeClip: (clipId: string) => void;
}

export const useEditorStore = create<EditorStore>((set) => ({
  playheadMs: 0,
  durationMs: 60000, // 1 minute default
  isPlaying: false,
  zoomLevel: 50,
  selectedClipId: null,
  tracks: [
    {
      id: "track-v1",
      title: "Video 1",
      type: "video",
      isMuted: false,
      isLocked: false,
      order: 0,
      clips: [],
    },
    {
      id: "track-a1",
      title: "Audio 1",
      type: "audio",
      isMuted: false,
      isLocked: false,
      order: 1,
      clips: [],
    },
  ],

  setPlayhead: (timeMs) => set({ playheadMs: Math.max(0, timeMs) }),
  setIsPlaying: (playing) => set({ isPlaying: playing }),
  togglePlayback: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setZoom: (zoomLevel) =>
    set({ zoomLevel: Math.max(10, Math.min(200, zoomLevel)) }),
  selectClip: (clipId) => set({ selectedClipId: clipId }),

  addTrack: (type, title) =>
    set((state) => ({
      tracks: [
        ...state.tracks,
        {
          id: `track-${Date.now()}`,
          title,
          type,
          isMuted: false,
          isLocked: false,
          order: state.tracks.length,
          clips: [],
        },
      ],
    })),

  addClipToTrack: (trackId, clip) =>
    set((state) => ({
      tracks: state.tracks.map((t) =>
        t.id === trackId
          ? { ...t, clips: [...t.clips, { ...clip, trackId }] }
          : t
      ),
    })),

  updateClipPosition: (clipId, newStartMs) =>
    set((state) => ({
      tracks: state.tracks.map((t) => ({
        ...t,
        clips: t.clips.map((c) =>
          c.id === clipId ? { ...c, startMs: Math.max(0, newStartMs) } : c
        ),
      })),
    })),

  removeClip: (clipId) =>
    set((state) => ({
      tracks: state.tracks.map((t) => ({
        ...t,
        clips: t.clips.filter((c) => c.id !== clipId),
      })),
      selectedClipId:
        state.selectedClipId === clipId ? null : state.selectedClipId,
    })),
}));
