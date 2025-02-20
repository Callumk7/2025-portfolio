import { createEffect, createSignal, For } from "solid-js";

export function ThemePicker() {
	const themes = {
		one: {
			"--background": "#ffffff",
			"--text": "#000000",
		},
		two: {
			"--background": "#000000",
			"--text": "#ffffff",
		},
	};

	const [currentTheme, setCurrentTheme] = createSignal("one");

	createEffect(() => {
		const theme = themes[currentTheme() as "one" | "two"];
		Object.entries(theme).forEach(([cssVar, value]) => {
			document.documentElement.style.setProperty(cssVar, value);
		});
	});

	return (
		<div>
			<label for="theme-picker">Choose Theme</label>
			<select id="theme-picker" onChange={(e) => setCurrentTheme(e.target.value)}>
				<For each={Object.keys(themes)}>
					{(themeName) => <option value={themeName}>{themeName}</option>}
				</For>
			</select>
		</div>
	);
}
