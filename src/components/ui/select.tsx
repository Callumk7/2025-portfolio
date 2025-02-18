import { Select as KobalteSelect } from "@kobalte/core/select";
import { For, type Setter } from "solid-js";
import styles from "./select.module.scss";

interface SelectProps {
	options: string[];
	selected: string[];
	setSelected: Setter<string[]>;
	placeholder: string;
}

export function Select(props: SelectProps) {
	return (
		<KobalteSelect<string>
			multiple
			value={props.selected}
			onChange={props.setSelected}
			options={props.options}
			placeholder={props.placeholder}
			itemComponent={(p) => (
				<KobalteSelect.Item item={p.item} class={styles.item}>
					<KobalteSelect.ItemLabel>{p.item.rawValue}</KobalteSelect.ItemLabel>
					<KobalteSelect.ItemIndicator class={styles["item-indicator"]}>
						Y
					</KobalteSelect.ItemIndicator>
				</KobalteSelect.Item>
			)}
		>
			<KobalteSelect.Trigger class={styles.trigger} as="div">
				<KobalteSelect.Value<string> class={styles.value}>
					{(state) => (
						<>
							<div class={styles["selected-value-container"]}>
								<For each={state.selectedOptions()}>
									{(option) => (
										<span
											onPointerDown={(e) => e.stopPropagation()}
											class={styles["selected-value"]}
										>
											{option}
											<button type="button" onClick={() => state.remove(option)}>
												x
											</button>
										</span>
									)}
								</For>
							</div>
						</>
					)}
				</KobalteSelect.Value>
			</KobalteSelect.Trigger>
			<KobalteSelect.Portal>
				<KobalteSelect.Content class={styles.content}>
					<KobalteSelect.Listbox class={styles.listbox} />
				</KobalteSelect.Content>
			</KobalteSelect.Portal>
		</KobalteSelect>
	);
}
