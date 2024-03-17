import { AxiosError } from "axios";

import { createNewCoordinate } from "./createNewCoordinate";
import { fetchData } from "../../../helpers/API/fetchData";

import type { InputState } from "../types/interface";
import { FetchingAction } from "../../SingleEntity/types/type";
import { FetchingActionKind } from "../../SingleEntity/types/enum";

export async function onSubmitNewCoordinates(
  newCoordinateState: InputState,
  fetchDispatch: (c: FetchingAction) => void
) {
  if (!Object.values(newCoordinateState).includes("")) {
    try {
      await createNewCoordinate(newCoordinateState);

      fetchData(fetchDispatch, "/get-entity/all_entities");
    } catch (error) {
      fetchDispatch({
        type: FetchingActionKind.SET_ERROR,
        payload: error as AxiosError
      });
    }
  }
}
