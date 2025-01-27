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
		<div class="border-right">
			<For each={props.content}>
				{(content) => (
					<button
						type="button"
						onClick={() => handleSelect(content)}
						class="vertical-stacked-element hover-swipe swipe-primary text-left"
						classList={{
							"selected-element": localSelected() === content,
						}}
					>
						{content}
					</button>
				)}
			</For>
		</div>
	);
}
