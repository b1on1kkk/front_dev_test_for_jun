import axios, { AxiosError } from "axios";

import { PREFIX } from "../../../helpers/API/prefix";

import { FetchingActionKind } from "../types/enum";
import { FetchingAction } from "../types/type";

export async function fetchData(
  stateSetter: (value: FetchingAction) => void,
  query: string
) {
  stateSetter({ type: FetchingActionKind.SET_LOADING, payload: true });

  try {
    // just fake delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const response = await axios.get(`${PREFIX}${query}`);
    stateSetter({
      type: FetchingActionKind.SET_DATA,
      payload: response.data
    });
  } catch (e) {
    stateSetter({
      type: FetchingActionKind.SET_ERROR,
      payload: e as AxiosError
    });
  } finally {
    stateSetter({ type: FetchingActionKind.SET_LOADING, payload: false });
  }
}
