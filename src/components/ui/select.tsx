import { Select as KobalteSelect } from "@kobalte/core/select";
import { For, type Setter } from "solid-js";

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
						Y
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
										<span
											onPointerDown={(e) => e.stopPropagation()}
											class="select__selected-value"
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
				<KobalteSelect.Content class="select__content">
					<KobalteSelect.Listbox class="select__listbox" />
				</KobalteSelect.Content>
			</KobalteSelect.Portal>
		</KobalteSelect>
	);
}
