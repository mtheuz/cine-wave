import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
type Props = {
  children: ReactNode;
  className?: string;
}
function Container({ children, className }: Props) {
  const defaultClass = "w-full px-3 mx-auto max-w-grid";
  const clasNameFinal = twMerge(defaultClass, className);
  return <div className={clasNameFinal}>{children}</div>;
}

export default Container;