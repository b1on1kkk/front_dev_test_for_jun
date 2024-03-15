import { TInitial_inputs } from "../../types/interface";

export default function NewCoordinatesCard({
  input,
  value,
  onChange
}: {
  input: TInitial_inputs;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="px-3 py-2 bg-gray-300 flex gap-2 rounded-md">
      <label htmlFor={input.id}>{input.title}:</label>
      <input
        type={input.type}
        id={input.id}
        placeholder={input.placeholder}
        className="focus:outline-none flex-1 bg-inherit placeholder:text-sm"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
