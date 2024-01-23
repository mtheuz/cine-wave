import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
interface containerProps {
  children: ReactNode;
  className?: string;
}
function Container({ children, className }: containerProps) {
  const defaultClass = "w-full px-3 mx-auto max-w-grid";
  const clasNameFinal = twMerge(defaultClass, className);
  return <div className={clasNameFinal}>{children}</div>;
}

export default Container;