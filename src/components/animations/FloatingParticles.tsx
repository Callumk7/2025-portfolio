import { For, createSignal, onMount } from "solid-js";
import styles from "./FloatingParticles.module.scss";

interface Particle {
	id: number;
	x: number;
	y: number;
	size: number;
	duration: number;
	delay: number;
}

interface FloatingParticlesProps {
	count?: number;
}

export function FloatingParticles(props: FloatingParticlesProps) {
	const count = props.count ?? 8;
	const [particles, setParticles] = createSignal<Particle[]>([]);

	onMount(() => {
		const newParticles: Particle[] = [];
		for (let i = 0; i < count; i++) {
			newParticles.push({
				id: i,
				x: Math.random() * 100,
				y: Math.random() * 100,
				size: Math.random() * 4 + 2,
				duration: Math.random() * 4 + 3,
				delay: Math.random() * 2,
			});
		}
		setParticles(newParticles);
	});

	return (
		<div class={styles.container}>
			<For each={particles()}>
				{(particle) => (
					<div
						class={styles.particle}
						style={{
							left: `${particle.x}%`,
							top: `${particle.y}%`,
							width: `${particle.size}px`,
							height: `${particle.size}px`,
							"animation-duration": `${particle.duration}s`,
							"animation-delay": `${particle.delay}s`,
						}}
					/>
				)}
			</For>
		</div>
	);
}
