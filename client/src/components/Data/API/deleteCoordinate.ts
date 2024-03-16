import axios from "axios";

import { PREFIX } from "../../../helpers/API/prefix";

export async function deleteCoordinate(id: number) {
  const response = await axios.delete(`${PREFIX}/remove-entity/:${id}`);

  console.log(response);

  return response.data;
}
