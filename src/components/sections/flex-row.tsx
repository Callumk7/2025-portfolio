import { children, type JSXElement } from "solid-js";
import styles from "./flex-row.module.scss";

export function FlexRow(props: {
	children: JSXElement;
	responsive?: boolean;
	wrap?: boolean;
}) {
	const c = children(() => props.children);
	return (
		<div
			classList={{
				[styles["responsive-row"]]: props.responsive ?? false,
				"flex-wrap": props.wrap ?? false, // WARN: Not being used?
				"w-100": true,
			}}
		>
			{c()}
		</div>
	);
}
