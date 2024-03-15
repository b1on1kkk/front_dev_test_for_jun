import { AxiosError } from "axios";

import { ToChange } from "./enum";
import { InputType } from "./type";
import { DatasetResponse } from "../../Data/types/interface";

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
