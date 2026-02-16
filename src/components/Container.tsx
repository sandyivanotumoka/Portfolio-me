import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

function Container({ children }: ContainerProps) {
  return <div className="max-w-6xl mx-auto px-6">{children}</div>;
}

export default Container;
