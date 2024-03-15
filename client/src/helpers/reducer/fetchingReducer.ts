import { FetchingActionKind } from "../../components/SingleEntity/types/enum";
import { FetchingState } from "../../components/SingleEntity/types/interface";
import { FetchingAction } from "../../components/SingleEntity/types/type";

export function fetchingReducer(state: FetchingState, action: FetchingAction) {
  switch (action.type) {
    case FetchingActionKind.SET_DATA:
      return {
        ...state,
        data: action.payload
      };
    case FetchingActionKind.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case FetchingActionKind.SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
