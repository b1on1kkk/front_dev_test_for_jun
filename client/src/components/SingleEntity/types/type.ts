import { AxiosError } from "axios";

import { FetchingActionKind } from "./enum";

import type { DatasetResponse } from "../../Data/types/interface";

export type InputType = "text" | "number";

export type FetchingAction =
  | { type: FetchingActionKind.SET_DATA; payload: DatasetResponse | null }
  | { type: FetchingActionKind.SET_LOADING; payload: boolean }
  | { type: FetchingActionKind.SET_ERROR; payload: AxiosError | null };
