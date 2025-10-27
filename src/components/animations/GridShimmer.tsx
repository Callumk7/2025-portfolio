import { For, createSignal, onMount } from "solid-js";
import styles from "./GridShimmer.module.scss";

interface Line {
	id: number;
	position: number;
	duration: number;
	delay: number;
}

interface GridShimmerProps {
	lineCount?: number;
	orientation?: "horizontal" | "vertical";
}

export function GridShimmer(props: GridShimmerProps) {
	const lineCount = props.lineCount ?? 6;
	const orientation = props.orientation ?? "horizontal";
	const [lines, setLines] = createSignal<Line[]>([]);

	onMount(() => {
		const newLines: Line[] = [];
		for (let i = 0; i < lineCount; i++) {
			newLines.push({
				id: i,
				position: (100 / (lineCount + 1)) * (i + 1),
				duration: Math.random() * 3 + 4,
				delay: Math.random() * 2,
			});
		}
		setLines(newLines);
	});

	return (
		<div class={styles.container}>
			<For each={lines()}>
				{(line) => (
					<div
						class={`${styles.line} ${styles[orientation]}`}
						style={{
							[orientation === "horizontal" ? "top" : "left"]: `${line.position}%`,
							"animation-duration": `${line.duration}s`,
							"animation-delay": `${line.delay}s`,
						}}
					/>
				)}
			</For>
		</div>
	);
}
