import { createSignal, For, type Setter } from "solid-js";
import { ProjectView } from "./project-view";
import type { Project } from "~/types";

interface ProjectPickerProps {
	projects: Project[];
}

export function ProjectPicker(props: ProjectPickerProps) {
	const [selected, setSelected] = createSignal<Project>(props.projects[0]);
	return (
				<div class="split">
					<VerticalList
						projects={props.projects}
						selectedSlug={selected().slug}
						setSelected={setSelected}
					/>
					<ProjectView project={selected()} />
				</div>
	);
}

interface ListProps {
	projects: Project[];
	selectedSlug: string;
	setSelected: Setter<Project>;
}

function VerticalList(props: ListProps) {
	return (
		<div class="border-right">
			<For each={props.projects}>
				{(project) => (
					<button
						type="button"
						onClick={() => props.setSelected(project)}
						class="vertical-stacked-element hover-swipe swipe-primary"
						classList={{
							"text-left": props.selectedSlug === project.slug,
						}}
					>
						{project.name}
					</button>
				)}
			</For>
		</div>
	);
}
