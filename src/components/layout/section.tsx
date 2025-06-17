import { children, type JSXElement } from "solid-js";

export function Section(props: {
	header?: {
		title: string;
		description?: string;
	};
	children: JSXElement;
	grow?: boolean;
	shrink?: boolean;
	align?: "left" | "center" | "right";
	background?: "darker" | "lighter";
}) {
	const grow = props.grow ?? false;
	const shrink = props.shrink ?? false;

	const c = children(() => props.children);

	// Boolean for alignment style. If alignment provided, align is true
	const hasAlign = props.align !== undefined;

	return (
		<div
			class="section"
			classList={{
				grow,
				shrink,
				"section--darker": props.background === "darker",
				"section--lighter": props.background === "lighter",
			}}
		>
			<div class="section__inner">
				{props.header && (
					<div class="section__header" classList={{ [`text-${props.align}`]: hasAlign }}>
						<h3>{props.header.title}</h3>
						{props.header.description && <p>{props.header.description}</p>}
					</div>
				)}
				{c()}
			</div>
		</div>
	);
}
