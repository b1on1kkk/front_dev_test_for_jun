import { useEffect, useReducer, useRef } from "react";

import { MATCHED_INPUTS, initialState } from "./constants/constants";
import { INITIAL_FETCHING_STATE } from "../SingleEntity/constants/constants";

import { matchedReducer } from "./utils/matchedReducer";

import { fetchData } from "../../helpers/API/fetchData";
import { fetchingReducer } from "../../helpers/reducer/fetchingReducer";
import { writeCanvasVisualisation } from "../../helpers/utils/writeCanvasVisualisation";

import { MatchedKind } from "./types/enum/enum";

////////////////////////////////////////////////////////////////////////////////////////////////

export default function MatchedPoints() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [state, dispatch] = useReducer(matchedReducer, initialState);

  const [fetchState, fetchDispatch] = useReducer(
    fetchingReducer,
    INITIAL_FETCHING_STATE
  );

  const { data, loading, error } = fetchState;

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
    <div className="flex flex-col items-center justify-center">
      <div className="p-5 flex">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetchData(
              fetchDispatch,
              `/get-entity/entity_filtered?x1=${state.x1}&x2=${state.x2}&y1=${state.y1}&y2=${state.y2}`
            );
          }}
          className="p-2 border-2 rounded-md"
        >
          {MATCHED_INPUTS.map((input) => {
            return (
              <div
                className="flex gap-3 mb-2 p-2 bg-gray-300 rounded-md"
                key={input.idx}
              >
                <label htmlFor={input.id}>{input.id}:</label>
                <input
                  type="number"
                  placeholder={input.placeholder}
                  id={input.id}
                  className="focus:outline-none bg-inherit"
                  value={state[input.id]}
                  onChange={(e) => {
                    dispatch({
                      type: input.id as MatchedKind,
                      payload: e.target.value
                    });
                  }}
                />
              </div>
            );
          })}
          <div>
            <button
              type="submit"
              className="px-3 py-2 bg-green-400 rounded-md w-full mt-4"
            >
              Find
            </button>
          </div>
        </form>
      </div>

      <div>
        {data?.data && data.data.length > 0 ? (
          <div className="flex-1 flex items-center justify-center mb-5">
            <canvas
              ref={canvasRef}
              className="block border-[1px] border-black"
              width={1200}
              height={800}
            />
          </div>
        ) : (
          <span>Enter coordinates</span>
        )}
      </div>
    </div>
  );
}
