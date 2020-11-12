import React, { memo } from "react";

import { Button as BaseButton } from "antd";
import { ButtonProps as BaseButtonProps } from "antd/lib/button";

import "./Button.scss";

interface ButtonProps extends BaseButtonProps {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  children?: React.ReactNode;
}

const Button = ({ className, onClick, children, ...props }: ButtonProps) => (
  <BaseButton {...props} onClick={onClick} className={`button ${className}`}>
    {children}
  </BaseButton>
);

export default memo(Button);
