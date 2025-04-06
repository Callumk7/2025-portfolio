import createEmblaCarousel from "embla-carousel-solid";
import styles from "./carousel.module.scss";
import { For } from "solid-js";

export function Carousel(props: { imageUrls: string[] }) {
	const [emblaRef] = createEmblaCarousel();

	return (
		<div ref={emblaRef} class={styles.embla}>
			<div class={styles.embla__container}>
				<For each={props.imageUrls}>
					{(url) => <img src={url} alt="screenshot" class={styles.embla__slide} />}
				</For>
			</div>
		</div>
	);
}
