import { TInputs } from "../types/interface";

export function openInputToChange(
  id: number,
  inputs: TInputs[],
  setInputs: (c: TInputs[]) => void
) {
  setInputs([
    ...inputs.map((input) => {
      if (input.id === id) return { ...input, status: true };
      return { ...input, status: false };
    })
  ]);
}
