export const dateLocale = "en-GB";

export function formatDate(
	date: Date,
	options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "short",
		day: "numeric",
	},
) {
	return date.toLocaleDateString(dateLocale, options);
}
