// FuzzyImage.jsx
import { useEffect, useRef } from "react";

const FuzzyImage = ({ src, width = 300, height = 300, intensity = 0.25 }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let img = new Image();
    img.src = src;
    img.crossOrigin = "anonymous"; // in case the image is external

    let animationId;

    img.onload = () => {
      canvas.width = width;
      canvas.height = height;

      const draw = () => {
        ctx.clearRect(0, 0, width, height);
        for (let y = 0; y < height; y++) {
          const dx = Math.floor((Math.random() - 0.5) * intensity * 20);
          ctx.drawImage(img, 0, y, width, 1, dx, y, width, 1);
        }
        animationId = requestAnimationFrame(draw);
      };

      draw();
    };

    return () => cancelAnimationFrame(animationId);
  }, [src, width, height, intensity]);

  return <canvas ref={canvasRef} style={{ borderRadius: "12px" }} />;
};

export default FuzzyImage;
