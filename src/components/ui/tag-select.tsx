import { createSignal } from "solid-js/types/server/reactive.js";

export function TagSelect(props: { tags: string[] }) {
	const [selected, setSelected] = createSignal<Set<string>>(new Set([]));
	const [tags, setTags] = createSignal(new Set(props.tags));

	const toggle = (tag: string) => {
		setSelected((prev) => {
			if (prev.delete(tag)) {
				return prev;
			}
			return prev.add(tag);
		});
	};
}
