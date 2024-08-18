import { ReactNode } from "react";
import "./Container.scss";

type Props = {
  children: ReactNode;
};

function Container({ children }: Props) {
  return <div className="container">{children}</div>;
}

export default Container;
