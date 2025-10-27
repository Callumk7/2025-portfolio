import { Switch, Match } from "solid-js";
import { useStore } from "@nanostores/solid";
import { animationType } from "~/stores/animationSettings";
import { FloatingParticles } from "./FloatingParticles";
import { GradientOrbs } from "./GradientOrbs";
import { GridShimmer } from "./GridShimmer";
import { NoiseGrain } from "./NoiseGrain";

export function AnimationRenderer() {
	const $type = useStore(animationType);

	return (
		<Switch>
			<Match when={$type() === "gradient-orbs"}>
				<GradientOrbs count={6} />
			</Match>
			<Match when={$type() === "floating-particles"}>
				<FloatingParticles count={40} />
			</Match>
			<Match when={$type() === "grid-shimmer"}>
				<GridShimmer lineCount={8} orientation="horizontal" />
				<GridShimmer lineCount={6} orientation="vertical" />
			</Match>
			<Match when={$type() === "noise-grain"}>
				<NoiseGrain density={150} intensity="medium" />
			</Match>
			<Match when={$type() === "none"}>{null}</Match>
		</Switch>
	);
}
