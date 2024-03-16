import { useEffect, useReducer } from "react";

import CoordinateCard from "./components/CoordinateCard/CoordinateCard";
import NewCoodrinatesForm from "./components/NewCoodrinatesForm/NewCoodrinatesForm";

import { onDeleteCoordinateHandler } from "./API/onDeleteCoordinateHandler";

import { fetchingReducer } from "../../helpers/reducer/fetchingReducer";
import { fetchData } from "../../helpers/API/fetchData";

import { INITIAL_FETCHING_STATE } from "../SingleEntity/constants/constants";

//////////////////////////////////////////////////////////////////////////////////////////

export default function Data() {
  const [fetchState, fetchDispatch] = useReducer(
    fetchingReducer,
    INITIAL_FETCHING_STATE
  );

  const { data, loading, error } = fetchState;

  useEffect(() => {
    fetchData(fetchDispatch, "/get-entity/all_entities");
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
    <div className="grid grid-cols-5 gap-5 p-5">
      {data?.data && (
        <>
          <NewCoodrinatesForm fetchDispatch={fetchDispatch} />

          {data.data.map((obj) => (
            <CoordinateCard
              key={obj.id}
              obj={obj}
              onDelete={() => onDeleteCoordinateHandler(obj.id, fetchDispatch)}
            />
          ))}
        </>
      )}
    </div>
  );
}
