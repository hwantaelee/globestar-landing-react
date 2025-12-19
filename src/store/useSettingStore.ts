import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SettingsState {
    theme: "light" | "dark";
    setTheme: (t: "light" | "dark") => void;
}

// persist를 쓰면 새로고침해도 상태가 날라가지않고 보존됨
export const useSettingsStore = create(
    persist<SettingsState>(
        (set) => ({
            theme: "light",
            setTheme: (t) => set({ theme: t }),
        }),
        {
            name: "settings-storage", // localStorage 키
        }
    )
);
