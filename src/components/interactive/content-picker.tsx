import { createSignal } from "solid-js";
import { VerticalList } from "./vertical-list";
import { ContentView } from "./content-view";

export interface Content {
	title: string;
	tags?: string[];
	body: string;
	link: string;
}

interface ContentPickerProps {
	content: Content[];
}

export function ContentPicker(props: ContentPickerProps) {
	const [selected, setSelected] = createSignal<Content>(props.content[0]);
	const list = props.content.map((c) => c.title);

	const handleSelect = (item: string) => {
		const selectedProj = props.content.find((c) => c.title === item);
		if (selectedProj) {
			setSelected(selectedProj);
		}
	};

	return (
		<div class="grid-split-wide">
			<VerticalList
				content={list}
				selected={selected().title}
				setSelected={handleSelect}
			/>
			<ContentView content={selected()} />
		</div>
	);
}
