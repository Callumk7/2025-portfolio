import Fuse from "fuse.js";
import { For } from "solid-js";
import { createSignal } from "solid-js";
import type { Project } from "~/types";

const [term, setTerm] = createSignal("");

export function SearchContainer(props: { projects: Project[] }) {
	const fuse = new Fuse(props.projects, {
		keys: ["name"],
	});

	const result = () => {
		if (term() === "") {
			return props.projects;
		}

		return fuse.search(term()).map((result) => result.item);
	};

	return (
		<div class="py-2">
			<SearchBar />
			<hr />
			<div class="divide-y">
				<For each={result()}>
					{(item) => (
						<a href={`/projects/${item.slug}`} class="preview-card">
							<h3 class="title">{item.name}</h3>
							<p>{item.description}</p>
						</a>
					)}
				</For>
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
		</div>
	);
}
