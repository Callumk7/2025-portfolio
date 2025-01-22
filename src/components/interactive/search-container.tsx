import Fuse from "fuse.js";
import { For } from "solid-js";
import { createSignal } from "solid-js";
import type { Project } from "~/types";

export function SearchContainer(props: { projects: Project[] }) {
	const fuse = new Fuse(props.projects, {
		keys: ["name"],
	});
	const [term, setTerm] = createSignal("");
	const result = () => fuse.search(term());

	const tags = props.projects.flatMap((proj) => proj.tags);

	return (
		<div class="p-2">
			<div class="flex-row">
				<input
					class="search"
					type="text"
					value={term()}
					onInput={(e) => setTerm(e.currentTarget.value)}
					placeholder="Search Projects"
				/>
				<For each={tags}>{(tag) => <span>{tag}</span>}</For>
			</div>
			<For each={result().map((result) => result.item)}>
				{(item) => (
					<div class="preview-card">
						<h3 class="title">{item.name}</h3>
						<p>{item.description}</p>
					</div>
				)}
			</For>
		</div>
	);
}
