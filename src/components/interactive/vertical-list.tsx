import { createSignal, For } from "solid-js";

export function VerticalList(props: {
	content: string[];
	selected?: string;
	setSelected?: (item: string) => void;
}) {
	const [localSelected, setLocalSelected] = createSignal(props.selected);
	const handleSelect = (item: string) => {
		setLocalSelected(item);
		if (props.setSelected) props.setSelected(item);
	};
	return (
		<div class="vertical-list">
			<For each={props.content}>
				{(content) => (
					<button
						type="button"
						onClick={() => handleSelect(content)}
						class="vertical-list__item"
						classList={{
							"vertical-list__item--selected": localSelected() === content,
						}}
					>
						{content}
					</button>
				)}
			</For>
		</div>
	);
}
