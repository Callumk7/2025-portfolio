interface Post {
	title: string;
	description: string;
	projectShortName?: string;
	content: string;
	coverImageUrl: string;
	date: string;
	tags: string[];
	slug: string;
}

interface Project {
	name: string;
	shortName: string;
	description: string;
	projectUrl?: string; // external link to deployed project
	githubUrl: string; // github project link
	coverImageUrl: string;
	tags: string[];
	caseStudyUrl?: string;
	slug: string;
	tech: string[];
	wip: boolean;
	cvDescription?: string;
	screenshotCount?: number;
}

interface ProjectWithContent extends Project {
	content: string;
}

interface Photo {
	id: string;
	slug: string;
	width: number;
	height: number;
	alt_description: string;
	urls: {
		raw: string;
		full: string;
		regular: string;
		small: string;
		thumb: string;
	};
}

type Tags = Record<string, number>;

type KV_KEYS = "postData" | "postTagData" | "projectData" | "projectTagData";

export type { Post, Project, ProjectWithContent, Tags, Photo, KV_KEYS };
