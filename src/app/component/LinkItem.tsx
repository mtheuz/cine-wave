import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
type Props = {
    nome : string,
    children: React.ReactNode,
    className ?: string,
    mobile ?: boolean,
    rota?:string

}
function LinkItem({nome,children, className, mobile,rota = '/'} : Props) {
    const defaultClass = "flex text-sm p-2 items-start justify-center gap-1  border-b-2  border-transparent hover:border-white rounded transition duration-700 active:bg-blue-800";
    const clasNameFinal = twMerge(defaultClass, className);
    let MobileMenu = "text-white flex md:hidden"
    let DesktopMenu = "text-white hidden md:flex"
    const responsive = mobile ? MobileMenu : DesktopMenu
  return (
    <Link href={rota} className={clasNameFinal}>
      {children}
      <div  className={responsive}>
        {nome}
      </div>
    </Link>
  );
}

export default LinkItem;
