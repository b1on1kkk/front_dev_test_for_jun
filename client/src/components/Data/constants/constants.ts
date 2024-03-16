import { InputActionKind } from "../types/enum";

import type { TInitial_inputs } from "../types/interface";

export const INITIAL_INPUTS: TInitial_inputs[] = [
  {
    idx: 0,
    title: "Title",
    type: "text",
    id: InputActionKind.NAME,
    placeholder: "Enter title"
  },
  {
    idx: 1,
    title: "X",
    type: "number",
    id: InputActionKind.X_COORDINATE,
    placeholder: "Enter X coordinate"
  },
  {
    idx: 2,
    title: "Y",
    type: "number",
    id: InputActionKind.Y_COORDINATE,
    placeholder: "Enter Y coordinate"
  },
  {
    idx: 3,
    title: "Label",
    type: "text",
    id: InputActionKind.LABLE,
    placeholder: "Enter labels separated by comma"
  }
];

export const INITIALI_INPUT_STATE = {
  name: "",
  x_coordinate: 0,
  y_coordinate: 0,
  label: ""
};
