import { useRef, useEffect, useReducer } from "react";
import { fetchingReducer } from "../../helpers/reducer/fetchingReducer";
import { INITIAL_FETCHING_STATE } from "../SingleEntity/constants/constants";
import { fetchData } from "../SingleEntity/API/fetchData";

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
    if (data) {
      const canvas = canvasRef.current;

      if (!canvas) return;

      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      data.data.forEach((data) => {
        const x = (data.x_coordinate + 10) * 20;
        const y = (20 - data.y_coordinate) * 20;

        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = "blue";
        ctx.fill();

        ctx.font = "12px Arial";
        ctx.fillStyle = "black";
        ctx.fillText(data.name, x + 10, y + 5);
        data.label.split(",").forEach((label, index) => {
          ctx.fillText(label, x + 10, y + 20 + index * 15);
        });
      });
    }
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
