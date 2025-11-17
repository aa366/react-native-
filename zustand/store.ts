import { create } from "zustand";

interface CounterStore {
    count: number;
}

export const useCounterStore = create<CounterStore>(() => {
    return { count: 0 }
}) 