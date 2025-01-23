import { createSignal, For, type Setter } from "solid-js";
import type { Project } from "~/types";
import { FlexRow } from "../sections/flex-row";

import { tags } from "~/data";

type TopicKey = keyof typeof tags;
const topics: TopicKey[] = Object.keys(tags) as TopicKey[];

// This is really nice in Solid, and it works in Astro as well, you can create a
// "global" signal that can be used. By "global", I mean within the scope of this
// module. There is also a risk: It will be loaded everywhere ONE of these components is used,
// and so it should be closely tied to the components in this module
const [selectedTopic, setSelectedTopic] = createSignal<TopicKey>(topics[0]);

export function ProjectPage(props: { projects: Project[] }) {
	return (
		<>
			<FlexRow responsive>
				<TopicRow />
			</FlexRow>
			<hr />
			<div class="split">
				<div class="border-right">
					<For each={tags[selectedTopic()]}>
						{(topic) => (
							<button
								type="button"
								class="vertical-stacked-element hover-swipe swipe-secondary"
							>
								{topic}
							</button>
						)}
					</For>
				</div>
			</div>
		</>
	);
}

function TopicRow() {
	return (
		<For each={topics}>
			{(topic) => (
				<TopicButton
					topic={topic}
					selected={selectedTopic() === topic}
					setSelected={setSelectedTopic}
				/>
			)}
		</For>
	);
}

function TopicButton(props: {
	topic: TopicKey;
	selected: boolean;
	setSelected: Setter<TopicKey>;
}) {
	return (
		<button
			type="button"
			classList={{ "bg-300": props.selected }}
			onClick={() => props.setSelected(props.topic)}
		>
			{props.topic}
		</button>
	);
}
