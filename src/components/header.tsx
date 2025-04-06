import { For } from "solid-js";

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
		<nav class="header">
			<a href="/" class="header__logo">
				callumKloos
			</a>
			<ul class="header__links">
				<For each={links}>
					{(link) => (
						<li class="header__link">
							<a
								href={link.href}
								class="button"
								classList={{ header__link__active: props.pathname === link.href }}
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
