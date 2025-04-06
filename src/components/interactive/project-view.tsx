import type { Project } from "../../types";
import styles from "./project-view.module.scss";
import heightStyles from "./project-picker.module.scss";
import { Tags } from "./tags";

export function ProjectView(props: { project: Project }) {
	return (
		<div class={`${styles.container} ${heightStyles.minHeight} h-100`}>
			<div>
				<h2>{props.project.name}</h2>
				<Tags tags={props.project.tags} />
			</div>
			<p>{props.project.description}</p>
			<a href={`/projects/${props.project.slug}`} class="link">
				Read more.
			</a>
		</div>
	);
}


