import { createSignal, For, Show } from "solid-js";
import styles from "./picker-styles.module.css";

interface Project {
	title: string;
	description: string;
	subProjects?: Project[];
}

interface HorizontalPickerProps {
	projects: Project[];
}

export function HorizontalPicker(props: HorizontalPickerProps) {
	const [selectedProject, setSelectedProject] = createSignal(props.projects[0]);

	return (
		<div>
			<div class="flex-row w-100 divide-x text-center border-bottom">
				<For each={props.projects}>
					{(project) => (
						<button
							type="button"
							onClick={() => setSelectedProject(project)}
							class="p-2 reset-button"
							classList={{
								[styles.selected]: selectedProject().title === project.title,
							}}
						>
							<p>{project.title}</p>
						</button>
					)}
				</For>
			</div>

			<div class="m-4">
				<h2>{selectedProject().title}</h2>
				<p>{selectedProject().description}</p>
				<Show when={selectedProject().subProjects !== undefined}>
					<For each={selectedProject().subProjects}>{(sub) => <p>{sub.title}</p>}</For>
				</Show>
			</div>
		</div>
	);
}
