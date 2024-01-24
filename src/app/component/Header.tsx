import Image from "next/image";
import React from "react";
import logo from "/public/logo.png";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";

function Header() {
  return (
    <div className="flex justify-center ">
      <header className="flex px-4 justify-between mt-1 bg-blue-secondary h-header-height max-w-header-maxWidht w-auto md:w-full rounded-3xl drop-shadow-xl items-center  fixed">
        <div className="flex items-center">
          <div className="flex items-center ">
            <Image className="h-12 w-12 md:h-16 md:w-16 " src={logo} alt={"logo"} />
            <h1 className="font-bold text-font-logo text-sm md:text-lg">CINEWAVE</h1>
          </div>
          <nav className="flex gap-8 ml-16">
            <div className="flex text-sm py-1 items-start justify-center gap-2  border-b-2  border-transparent hover:border-white rounded transition duration-700">
              <AiFillHome color="white" size={16} />
              <Link href={"#"} className="text-white hidden md:flex">
                INICIO
              </Link>
            </div>
            <div className="flex text-sm py-1  items-center justify-center gap-2  border-b-2  border-transparent hover:border-white rounded transition duration-700">
              <FaSearch color="white" size={16} />
              <Link href={"#"} className="text-white hidden md:flex">
                PESQUISA
              </Link>
            </div>
            <div className="flex text-sm py-1  items-start justify-center gap-2  border-b-2  border-transparent hover:border-white rounded transition duration-700">
              <RiMovie2Fill color="white" size={18} />
              <Link href={"#"} className="text-white hidden md:flex">
                FILMES
              </Link>
            </div>
            <div className="flex text-sm py-1  items-start justify-center gap-2  border-b-2  border-transparent hover:border-white rounded transition duration-700">
              <BiSolidCameraMovie color="white" size={18} />
              <Link href={"#"} className="text-white hidden md:flex">
                SÉRIES
              </Link>
            </div>
            <div className="flex text-sm py-1  items-start justify-center gap-2  border-b-2  border-transparent hover:border-white rounded transition duration-700">
              <FaStar color="white" size={18} />
              <Link href={"#"} className="text-white hidden md:flex">
                FAVORITOS
              </Link>
            </div>
          </nav>
        </div>
        <FaUserCircle className="p-1" color="white" size={50}/>
      </header>
    </div>
  );
}

export default Header;
