import { useEffect, useReducer, useState } from "react";

import CoordinateCard from "./components/CoordinateCard/CoordinateCard";
import NewCoodrinatesForm from "./components/NewCoodrinatesForm/NewCoodrinatesForm";

import { deleteCoordinate } from "./API/deleteCoordinate";
import { fetchData } from "../SingleEntity/API/fetchData";

import { fetchingReducer } from "../../helpers/reducer/fetchingReducer";
import { INITIAL_FETCHING_STATE } from "../SingleEntity/constants/constants";

import { FetchingActionKind } from "../SingleEntity/types/enum";
import { createNewCoordinate } from "./API/createNewCoordinate";
import { inputReducer } from "./utils/inputReducer";
import { INITIALI_INPUT_STATE } from "./constants/constants";

//////////////////////////////////////////////////////////////////////////////////////////

export default function Data() {
  const [newCoordinates, setNewCoordinates] = useState<boolean>(false);

  const [fetchState, fetchDispatch] = useReducer(
    fetchingReducer,
    INITIAL_FETCHING_STATE
  );
  const [newCoordinateState, newCoordinateDispatch] = useReducer(
    inputReducer,
    INITIALI_INPUT_STATE
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
    <div className="grid grid-cols-4 gap-5 p-5">
      <NewCoodrinatesForm
        newCoordinates={newCoordinates}
        setNewCoordinates={setNewCoordinates}
        newCoordinateState={newCoordinateState}
        newCoordinateDispatch={newCoordinateDispatch}
        submitHander={(e) => {
          e.preventDefault();

          createNewCoordinate(newCoordinateState)
            .then(() => {
              fetchData(fetchDispatch, "/get-entity/all_entities");
              setNewCoordinates(false);
            })
            .catch((e) =>
              fetchDispatch({
                type: FetchingActionKind.SET_ERROR,
                payload: e
              })
            );
        }}
      />

      {data?.data &&
        data.data.map((obj) => (
          <CoordinateCard
            key={obj.id}
            obj={obj}
            onDelete={() => {
              deleteCoordinate(obj.id)
                .then(() => {
                  fetchData(fetchDispatch, "/get-entity/all_entities");
                })
                .catch((e) =>
                  fetchDispatch({
                    type: FetchingActionKind.SET_ERROR,
                    payload: e
                  })
                );
            }}
          />
        ))}
    </div>
  );
}
