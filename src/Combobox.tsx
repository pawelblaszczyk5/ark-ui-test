import {
  Combobox as CCombobox,
  ComboboxContent,
  ComboboxControl,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptionProps,
  ComboboxPositioner,
  ComboboxProps,
  ComboboxTrigger,
  Portal,
} from "@ark-ui/react";
import { useState } from "react";

const comboboxData: Pick<
  ComboboxOptionProps,
  "label" | "value" | "disabled"
>[] = [
  { label: "ReactJS", value: "react" },
  { label: "SolidJS", value: "solid" },
  { label: "VueJS", value: "vue", disabled: true },
  { label: "AngularJS", value: "angular" },
];

export const Combobox = () => {
  const [options, setOptions] = useState(comboboxData);

  const handleInputChange: ComboboxProps["onInputChange"] = ({ value }) => {
    const filtered = comboboxData.filter((item) =>
      item.label.toLowerCase().includes(value.toLowerCase())
    );
    setOptions(filtered.length > 0 ? filtered : comboboxData);
  };
  return (
    <CCombobox
      name="test"
      allowCustomValue={false}
      onInputChange={handleInputChange}
    >
      {({ isInputValueEmpty, isOpen }) => (
        <>
          <ComboboxLabel>JS Frameworks</ComboboxLabel>
          <ComboboxControl>
            <ComboboxInput />
            <ComboboxTrigger>
              <button>▼</button>
            </ComboboxTrigger>
          </ComboboxControl>
          {isInputValueEmpty && !isOpen && (
            <div>Give me you favorite framework!</div>
          )}
          <Portal>
            <ComboboxPositioner>
              <ComboboxContent>
                {options.map((item, index) => (
                  <ComboboxOption
                    key={`${item.value}:${index}`}
                    label={item.label}
                    value={item.value}
                    disabled={item?.disabled}
                  >
                    {item.label}
                  </ComboboxOption>
                ))}
              </ComboboxContent>
            </ComboboxPositioner>
          </Portal>
        </>
      )}
    </CCombobox>
  );
};
