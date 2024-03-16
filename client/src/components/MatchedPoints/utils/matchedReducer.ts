import { MatchedKind } from "../types/enum/enum";

import type { MatchedAction, MatchedState } from "../types/interface/interface";

export function matchedReducer(state: MatchedState, action: MatchedAction) {
  const { type, payload } = action;
  switch (type) {
    case MatchedKind.X1:
      return {
        ...state,
        x1: payload
      };
    case MatchedKind.X2:
      return {
        ...state,
        x2: payload
      };
    case MatchedKind.Y1:
      return {
        ...state,
        y1: payload
      };
    case MatchedKind.Y2:
      return {
        ...state,
        y2: payload
      };
    default:
      return state;
  }
}
