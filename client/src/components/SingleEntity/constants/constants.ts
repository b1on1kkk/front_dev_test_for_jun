import { ToChange } from "../types/enum";

import type { FetchingState, TInputs } from "../types/interface";

export const INPUTS: TInputs[] = [
  {
    id: 0,
    type: "text",
    placeholder: "Enter name",
    status: false,
    to_change_field: ToChange.NAME
  },
  {
    id: 1,
    type: "number",
    placeholder: "Enter x coordinate",
    status: false,
    to_change_field: ToChange.X_COORDINATE
  },
  {
    id: 2,
    type: "number",
    placeholder: "Enter y coordinate",
    status: false,
    to_change_field: ToChange.Y_COORDINATE
  },
  {
    id: 3,
    type: "text",
    placeholder: "Label",
    status: false,
    to_change_field: ToChange.LABEL
  }
];

export const INITIAL_FETCHING_STATE: FetchingState = {
  data: null,
  loading: false,
  error: null
};
