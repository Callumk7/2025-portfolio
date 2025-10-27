import { For, createSignal, onMount } from "solid-js";
import styles from "./GradientOrbs.module.scss";

interface Orb {
	id: number;
	x: number;
	y: number;
	size: number;
	color: string;
	duration: number;
	delay: number;
}

interface GradientOrbsProps {
	count?: number;
}

export function GradientOrbs(props: GradientOrbsProps) {
	const count = props.count ?? 6;
	const [orbs, setOrbs] = createSignal<Orb[]>([]);

	const colors = [
		"var(--color-1)",
		"var(--color-2)",
		"var(--color-3)",
		"var(--color-4)",
	];

	onMount(() => {
		const newOrbs: Orb[] = [];
		for (let i = 0; i < count; i++) {
			newOrbs.push({
				id: i,
				x: Math.random() * 100,
				y: Math.random() * 100,
				size: Math.random() * 150 + 100,
				color: colors[Math.floor(Math.random() * colors.length)],
				duration: Math.random() * 3 + 4,
				delay: Math.random() * 2,
			});
		}
		setOrbs(newOrbs);
	});

	return (
		<div class={styles.container}>
			<For each={orbs()}>
				{(orb) => (
					<div
						class={styles.orb}
						style={{
							left: `${orb.x}%`,
							top: `${orb.y}%`,
							width: `${orb.size}px`,
							height: `${orb.size}px`,
							background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
							"animation-duration": `${orb.duration}s`,
							"animation-delay": `${orb.delay}s`,
						}}
					/>
				)}
			</For>
		</div>
	);
}
