import { MatchedKind } from "../enum/enum";

export interface MatchedAction {
  type: MatchedKind;
  payload: string;
}

export interface MatchedState {
  x1: string;
  x2: string;
  y1: string;
  y2: string;
}
