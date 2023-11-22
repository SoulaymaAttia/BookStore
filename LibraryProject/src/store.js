import { create } from 'zustand'

const useShopping = create((set) => ({
  item: 0,
  increaseItem: () => set((state) => ({ item: state.item + 1 })),
  removeAllItem: () => set({ item: 0 }),
}))

const useBuy = create((set) => ({
  item: 0,
  setItem: () => set((state) => ({ item: state.item === 0 ? 100 : 0 })),
}));

export { useShopping,useBuy };
