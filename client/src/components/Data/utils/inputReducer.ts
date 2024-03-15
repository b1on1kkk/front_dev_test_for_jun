import { InputActionKind } from "../types/enum";

import type { InputAction, InputState } from "../types/interface";

export function inputReducer(state: InputState, action: InputAction) {
  const { type, payload } = action;
  switch (type) {
    case InputActionKind.NAME:
      return {
        ...state,
        name: payload
      };
    case InputActionKind.LABLE:
      return {
        ...state,
        label: payload
      };
    case InputActionKind.X_COORDINATE:
      return {
        ...state,
        x_coordinate: +payload
      };
    case InputActionKind.Y_COORDINATE:
      return {
        ...state,
        y_coordinate: +payload
      };
    default:
      return state;
  }
}
