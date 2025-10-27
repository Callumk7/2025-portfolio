import { createSignal, Show, For } from "solid-js";
import { Portal } from "solid-js/web";
import { MenuIcon } from "~/components/icons/solid/menu";
import { CloseIcon } from "~/components/icons/solid/close";
import styles from "./ResponsiveNav.module.scss";

export interface NavLink {
	label: string;
	href: string;
}

interface ResponsiveNavProps {
	links: NavLink[];
	pathname: string;
}

export function ResponsiveNav(props: ResponsiveNavProps) {
	const [isOpen, setIsOpen] = createSignal(false);

	const toggleMenu = () => setIsOpen(!isOpen());

	const closeMenu = () => setIsOpen(false);

	return (
		<>
			{/* Desktop Navigation */}
			<ul class={styles.desktopNav}>
				<For each={props.links}>
					{(link) => (
						<li>
							<a
								href={link.href}
								class={props.pathname === link.href ? styles.active : ""}
							>
								{link.label}
							</a>
						</li>
					)}
				</For>
			</ul>

			{/* Mobile Menu Button */}
			<button
				type="button"
				class={styles.menuButton}
				onClick={toggleMenu}
				aria-label="Toggle navigation menu"
				aria-expanded={isOpen()}
			>
				<Show when={!isOpen()} fallback={<CloseIcon />}>
					<MenuIcon />
				</Show>
			</button>

			{/* Mobile Navigation Overlay - Rendered via Portal */}
			<Portal>
				<Show when={isOpen()}>
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: mobile navigation */}
					<div class={styles.mobileOverlay} onClick={closeMenu}>
						{/* biome-ignore lint/a11y/useKeyWithClickEvents: mobile navigation */}
						<nav class={styles.mobileNav} onClick={(e) => e.stopPropagation()}>
							<ul>
								<For each={props.links}>
									{(link) => (
										<li>
											<a
												href={link.href}
												class={props.pathname === link.href ? styles.active : ""}
												onClick={closeMenu}
											>
												{link.label}
											</a>
										</li>
									)}
								</For>
							</ul>
						</nav>
					</div>
				</Show>
			</Portal>
		</>
	);
}
