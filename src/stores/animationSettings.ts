import { atom } from "nanostores";

export type AnimationType =
	| "none"
	| "gradient-orbs"
	| "floating-particles"
	| "grid-shimmer"
	| "noise-grain";

const STORAGE_KEY = "animation-settings";

// Create atoms with default values
export const animationType = atom<AnimationType>("gradient-orbs");

// Initialize from localStorage on the client side
if (typeof window !== "undefined") {
	const stored = localStorage.getItem(STORAGE_KEY);
	if (stored) {
		try {
			const settings = JSON.parse(stored);
			if (settings.type) animationType.set(settings.type);
		} catch (error) {
			console.error("Failed to parse animation settings:", error);
		}
	}
}

// Save to localStorage whenever the store changes
function saveToLocalStorage() {
	if (typeof window === "undefined") return;

	const settings = {
		type: animationType.get(),
	};
	localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}

// Subscribe to changes and save to localStorage
animationType.subscribe(saveToLocalStorage);
