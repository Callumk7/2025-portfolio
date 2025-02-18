import { Button } from "../ui/button";
import styles from "./about.module.scss";

export function About() {
	return (
		<div class={styles.layout}>
			<div class={styles.one}>
				<div>
					<Button>Work With Me</Button>
				</div>
			</div>
			<div class={styles.two}>
				<h1>I am a devloper and designer, and I like colours</h1>
				<p>
					I am a web developer and designer, with experience in Product and UX design. I
					love building delightful and beutiful experiences for the web. Advocate for the
					platform, Passionate for details. London based.
				</p>
				<p>Collaborate with me with the links below! 👇</p>
			</div>
		</div>
	);
}
