import { create } from 'zustand';

const useShopping = create((set) => ({
  item: 0,
  increaseItem: () => set((state) => ({ item: state.item + 1 })),
  removeAllItem: () => set({ item: 0 }),
}));

const useBuy = create((set) => ({
  item: 0,
  setItem: () => set((state) => ({ item: state.item === 0 ? 100 : 0 })),
}));

const useSearch = create((set) => ({
  item: "",
  setItem: (searchTerm) => set({ item: searchTerm }),
}));

const useBook = create((set) => ({
  book: {},
  setBook: (state) => set({ book: state }),
}));


export { useShopping, useBuy, useSearch,useBook };
  