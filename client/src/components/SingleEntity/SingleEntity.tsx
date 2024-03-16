import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { inputsActions } from "../../store/slices/inputs.slice";

import EntityInf from "./components/EntityInf/EntityInf";

import { fetchData } from "../../helpers/API/fetchData";
import { fetchingReducer } from "../../helpers/reducer/fetchingReducer";

import { INITIAL_FETCHING_STATE, INPUTS } from "./constants/constants";

////////////////////////////////////////////////////////////////////////////////////

export default function SingleEntity() {
  const { id } = useParams();

  // redux
  const dispatch = useDispatch<AppDispatch>();
  const inputs = useSelector((state: RootState) => state.inputs.inputs);

  const [fetchState, fetchDispatch] = useReducer(
    fetchingReducer,
    INITIAL_FETCHING_STATE
  );

  const { data, loading, error } = fetchState;

  useEffect(() => {
    fetchData(fetchDispatch, `/get-entity/entity/${id}`);
    dispatch(inputsActions.setInputs(INPUTS));
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
        inputs &&
        inputs.map((input) => {
          return (
            <EntityInf
              key={input.id}
              id={id}
              input={input}
              data={data}
              fetchDispatch={fetchDispatch}
            />
          );
        })}
    </div>
  );
}
