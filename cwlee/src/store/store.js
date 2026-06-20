import { create } from "zustand";

const store = create((set) => ({
    category: "all",
    currentImage: null,

    loading: false,
    error: null,

    setCategory: (category) => set({ category }),

    setCurrentImage: (currentImage) =>
        set({ currentImage }),

    setLoading: (loading) =>
        set({ loading }),

    setError: (error) =>
        set({ error }),
}));

export default store;