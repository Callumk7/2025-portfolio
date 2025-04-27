import type { Project } from "../../types";
import { Tags } from "./tags";

export function ProjectView(props: { project: Project }) {
	return (
		<div class="content-preview">
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


