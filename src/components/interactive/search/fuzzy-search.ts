import Fuse from "fuse.js";
import { createMemo } from "solid-js";
import type { Project } from "~/types";

export const createFuzzyProjectSearch = (filteredProjects: () => Project[], term: () => string) => {
	const fuse = createMemo(
		() =>
			new Fuse(filteredProjects(), {
				keys: ["name"],
			}),
	);

	return () => {
		if (term() === "") {
			return filteredProjects();
		}

		return fuse()
			.search(term())
			.map((result) => result.item);
	};
};
