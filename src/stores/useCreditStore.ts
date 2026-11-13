import { create } from "zustand";
import type { CreditTransaction, ModuleType } from "@/types";

interface CreditStore {
  balance: number;
  transactions: CreditTransaction[];
  deductCredits: (
    amount: number,
    module: ModuleType,
    description: string
  ) => boolean;
  grantCredits: (amount: number, description: string) => void;
}

export const useCreditStore = create<CreditStore>((set, get) => ({
  balance: 250, // Starting default credits for new pro workspace
  transactions: [
    {
      id: "tx-init",
      amount: 250,
      type: "grant",
      module: "video-studio",
      description: "Welcome Workspace Credit Allowance",
      createdAt: new Date().toISOString(),
    },
  ],

  deductCredits: (amount, module, description) => {
    const current = get().balance;
    if (current < amount) {
      return false;
    }
    set((state) => ({
      balance: state.balance - amount,
      transactions: [
        {
          id: `tx-${Date.now()}`,
          amount,
          type: "deduction",
          module,
          description,
          createdAt: new Date().toISOString(),
        },
        ...state.transactions,
      ],
    }));
    return true;
  },

  grantCredits: (amount, description) =>
    set((state) => ({
      balance: state.balance + amount,
      transactions: [
        {
          id: `tx-${Date.now()}`,
          amount,
          type: "grant",
          module: "video-studio",
          description,
          createdAt: new Date().toISOString(),
        },
        ...state.transactions,
      ],
    })),
}));
