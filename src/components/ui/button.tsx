import { mergeProps, splitProps, type Component, type JSX } from "solid-js";
import styles from "./button.module.scss";

interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean;
	isDisabled?: boolean;
	style?: "default" | "cta" | "danger" | "secondary";
}

export const Button: Component<ButtonProps> = (props) => {
	const merged = mergeProps(
		{
			type: "button" as const,
			isLoading: false,
			isDisabled: false,
			style: "default"
		},
		props,
	);

	const [local, rest] = splitProps(merged, [
		"children",
		"aria-label",
		"isLoading",
		"isDisabled",
		"style",
	]);

	return (
		<button
			{...rest}
			aria-label={local["aria-label"]}
			aria-busy={local.isLoading}
			disabled={local.isDisabled}
			aria-disabled={local.isDisabled}
			tabindex={local.isDisabled ? -1 : 0}
			data-loading={local.isLoading || undefined}
			class={styles[local.style]}
		>
			{local.children}
		</button>
	);
};
