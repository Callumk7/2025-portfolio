import Fuse from "fuse.js";
import { For } from "solid-js";
import { createSignal, createMemo } from "solid-js";
import type { Project } from "~/types";
import { Select } from "../ui/select";

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

	const fuse = createMemo(
		() =>
			new Fuse(filteredProjects(), {
				keys: ["name"],
			}),
	);

	const result = () => {
		if (term() === "") {
			return filteredProjects();
		}

		return fuse()
			.search(term())
			.map((result) => result.item);
	};

	return (
		<div class="py-2">
			<SearchBar />
			<hr />
			<div class="divide-y">
				<For each={result()}>{(item) => <ProjectCard project={item} />}</For>
			</div>
		</div>
	);
}

function SearchBar() {
	return (
		<div class="flex-row">
			<input
				class="search"
				type="text"
				value={term()}
				onInput={(e) => setTerm(e.currentTarget.value)}
				placeholder="Search Projects"
			/>
			<Select
				options={["react", "node", "remix", "elixir", "next.js"]}
				placeholder="Filter"
				selected={selectedTags()}
				setSelected={setSelectedTags}
			/>
		</div>
	);
}

function ProjectCard(props: { project: Project }) {
	return (
		<a href={`/projects/${props.project.slug}`} class="preview-card">
			<h4 class="title">{props.project.name}</h4>
			<p>{props.project.description}</p>
		</a>
	);
}
