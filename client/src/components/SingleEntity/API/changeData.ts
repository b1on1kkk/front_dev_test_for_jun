import axios from "axios";

import type { DatasetResponse, TDataset } from "../../Data/types/interface";

export async function changeData(
  link: string,
  inputValue: string,
  data: DatasetResponse | null,
  changedPiece: keyof TDataset | null
) {
  if (data && changedPiece && inputValue.length > 0) {
    if (changedPiece === "x_coordinate" || changedPiece === "y_coordinate") {
      return await axios.put(link, {
        ...data.data[0],
        [changedPiece]: +inputValue
      });
    }

    return await axios.put(link, {
      ...data.data[0],
      [changedPiece]: inputValue
    });
  }
}
