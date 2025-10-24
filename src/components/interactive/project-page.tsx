import type { Project } from "~/types";

import { SearchContainer } from "./search/search-container";

export function ProjectPage(props: { projects: Project[] }) {
	return <SearchContainer projects={props.projects} />;
}
