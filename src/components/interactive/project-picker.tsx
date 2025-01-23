import { createSignal, For, Match, Switch, type Setter } from "solid-js";
import { ProjectView } from "./project-view";
import type { Project } from "~/types";

import styles from "./picker-styles.module.css";

interface ProjectPickerProps {
	projects: Project[];
	direction?: "vertical" | "horizontal";
}

export function ProjectPicker(props: ProjectPickerProps) {
	const [selected, setSelected] = createSignal<Project>(props.projects[0]);
	const direction = () => props.direction ?? "vertical";
	return (
		<Switch>
			<Match when={direction() === "vertical"}>
				<div class="split">
					<VerticalList
						projects={props.projects}
						selectedSlug={selected().slug}
						setSelected={setSelected}
					/>
					<ProjectView project={selected()} />
				</div>
			</Match>
			<Match when={direction() === "horizontal"}>
				<HorizontalList
					projects={props.projects}
					selectedSlug={selected().slug}
					setSelected={setSelected}
				/>
				<ProjectView project={selected()} />
			</Match>
		</Switch>
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
							"slider-selected text-left": props.selectedSlug === project.slug,
							"slider text-left": props.selectedSlug !== project.slug,
						}}
					>
						{project.name}
					</button>
				)}
			</For>
		</div>
	);
}

function HorizontalList(props: ListProps) {
	return (
		<div class="responsive-row w-100 text-center border-bottom justify-content-stretch">
			<For each={props.projects}>
				{(project) => (
					<button
						type="button"
						onClick={() => props.setSelected(project)}
						class="horizontal-stacked-element hover-swipe swipe-secondary"
						classList={{
							[styles.selected]: props.selectedSlug === project.slug,
						}}
					>
						<p>{project.name}</p>
					</button>
				)}
			</For>
		</div>
	);
}
