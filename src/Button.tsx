import React from "react";
import "./button.css";

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  rounded?: boolean;
  outline?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  outline,
  style,
  className,
  ...rest
}) => {
  const typeFlags = [primary, secondary, success, warning, danger];
  const typeCount = typeFlags.filter((flag) => flag).length;

  if (typeCount > 1) {
    throw new Error(
      "Only one type flag (primary, secondary, success, warning, danger) can be specified."
    );
  }

  const blue = "rgb(59 130 246)";
  const gray = "rgb(17 24 39)";
  const green = "rgb(34 197 94)";
  const yellow = "rgb(250 204 21)";
  const red = "rgb(239 68 68)";

  const btnStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    paddingTop: "0.375rem",
    paddingBottom: "0.375rem",
    paddingLeft: "0.75rem",
    paddingRight: "0.75rem",
    color: "rgb(255 255 255)",
    margin: "0.25rem",
    borderStyle: "solid",
    borderRadius: 0,
  };

  let color;
  if (primary) {
    color = blue;
  } else if (secondary) {
    color = gray;
  } else if (success) {
    color = green;
  } else if (warning) {
    color = yellow;
  } else if (danger) {
    color = red;
  }

  btnStyle.borderColor = color;
  btnStyle.backgroundColor = color;
  if (outline) btnStyle.color = color;

  if (rounded) {
    btnStyle.borderRadius = 9999;
  }

  if (outline) {
    btnStyle.backgroundColor = "white";
  }

  return (
    <button {...rest} className={className} style={{ ...btnStyle, ...style }}>
      {children}
    </button>
  );
};
