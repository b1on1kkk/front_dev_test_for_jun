import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../../../store/store";
import { inputsActions } from "../../../../store/slices/inputs.slice";

import type { TInput } from "../../types/interface";

export default function Input({ input, onBlur }: TInput) {
  const dispatch = useDispatch<AppDispatch>();
  const inputValue = useSelector(
    (state: RootState) => state.inputs.new_input_value
  );

  return (
    <input
      type={input.type}
      placeholder={input.placeholder}
      className="bg-inherit focus:outline-none w-full"
      onChange={(e) => dispatch(inputsActions.setNewInputValue(e.target.value))}
      value={inputValue}
      onBlur={onBlur}
    />
  );
}
