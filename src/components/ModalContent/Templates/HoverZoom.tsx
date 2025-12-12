import React, { useState } from "react";

export default function HoverZoom({
  src,
  height,
  width,
}: {
  src: string;
  height?: string | number;
  width?: string | number;
}) {
  const [isHovering, setIsHovering] = useState(false);
  const [offset, setOffset] = useState({ x: 50, y: 50 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setOffset({ x, y });
  };

  return (
    <div
      className="relative overflow-hidden rounded-lg"
      style={{
        width: width ?? "100%",
        height: height ?? "250px",
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMove}
    >
      <img
        src={src}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-200"
        style={{
          transform: isHovering
            ? `scale(2) translate(calc(50% - ${offset.x}%), calc(50% - ${offset.y}%))`
            : "scale(1) translate(0, 0)",
        }}
      />
    </div>
  );
}
