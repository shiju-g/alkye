import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// Define the store's state and actions types
interface AuthState {
  token: string | null;
  userId: string | null;
  setTokenAndUserId: (token: string, userId: string) => void;
  clearAuth: () => void;
  isHydrated: boolean; // To track hydration status
}

// Create Zustand store with persist middleware
const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      userId: null,
      isHydrated: false, // Default to not hydrated
      setTokenAndUserId: (token: string, userId: string) =>
        set({ token, userId }),
      clearAuth: () => set({ token: null, userId: null }), // Clear auth data
      // Set isHydrated to true after the store is rehydrated
      onRehydrateStorage: () => () => set({ isHydrated: true }),
    }),
    {
      name: "auth-storage", // Key name in localStorage
      storage: createJSONStorage(() => localStorage), // Use localStorage with JSON parsing/stringifying
    }
  )
);

export default useAuthStore;
