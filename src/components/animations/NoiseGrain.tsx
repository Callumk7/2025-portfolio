import { For, createSignal, onMount } from "solid-js";
import styles from "./NoiseGrain.module.scss";

interface Grain {
	id: number;
	x: number;
	y: number;
	size: number;
	duration: number;
	delay: number;
}

interface NoiseGrainProps {
	density?: number;
	intensity?: "subtle" | "medium" | "heavy";
}

export function NoiseGrain(props: NoiseGrainProps) {
	const density = props.density ?? 200;
	const intensity = props.intensity ?? "subtle";
	const [grains, setGrains] = createSignal<Grain[]>([]);

	onMount(() => {
		const newGrains: Grain[] = [];
		for (let i = 0; i < density; i++) {
			newGrains.push({
				id: i,
				x: Math.random() * 100,
				y: Math.random() * 100,
				size: Math.random() * 2 + 1,
				duration: Math.random() * 1.5 + 0.5,
				delay: Math.random() * 2,
			});
		}
		setGrains(newGrains);
	});

	return (
		<div class={`${styles.container} ${styles[intensity]}`}>
			<For each={grains()}>
				{(grain) => (
					<div
						class={styles.grain}
						style={{
							left: `${grain.x}%`,
							top: `${grain.y}%`,
							width: `${grain.size}px`,
							height: `${grain.size}px`,
							"animation-duration": `${grain.duration}s`,
							"animation-delay": `${grain.delay}s`,
						}}
					/>
				)}
			</For>
		</div>
	);
}
