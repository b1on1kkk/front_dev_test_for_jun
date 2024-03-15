import { X } from "lucide-react";

import type { TDataset } from "../../types/interface";

import { Link } from "react-router-dom";

export default function CoordinateCard({
  obj,
  onDelete
}: {
  obj: TDataset;
  onDelete: () => void;
}) {
  return (
    <div
      className="h-[300px] shadow-md border-[1px] rounded-md p-3"
      key={obj.id}
    >
      <div className="mb-5 flex items-center">
        <p className="flex-1">
          {obj.name}
          {obj.id}
        </p>

        <button
          className="p-2 bg-gray-300 rounded-md flex active:translate-y-0.5 transition-all"
          onClick={onDelete}
        >
          <X width={16} height={16} />
        </button>
      </div>
      <div className="mb-5">
        <p>Coordinates:</p>
        <p>x: {obj.x_coordinate}</p>
        <p>y: {obj.y_coordinate}</p>
      </div>
      <div>
        <p>Labels:</p>
        <p>{obj.label}</p>
      </div>

      <Link
        to={`:${obj.id}`}
        className="block p-3 text-center mt-7 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors"
      >
        Show
      </Link>
    </div>
  );
}
