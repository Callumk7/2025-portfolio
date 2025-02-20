import type { JSXElement } from "solid-js";
import { Card } from "../ui/card";

interface ExperienceCardProps {
	jobTitle: string;
	companyName: string;
	dateStart: Date;
	dateEnd?: Date;
	children: JSXElement;
}

export function ExperienceCard(props: ExperienceCardProps) {
	return (
		<Card title={props.jobTitle}>
			<p>{props.dateStart.toLocaleDateString("gmt")}</p>
			{props.children}
		</Card>
	);
}
