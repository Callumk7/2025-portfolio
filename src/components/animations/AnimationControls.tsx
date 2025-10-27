import { useStore } from "@nanostores/solid";
import { animationType, type AnimationType } from "~/stores/animationSettings";
import styles from "./AnimationControls.module.scss";

export function AnimationControls() {
	const $type = useStore(animationType);

	const handleTypeChange = (e: Event) => {
		const target = e.target as HTMLSelectElement;
		animationType.set(target.value as AnimationType);
	};

	return (
		<div class={styles.controls}>
			<div class={styles.control}>
				<select value={$type()} onChange={handleTypeChange}>
					<option value="none">None</option>
					<option value="gradient-orbs">Gradient Orbs</option>
					<option value="floating-particles">Floating Particles</option>
					<option value="grid-shimmer">Grid Shimmer</option>
					<option value="noise-grain">Noise Grain</option>
				</select>
			</div>
		</div>
	);
}
