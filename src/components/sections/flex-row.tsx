import { children, type JSXElement } from "solid-js";

export function FlexRow(props: {
	children: JSXElement;
	responsive?: boolean;
}) {
	const c = children(() => props.children);
	return (
		<div
			classList={{
				row: props.responsive ?? false,
			}}
		>
			{c()}
		</div>
	);
}
