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
}) {
	const grow = props.grow ?? false;
	const shrink = props.shrink ?? false;

	const c = children(() => props.children);

	// Boolean for alignment style. If alignment provided, align is true
	const align = props.align !== undefined;

	return (
		<div class="section" classList={{ grow, shrink }}>
			<div class="section__inner">
				{props.header && (
					<div class="section__header" classList={{ [`text-${props.align}`]: align }}>
						<h3>{props.header.title}</h3>
						{props.header.description && (
							<p>{props.header.description}</p>
						)}
					</div>
				)}
				{c()}
			</div>
		</div>
	);
}
