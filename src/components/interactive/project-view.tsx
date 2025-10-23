import type { ProcessedProject } from "../../types";
import { GithubIcon } from "../icons/solid/github";
import { Tags } from "./tags";

export function ProjectView(props: { project: ProcessedProject }) {
	return (
		<div class="content-preview">
			<div class="content-preview__content">
				<div>
					<h2>
						<a href={`/projects/${props.project.slug}`}>{props.project.name}</a>
					</h2>
					<Tags tags={props.project.tags} />
				</div>
				<p>{props.project.description}</p>
				<div class="link-row">
					<a href={`/projects/${props.project.slug}`} class="link">
						Read more.
					</a>
					<a href={props.project.githubUrl} class="link">
						<GithubIcon />
					</a>
				</div>
			</div>
		</div>
	);
}
