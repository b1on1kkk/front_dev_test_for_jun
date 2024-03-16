import { AxiosError } from "axios";

import { ToChange } from "./enum";
import { FetchingAction, InputType } from "./type";
import type { DatasetResponse } from "../../Data/types/interface";

export interface TInputs {
  id: number;
  type: InputType;
  placeholder: string;
  status: boolean;
  to_change_field: ToChange;
}

export interface FetchingState {
  data: DatasetResponse | null;
  loading: boolean;
  error: AxiosError | null;
}

export interface TEntityInf {
  id: string | undefined;
  input: TInputs;
  data: DatasetResponse;
  fetchDispatch: (c: FetchingAction) => void;
}

export interface TInput {
  input: TInputs;
  onBlur: () => void;
}
