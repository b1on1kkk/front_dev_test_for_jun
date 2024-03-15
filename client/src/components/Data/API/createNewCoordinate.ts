import axios from "axios";

import { PREFIX } from "../../../helpers/API/prefix";

import type { InputState } from "../types/interface";

export async function createNewCoordinate(newCoordinateState: InputState) {
  return await axios.post(`${PREFIX}/create-entity`, {
    name: newCoordinateState.name,
    x_coordinate: newCoordinateState.x_coordinate,
    y_coordinate: newCoordinateState.y_coordinate,
    label: newCoordinateState.label
  });
}
