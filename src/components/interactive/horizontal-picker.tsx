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
			<div class="flex-row w-100 divide-x text-center border-bottom justify-content-stretch">
				<For each={props.projects}>
					{(project) => (
						<button
							type="button"
							onClick={() => setSelectedProject(project)}
							class="p-2 grow selector"
							classList={{
								[styles.selected]: selectedProject().title === project.title,
							}}
						>
							<p>{project.title}</p>
						</button>
					)}
				</For>
			</div>

			<div>
				<div class="border-bottom">
					<div class="p-2">
						<h2>{selectedProject().title}</h2>
						<p>{selectedProject().description}</p>
					</div>
				</div>
				<Show when={selectedProject().subProjects !== undefined}>
					<div class="split">
						<div class="left-stack">
							<For each={selectedProject().subProjects}>
								{(sub) => (
									<button class="stack-item slider selector text-left" type="button">
										{sub.title}
									</button>
								)}
							</For>
						</div>
					</div>
				</Show>
			</div>
		</div>
	);
}
