import { For } from "solid-js";
import styles from "./project-picker.module.scss";

export function Tags(props: { tags: string[] }) {
	return (
		<div class={styles.tagRow}>
			<For each={props.tags}>{(tag) => <span class="tag">{tag}</span>}</For>
		</div>
	);
}
