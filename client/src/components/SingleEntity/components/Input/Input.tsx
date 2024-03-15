import { TInputs } from "../../types/interface";

interface TInput {
  input: TInputs;
  inputValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}

export default function Input({ input, inputValue, onChange, onBlur }: TInput) {
  return (
    <input
      type={input.type}
      placeholder={input.placeholder}
      className="bg-inherit focus:outline-none w-full"
      onChange={onChange}
      value={inputValue}
      onBlur={onBlur}
    />
  );
}
