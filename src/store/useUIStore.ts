import { create } from "zustand";

interface UIState {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;

    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

export const useUIStore = create<UIState>((set) => ({
    isSidebarOpen: false,
    toggleSidebar: () =>
        set((s) => ({ isSidebarOpen: !s.isSidebarOpen })),

    isDarkMode: false,
    toggleDarkMode: () =>
        set((s) => ({ isDarkMode: !s.isDarkMode })),
}));
