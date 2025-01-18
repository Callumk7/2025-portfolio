import type { Project } from "../../types";

export function ProjectView(props: { project: Project }) {
	return (
		<div class="p-3 d-flex flex-column justify-content-stretch h-100">
			<h2>{props.project.name}</h2>
			<p>{props.project.description}</p>
			<a href="/place">Read more.</a>
		</div>
	);
}
