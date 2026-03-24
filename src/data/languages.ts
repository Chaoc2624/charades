export interface Language {
	code: string;
	name: string;
	nativeName: string;
	flag: string;
	hreflang: string;
}
export const SUPPORTED_LANGUAGES: Language[] = [
	{ code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧', hreflang: 'en' },
	{ code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', hreflang: 'de' },
	{ code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', hreflang: 'fr' },
	{ code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', hreflang: 'es' },
	// { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', hreflang: 'it' },
	// { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', hreflang: 'ja' },
	// { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷', hreflang: 'ko' },
	// { code: 'zh-tw', name: 'Traditional Chinese', nativeName: '繁體中文', flag: '🇭🇰', hreflang: 'zh-TW' },
];

export const VALID_LANG_CODES = SUPPORTED_LANGUAGES.map(l => l.code);

export function getLanguage(code: string): Language | undefined {
	return SUPPORTED_LANGUAGES.find(l => l.code === code);
}

export function isValidLang(code: string): boolean {
	return VALID_LANG_CODES.includes(code);
}
