/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, useCallback } from "react";

declare global {
	interface Window {
		google: any;
		googleTranslateElementInit: any;
	}
}

export const Language = () => {
	const [translationInitialized, setTranslationInitialized] = useState(false);

	const googleTranslateElementInit = useCallback(() => {
		if (!translationInitialized && window.google) {
			new window.google.translate.TranslateElement(
				{
					pageLanguage: "en",
					includedLanguages: "en,es,zh,ja,ko",
					autoDisplay: false,
				},
				"google_translate_element",
			);
			setTranslationInitialized(true);
		}
	}, [translationInitialized]);

	useEffect(() => {
		const scriptId = "google-translate-script";
		if (!document.getElementById(scriptId)) {
			const addScript = document.createElement("script");
			addScript.id = scriptId;
			addScript.src = "https://translate.google.com/translate_a/element.js";
			addScript.onload = googleTranslateElementInit;
			document.body.appendChild(addScript);
		} else {
			googleTranslateElementInit();
		}
	}, [googleTranslateElementInit]);

	return <div id={`google_translate_element`}></div>;
};
