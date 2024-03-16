import type { TNewCoordinatesCard } from "../../types/interface";

export default function NewCoordinatesCard({
  input,
  value,
  onChange
}: TNewCoordinatesCard) {
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
