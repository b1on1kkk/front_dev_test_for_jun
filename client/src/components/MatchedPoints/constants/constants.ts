import { MatchedKind } from "../types/enum/enum";

export const initialState = {
  x1: "",
  x2: "",
  y1: "",
  y2: ""
};

export const MATCHED_INPUTS = [
  { idx: 0, id: MatchedKind.X1, placeholder: "Enter x1 value:" },
  { idx: 1, id: MatchedKind.X2, placeholder: "Enter x2 value:" },
  { idx: 2, id: MatchedKind.Y1, placeholder: "Enter y1 value:" },
  { idx: 3, id: MatchedKind.Y2, placeholder: "Enter y2 value:" }
];
