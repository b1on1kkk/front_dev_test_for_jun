import { FetchingAction } from "../../SingleEntity/types/type";
import { InputActionKind } from "./enum";

export interface TDataset {
  id: number;
  name: string;
  x_coordinate: number;
  y_coordinate: number;
  label: string;
}

export interface DatasetResponse {
  message: string;
  statusCode: number;
  data: TDataset[];
}

export interface InputState {
  name: string;
  x_coordinate: number;
  y_coordinate: number;
  label: string;
}

export interface InputAction {
  type: InputActionKind;
  payload: string;
}

export interface TInitial_inputs {
  idx: number;
  title: string;
  type: string;
  id: InputActionKind;
  placeholder: string;
}

export interface TNewCoodrinatesForm {
  fetchDispatch: (c: FetchingAction) => void;
}

export interface TCoordinateCard {
  obj: TDataset;
  onDelete: () => void;
}

export interface TNewCoordinatesCard {
  input: TInitial_inputs;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
