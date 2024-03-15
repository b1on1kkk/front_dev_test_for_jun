import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchData } from "./API/fetchData";
import { PREFIX } from "../../helpers/API/prefix";

import { fetchingReducer } from "../../helpers/reducer/fetchingReducer";
import { openInputToChange } from "./utils/openInputToChange";

import { INITIAL_FETCHING_STATE, INPUTS } from "./constants/constants";

import type { TInputs } from "./types/interface";
import { FetchingActionKind } from "./types/enum";

import Input from "./components/Input/Input";
import { TDataset } from "../Data/types/interface";
import { changeData } from "./API/changeData";

////////////////////////////////////////////////////////////////////////////////////

export default function SingleEntity() {
  const { id } = useParams();

  const [fetchState, fetchDispatch] = useReducer(
    fetchingReducer,
    INITIAL_FETCHING_STATE
  );

  const { data, loading, error } = fetchState;

  const [inputValue, setInputValue] = useState<string>("");
  const [inputs, setInputs] = useState<TInputs[]>(INPUTS);

  const [changedPiece, setChangePiece] = useState<keyof TDataset | null>(null);

  useEffect(() => {
    fetchData(fetchDispatch, `/get-entity/entity/${id}`);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center flex-1">
        <div className="w-[50px] h-[50px] bg-gray-400 rounded-full animate-ping"></div>
      </div>
    );
  }

  if (error) return <div>Error occured :(</div>;

  return (
    <div className="flex-1 flex items-center justify-center flex-col gap-3">
      {data?.data &&
        inputs.map((input) => {
          return (
            <div key={input.id}>
              <div className="text-xs mb-2">
                <span>
                  Double click to change context and unfocus to save changes
                </span>
              </div>
              <div
                className="px-3 py-2 bg-gray-300 rounded-md w-full"
                onDoubleClick={() => {
                  openInputToChange(input.id, inputs, setInputs);
                  setInputValue(data.data[0][input.to_change_field].toString());
                  setChangePiece(input.to_change_field);
                }}
              >
                {input.status ? (
                  <Input
                    input={input}
                    inputValue={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onBlur={() => {
                      changeData(
                        `${PREFIX}/edit-entity/change_all/${id}`,
                        inputValue,
                        data,
                        changedPiece
                      )
                        .then(() => {
                          fetchData(fetchDispatch, `/get-entity/entity/${id}`);
                          setInputs(INPUTS);
                          setInputValue("");
                        })
                        .catch((e) =>
                          fetchDispatch({
                            type: FetchingActionKind.SET_ERROR,
                            payload: e
                          })
                        );
                    }}
                  />
                ) : (
                  <span>{data.data[0][input.to_change_field].toString()}</span>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
}
