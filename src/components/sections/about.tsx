import styles from "./about.module.scss";

export function About() {
	return (
		<div class={styles.layout}>
			<div class={styles.one}>
				<div>
					<button type="button" class={styles.button}>
						Work With Me
					</button>
				</div>
			</div>
			<div class={styles.two}>
				<h1>I am a devloper and designer, and I like colours</h1>
				<p>
					Qui eiusmod deserunt qui duis magna laboris aliquip ad labore sint sint esse
					laboris ullamco ipsum. Do voluptate eu adipisicing labore laboris eu anim.
					Laborum sint enim fugiat. Commodo elit proident magna. Excepteur amet esse aute.
					Excepteur voluptate deserunt amet aliquip nostrud ad in reprehenderit eu eiusmod
					laboris nostrud non. Irure ad nulla do nostrud deserunt incididunt magna nostrud
					deserunt ex et elit deserunt ad. Aliquip est veniam aliquip enim aute consequat
					laborum quis ut consectetur do aliqua adipisicing. Eiusmod duis aliquip esse
					nostrud velit eiusmod officia eu qui et.
				</p>
			</div>
		</div>
	);
}
