import type { BlogData } from "~/content.config";

export function PostPreview(props: { post: BlogData, slug: string }) {
	return (
		<a href={`/blog/${props.slug}`} class="preview-card">
			<h3 class="title">{props.post.title}</h3>
			<p>{props.post.description}</p>
		</a>
	);
}
