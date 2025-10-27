import { For } from "solid-js";
import { createSignal } from "solid-js";
import type { Project } from "~/types";
import { Select } from "~/components/ui/select";
import { createFuzzyProjectSearch } from "./fuzzy-search";
import { Tags } from "../tags";
import styles from "./search.module.scss";

const [term, setTerm] = createSignal("");
const [selectedTags, setSelectedTags] = createSignal<string[]>([]);

export function SearchContainer(props: { projects: Project[] }) {
	const filteredProjects = () => {
		if (selectedTags().length === 0) {
			return props.projects;
		}
		return props.projects.filter((project) =>
			selectedTags().every((tag) => project.tags.includes(tag)),
		);
	};

	const result = createFuzzyProjectSearch(filteredProjects, term);

	const options = getProjectTags(props.projects);

	return (
		<div class="py-2">
			<SearchBar options={[...options]} />
			<hr />
			<div class="divide-y">
				<For each={result()}>{(item) => <ProjectCard project={item} />}</For>
			</div>
		</div>
	);
}

function SearchBar(props: { options: string[] }) {
	return (
		<div class={styles.searchBar}>
			<input
				class={styles.input}
				type="text"
				value={term()}
				onInput={(e) => setTerm(e.currentTarget.value)}
				placeholder="Search Projects"
			/>
			<Select
				options={props.options}
				placeholder="Filter"
				selected={selectedTags()}
				setSelected={setSelectedTags}
			/>
		</div>
	);
}

function ProjectCard(props: { project: Project }) {
	return (
		<a href={`/projects/${props.project.slug}`} class={styles.previewCard}>
			<h4 class={styles.previewCard__title}>{props.project.name}</h4>
			<Tags tags={props.project.tags} />
			<p>{props.project.description}</p>
		</a>
	);
}

function getProjectTags(projects: Project[]) {
	const tags = new Set(projects.flatMap((project) => project.tags));
	return [...tags];
}
