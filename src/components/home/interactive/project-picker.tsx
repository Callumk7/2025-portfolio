import { createSignal } from "solid-js";

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
		<div>
			<h1>Hello</h1>
			<div>
				Selected project title: <span class="text-warning bg-dark">{selected().title}</span>
			</div>
		</div>
	);
}
