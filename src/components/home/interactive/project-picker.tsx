import { createSignal, For } from "solid-js";

interface ProjectPickerProps {
	projects: Project[];
}

interface Project {
	id: number;
	title: string;
	description: string;
}

export function ProjectPicker(props: ProjectPickerProps) {
	const [selected, setSelected] = createSignal<Project>(props.projects[0]);
	return (
		<div class="split">
			<div class="left-stack">
				<For each={props.projects}>
					{(project) => (
						<button
							type="button"
							onClick={() => setSelected(project)}
							class="selector"
							classList={{
								"slider-selected text-left": selected().id === project.id,
								"slider text-left": selected().id !== project.id,
							}}
						>
							{project.title}
						</button>
					)}
				</For>
			</div>
			<ProjectView project={selected()} />
		</div>
	);
}

export function ProjectView(props: { project: Project }) {
	return (
		<div class="p-3 d-flex flex-column justify-content-stretch h-100">
			<h2>{props.project.title}</h2>
			<p>{props.project.description}</p>
			<a href="/place">Read more.</a>
		</div>
	);
}
