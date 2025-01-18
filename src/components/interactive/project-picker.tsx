import { createSignal, For } from "solid-js";
import { ProjectView } from "./project-view";
import type { Project } from "~/types";

interface ProjectPickerProps {
	projects: Project[];
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
								"slider-selected text-left": selected().slug === project.slug,
								"slider text-left": selected().slug !== project.slug,
							}}
						>
							{project.name}
						</button>
					)}
				</For>
			</div>
			<ProjectView project={selected()} />
		</div>
	);
}
