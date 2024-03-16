import { useRef, useEffect, useReducer } from "react";

import { fetchingReducer } from "../../helpers/reducer/fetchingReducer";
import { fetchData } from "../../helpers/API/fetchData";

import { INITIAL_FETCHING_STATE } from "../SingleEntity/constants/constants";

import { writeCanvasVisualisation } from "../../helpers/utils/writeCanvasVisualisation";

export default function CanvasComponent() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [fetchState, fetchDispatch] = useReducer(
    fetchingReducer,
    INITIAL_FETCHING_STATE
  );

  const { data, loading, error } = fetchState;

  useEffect(() => {
    fetchData(fetchDispatch, "/get-entity/all_entities");
  }, []);

  useEffect(() => {
    if (data) writeCanvasVisualisation(data, canvasRef);
  }, [data]);

  if (loading) {
    return (
      <div className="flex items-center justify-center flex-1">
        <div className="w-[50px] h-[50px] bg-gray-400 rounded-full animate-ping"></div>
      </div>
    );
  }

  if (error) return <div>Error occured :(</div>;

  return (
    <div className="flex-1 flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="block border-[1px] border-black"
        width={1200}
        height={800}
      />
    </div>
  );
}
