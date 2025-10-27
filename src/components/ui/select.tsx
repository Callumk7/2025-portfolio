import { Select as KobalteSelect } from "@kobalte/core/select";
import { For, type Setter } from "solid-js";
import { CheckIcon } from "../icons/solid/check";

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
				<KobalteSelect.Item item={p.item} class="select__item">
					<KobalteSelect.ItemLabel>{p.item.rawValue}</KobalteSelect.ItemLabel>
					<KobalteSelect.ItemIndicator class="select__item-indicator">
						<CheckIcon />
					</KobalteSelect.ItemIndicator>
				</KobalteSelect.Item>
			)}
		>
			<KobalteSelect.Trigger class="select__trigger" as="div">
				<KobalteSelect.Value<string> class="select__value">
					{(state) => (
						<>
							<div class="select__selected-value-container">
								<For each={state.selectedOptions()}>
									{(option) => (
										<button
											type="button"
											onPointerDown={(e) => e.stopPropagation()}
											onClick={(e) => {
												e.stopPropagation();
												state.remove(option);
											}}
											class="select__selected-value"
										>
											{option}
										</button>
									)}
								</For>
							</div>
						</>
					)}
				</KobalteSelect.Value>
			</KobalteSelect.Trigger>
			<KobalteSelect.Portal>
				<KobalteSelect.Content class="select__content">
					<KobalteSelect.Listbox class="select__listbox" />
				</KobalteSelect.Content>
			</KobalteSelect.Portal>
		</KobalteSelect>
	);
}
