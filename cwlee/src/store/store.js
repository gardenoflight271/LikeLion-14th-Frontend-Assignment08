import { create } from "zustand";

const store = create((set) => ({
    category: "all",

    setCategory: (category) => set({ category }),

}));

export default store;