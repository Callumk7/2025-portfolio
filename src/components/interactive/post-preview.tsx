import type { BlogData } from "~/content.config";

export function PostPreview(props: { post: BlogData }) {
	return (
		<div class="preview-card">
			<h3 class="title">{props.post.title}</h3>
			<p>{props.post.description}</p>
		</div>
	);
}
