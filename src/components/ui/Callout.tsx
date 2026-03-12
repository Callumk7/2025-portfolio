import type { JSX } from "solid-js";

export default function Callout(props: {
	children: JSX.Element;
}) {
	return (
		<aside role="note" class="callout">
			{props.children}
		</aside>
	);
}
