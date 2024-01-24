import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
type Props = {
    nome : string,
    children: React.ReactNode,
    className ?: string

}
function LinkItem({nome,children, className} : Props) {
    const defaultClass = "flex text-sm py-2 items-start justify-center gap-2  border-b-2  border-transparent hover:border-white rounded transition duration-700 active:bg-blue-800";
    const clasNameFinal = twMerge(defaultClass, className);
  return (
    <div className={clasNameFinal}>
      {children}
      <Link href={"#"} className="text-white hidden md:flex">
        {nome}
      </Link>
    </div>
  );
}

export default LinkItem;
