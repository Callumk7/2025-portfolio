import { createSignal } from "solid-js";
import { ProjectView } from "./project-view";
import type { Project } from "~/types";
import { VerticalList } from "./vertical-list";

interface ProjectPickerProps {
	projects: Project[];
}

export function ProjectPicker(props: ProjectPickerProps) {
	const [selected, setSelected] = createSignal<Project>(props.projects[0]);
	const list = props.projects.map((proj) => proj.name);

	const handleSelect = (item: string) => {
		const selectedProj = props.projects.find((proj) => proj.name === item);
		if (selectedProj) {
			setSelected(selectedProj);
		}
	};

	return (
		<div class="grid-split-wide">
			<VerticalList
				content={list}
				selected={selected().name}
				setSelected={handleSelect}
			/>
			<ProjectView project={selected()} />
		</div>
	);
}
