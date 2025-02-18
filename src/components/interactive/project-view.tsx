import { For } from "solid-js";
import type { Project } from "../../types";
import styles from "./project-view.module.scss";
import heightStyles from "./project-picker.module.scss";

export function ProjectView(props: { project: Project }) {
	return (
		<div class={`${styles.container} ${heightStyles.minHeight} h-100`}>
			<div>
				<h2>{props.project.name}</h2>
				<div class={styles.tagRow}>
					<For each={props.project.tags}>{(tag) => <span class="tag">{tag}</span>}</For>
				</div>
			</div>
			<p>{props.project.description}</p>
			<a href={`/projects/${props.project.slug}`} class="link">
				Read more.
			</a>
		</div>
	);
}


