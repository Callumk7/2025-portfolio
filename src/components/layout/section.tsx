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

	const align = props.align !== undefined;

	return (
		<div classList={{ section: true, grow, shrink }}>
			<div class="sub-section">
				{props.header && (
					<div classList={{ header: true, [`text-${props.align}`]: align }}>
						<h3>{props.header.title}</h3>
						{props.header.description && (
							<div class="description">{props.header.description}</div>
						)}
					</div>
				)}
				{c()}
			</div>
		</div>
	);
}
