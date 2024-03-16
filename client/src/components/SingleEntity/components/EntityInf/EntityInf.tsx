import { AxiosError } from "axios";

import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store/store";
import { inputsActions } from "../../../../store/slices/inputs.slice";

import Input from "../Input/Input";

import { changeData } from "../../API/changeData";

import { fetchData } from "../../../../helpers/API/fetchData";
import { PREFIX } from "../../../../helpers/API/prefix";

import { INPUTS } from "../../constants/constants";

import type { TEntityInf } from "../../types/interface";
import type { TDataset } from "../../../Data/types/interface";
import { FetchingActionKind } from "../../types/enum";

export default function EntityInf({
  id,
  input,
  data,
  fetchDispatch
}: TEntityInf) {
  const dispatch = useDispatch<AppDispatch>();
  const inputValue = useSelector(
    (state: RootState) => state.inputs.new_input_value
  );

  const [changedPiece, setChangePiece] = useState<keyof TDataset | null>(null);

  async function onBlurHandler() {
    try {
      await changeData(
        `${PREFIX}/edit-entity/change_all/${id}`,
        inputValue,
        data,
        changedPiece
      );

      fetchData(fetchDispatch, `/get-entity/entity/${id}`);

      dispatch(inputsActions.setInputs(INPUTS));
      dispatch(inputsActions.setNewInputValue(""));
    } catch (error) {
      fetchDispatch({
        type: FetchingActionKind.SET_ERROR,
        payload: error as AxiosError
      });
    }
  }

  return (
    <div>
      <div className="text-xs mb-2">
        <span>Double click to change context and unfocus to save changes</span>
      </div>
      <div
        className="px-3 py-2 bg-gray-300 rounded-md w-full"
        onDoubleClick={() => {
          dispatch(inputsActions.openInputsToChange(input.id));
          dispatch(
            inputsActions.setNewInputValue(
              data.data[0][input.to_change_field].toString()
            )
          );
          setChangePiece(input.to_change_field);
        }}
      >
        {input.status ? (
          <Input input={input} onBlur={onBlurHandler} />
        ) : (
          <span>{data.data[0][input.to_change_field].toString()}</span>
        )}
      </div>
    </div>
  );
}
