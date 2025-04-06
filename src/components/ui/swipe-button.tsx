import { children, type JSXElement } from "solid-js";
import styles from "./swipe-button.module.scss";

interface SwipeButtonProps {
	children: JSXElement;
	link?: { href: string };
	type?: "button" | "submit" | "reset";
	icon?: JSXElement;
	className?: string;
}

export function SwipeButton(props: SwipeButtonProps) {
	const c = children(() => props.children);
	if (props.link) {
		return (
			<a href={props.link.href} class={styles.swipe}>
				{c()}
			</a>
		);
	}

	return (
		<button type={props.type} class={styles.swipe}>
			{c()}
		</button>
	);
}
