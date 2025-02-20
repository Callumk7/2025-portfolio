import { For } from "solid-js";
import styles from "./header.module.scss";
import { ThemePicker } from "./interactive/theme-picker";

export function Header(props: { pathname: string }) {
	const links = [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Experience",
			href: "/experience",
		},
		{
			label: "About",
			href: "/contact",
		},
	];

	return (
		<nav class="d-flex justify-content-space-between w-100 p-4">
			<span class={styles.logo}>callumKloos</span>
			<ul class={styles.links}>
				<For each={links}>
					{(link) => (
						<li>
							<a
								href={link.href}
								class="button"
								classList={{ [styles.active]: props.pathname === link.href }}
							>
								{link.label}
							</a>
						</li>
					)}
				</For>
			</ul>
		</nav>
	);
}
