import React from "react";

export default function Highlight({ children, color }) {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: "4px",
        color: "#fff",
        paddingLeft: "0.4rem",
        paddingRight: "0.4rem",
      }}
    >
      {children}
    </span>
  );
}
