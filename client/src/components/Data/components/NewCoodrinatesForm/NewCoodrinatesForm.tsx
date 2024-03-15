import { CirclePlus } from "lucide-react";
import NewCoordinatesCard from "../NewCoordinatesCard/NewCoordinatesCard";

import { INITIAL_INPUTS } from "../../constants/constants";

import { InputActionKind } from "../../types/enum";
import type { TNewCoodrinatesForm } from "../../types/interface";

//////////////////////////////////////////////////////////////////////////////////

export default function NewCoodrinatesForm({
  newCoordinates,
  setNewCoordinates,
  submitHander,
  newCoordinateState,
  newCoordinateDispatch
}: TNewCoodrinatesForm) {
  return (
    <>
      {newCoordinates ? (
        <div className="h-[300px] shadow-md border-[1px] rounded-md p-3">
          <form onSubmit={submitHander} className="flex flex-col gap-3">
            {INITIAL_INPUTS.map((input) => {
              return (
                <NewCoordinatesCard
                  key={input.idx}
                  input={input}
                  value={newCoordinateState[input.id]}
                  onChange={(e) => {
                    newCoordinateDispatch({
                      type: input.id as InputActionKind,
                      payload: e.target.value
                    });
                  }}
                />
              );
            })}

            <div className="grid grid-cols-2 gap-3 mt-3">
              <button
                type="submit"
                className="py-2 rounded-md bg-green-400 hover:bg-green-500 hover:text-white transition-colors"
              >
                Submit
              </button>
              <button
                className="py-2 bg-red-400 rounded-md hover:bg-red-500 hover:text-white transition-colors"
                onClick={() => setNewCoordinates(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          className="h-[300px] shadow-md border-[1px] rounded-md p-3 bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition-colors"
          onClick={() => setNewCoordinates(true)}
        >
          <CirclePlus color="white" width={70} height={70} />
        </button>
      )}
    </>
  );
}
