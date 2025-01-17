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
		<div class="grid-2">
			<div class="d-flex flex-column border-right divide-y">
				<For each={props.projects}>
					{(project) => (
						<button
							type="button"
							onClick={() => setSelected(project)}
							classList={{
								"slider-selected text-left": selected().id === project.id,
								"slider text-left": selected().id !== project.id,
							}}
						>
							<h2>{project.title}</h2>
						</button>
					)}
				</For>
			</div>
			<div class="p-3 d-flex flex-column justify-content-stretch h-100">
				<h2>{selected().title}</h2>
				<p>{selected().description}</p>
				<a href="/place">Read more.</a>
			</div>
		</div>
	);
}
