import React, { useEffect, useRef, useState } from "react";

export default function CanvasDrawing() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;

    canvas.width = 800 * 3;
    canvas.height = 500 * 3;

    canvas.style.width = "800px";
    canvas.style.height = "500px";

    const context = canvas.getContext("2d");
    context.strokeStyle = "black";
    context.lineWidth = 5;
    context.lineCap = "round";
    context.scale(3, 3);
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    contextRef.current = context;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX: x, offsetY: y } = nativeEvent;
    const { current: ctx } = contextRef;
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX: x, offsetY: y } = nativeEvent;
    const { current: ctx } = contextRef;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const finishDrawing = () => {
    const { current: ctx } = contextRef;

    ctx.closePath();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = contextRef.current;

    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <>
      <canvas ref={canvasRef} onMouseDown={startDrawing} onMouseUp={finishDrawing} onMouseMove={draw}></canvas>
      <button onClick={clearCanvas}>Clear Canvas</button>
    </>
  );
}
