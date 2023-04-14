import {
  NumberInput,
  NumberInputControl,
  NumberInputDecrementTrigger,
  NumberInputField,
  NumberInputIncrementTrigger,
  NumberInputLabel,
  NumberInputScrubber,
} from "@ark-ui/react";

export const Input = () => {
  const value = 5;
  return (
    <NumberInput value="5">
      <NumberInputScrubber
        style={{ width: 25, height: 25, background: "red" }}
      />
      <NumberInputLabel>Label</NumberInputLabel>
      <NumberInputField />
      <NumberInputControl>
        <NumberInputDecrementTrigger>
          <button>-</button>
        </NumberInputDecrementTrigger>
        <NumberInputIncrementTrigger>
          <button>+</button>
        </NumberInputIncrementTrigger>
      </NumberInputControl>
    </NumberInput>
  );
};
