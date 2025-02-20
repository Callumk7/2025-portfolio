import { children, type JSXElement } from "solid-js";
import styles from "./card.module.scss";

interface CardProps {
	title?: string;
	children: JSXElement;
	className?: string;
}

export function Card(props: CardProps) {
	const c = children(() => props.children);

	return (
		<div class={`${styles.card} ${props.className}`}>
			<h4>{props.title}</h4>
			<div>{c()}</div>
		</div>
	);
}
