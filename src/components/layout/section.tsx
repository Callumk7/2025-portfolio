import { children, type JSXElement } from "solid-js";

export function Section(props: {
	children: JSXElement;
	grow?: boolean;
	shrink?: boolean;
}) {
	const grow = props.grow ?? false;
	const shrink = props.shrink ?? false;
	const c = children(() => props.children);
	return (
		<div classList={{ section: true, grow, shrink }}>
			<div class="sub-section">{c()}</div>
		</div>
	);
}
