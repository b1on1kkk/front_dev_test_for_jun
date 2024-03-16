import { AxiosError } from "axios";

import { deleteCoordinate } from "./deleteCoordinate";
import { fetchData } from "../../../helpers/API/fetchData";

import { FetchingActionKind } from "../../SingleEntity/types/enum";
import { FetchingAction } from "../../SingleEntity/types/type";

export async function onDeleteCoordinateHandler(
  id: number,
  fetchDispatch: (c: FetchingAction) => void
) {
  try {
    await deleteCoordinate(id);
    fetchData(fetchDispatch, "/get-entity/all_entities");
  } catch (error) {
    fetchDispatch({
      type: FetchingActionKind.SET_ERROR,
      payload: error as AxiosError
    });
  }
}
