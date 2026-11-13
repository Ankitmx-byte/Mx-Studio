import { describe, it, expect } from "vitest";
import { useCreditStore } from "@/stores/useCreditStore";
import { useEditorStore } from "@/stores/useEditorStore";

describe("Zustand Stores", () => {
  describe("useCreditStore", () => {
    it("deducts credits properly when balance is sufficient", () => {
      const state = useCreditStore.getState();
      const initialBalance = state.balance;
      const success = state.deductCredits(50, "video-studio", "Test Render");

      expect(success).toBe(true);
      expect(useCreditStore.getState().balance).toBe(initialBalance - 50);
    });

    it("rejects deduction when balance is insufficient", () => {
      const state = useCreditStore.getState();
      const success = state.deductCredits(
        999999,
        "video-studio",
        "Oversized Render"
      );

      expect(success).toBe(false);
    });

    it("grants credits and adds a transaction entry", () => {
      const state = useCreditStore.getState();
      const prevBalance = state.balance;
      state.grantCredits(100, "Bonus Pack");

      expect(useCreditStore.getState().balance).toBe(prevBalance + 100);
      expect(useCreditStore.getState().transactions[0].description).toBe(
        "Bonus Pack"
      );
    });
  });

  describe("useEditorStore", () => {
    it("initializes with default tracks and timeline bounds", () => {
      const state = useEditorStore.getState();
      expect(state.tracks.length).toBeGreaterThanOrEqual(2);
      expect(state.durationMs).toBe(60000);
      expect(state.isPlaying).toBe(false);
    });

    it("updates playhead safely without negative values", () => {
      const { setPlayhead } = useEditorStore.getState();
      setPlayhead(1500);
      expect(useEditorStore.getState().playheadMs).toBe(1500);

      setPlayhead(-500);
      expect(useEditorStore.getState().playheadMs).toBe(0);
    });
  });
});
