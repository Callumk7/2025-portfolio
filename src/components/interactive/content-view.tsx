import type { Content } from "./content-picker";
import { Tags } from "./tags";

export function ContentView(props: { content: Content }) {
	return (
		<div class="content-preview">
			<div>
				<h2>{props.content.title}</h2>
				{props.content.tags && <Tags tags={props.content.tags} />}
			</div>
			<p>{props.content.body}</p>
			<a href={props.content.link} class="link">
				Read more.
			</a>
		</div>
	);
}
