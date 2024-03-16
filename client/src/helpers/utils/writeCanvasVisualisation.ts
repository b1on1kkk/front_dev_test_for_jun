import { DatasetResponse } from "../../components/Data/types/interface";

export function writeCanvasVisualisation(
  data: DatasetResponse,
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>
) {
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
    ctx.fillText(data.name + data.id, x + 10, y + 5);
    data.label.split(",").forEach((label, index) => {
      ctx.fillText(label, x + 10, y + 20 + index * 15);
    });
  });
}
