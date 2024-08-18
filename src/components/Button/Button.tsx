import cn from "classnames";

import "./Button.scss";
import { ReactNode } from "react";

type Color = "lightGray" | "blue" | "darkGray";

type Props = {
  color?: Color;
  text?: string;
  icon?: ReactNode;
  children?: ReactNode;
};

function Button({ color, text, children }: Props) {
  return (
    <button className={cn("button", { [`button--${color}`]: color })}>
      {text}
      {children}
    </button>
  );
}

export default Button;
