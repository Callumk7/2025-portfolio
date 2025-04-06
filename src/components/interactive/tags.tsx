import { For } from "solid-js";

export function Tags(props: { tags: string[] }) {
	return (
		<div class="flex">
			<For each={props.tags}>{(tag) => <span class="tag">{tag}</span>}</For>
		</div>
	);
}
