import React from "react";

export default function Imager({ children, src, align, width, height }) {
  return (
    <p align={align ? align : "center"}>
      <img src={src} width={width} height={height} />
    </p>
  );
}
