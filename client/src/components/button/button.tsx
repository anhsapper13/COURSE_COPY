import React, { ReactNode } from "react";
import { Button } from "antd";
import {
  ButtonColorType,
  ButtonShape,
  ButtonVariantType,
} from "antd/es/button";

type ButtonProps = {
  text?: string;
  icon?: ReactNode;
  color?: ButtonColorType;
  shape?: ButtonShape;
  variant?: ButtonVariantType;
  className?: string;
  onclick?: () => void;
  onHover?: () => void;
  onBlur?: () => void;
};
export const ButtonComponent: React.FC<ButtonProps> = ({
  text,
  icon,
  color = "default",
  shape,
  variant = "solid",
  className,
  onclick,
  onHover,
  onBlur
}) => {
  return (
    <Button
      icon={icon}
      color={color}
      shape={shape}
      onClick={onclick}
      variant={variant}
      iconPosition="end"
      className={`text-lg ${className}`}
      onMouseOver={onHover}
      onMouseOut={onBlur}
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;
