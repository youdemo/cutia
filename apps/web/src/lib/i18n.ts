import { setupI18nInstance } from "@i18next-toolkit/react";

let initialized = false;

export function initI18n() {
	if (initialized || typeof window === "undefined") {
		return;
	}
	initialized = true;

	setupI18nInstance({
		defaultLanguage: "en",
		supportedLngs: ["en", "zh", "ja", "ko", "es", "pt", "fr", "de", "id", "vi", "ru", "it"],
	});
}
