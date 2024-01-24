import Image from "next/image";
import React from "react";
import logo from "/public/logo.png";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import LinkItem from "./LinkItem";

function Header() {
  return (
    <>
      <header className="flex px-4 justify-between bg-blue-secondary  h-20 w-full rounded-b-2xl drop-shadow-xl items-center  fixed ">
        <div className="flex items-center">
          <div className="flex items-center ">
            <Image
              className="h-12 w-12 md:h-16 md:w-16 "
              src={logo}
              alt={"logo"}
            />
            <h1 className="font-bold text-font-logo text-xs md:text-lg">
              CINEWAVE
            </h1>
          </div>
          <nav className="flex gap-6 md:gap-8 ml-6 md:ml-10">
            <LinkItem nome={"INICIO"}>
              <AiFillHome color="white" size={16} />
            </LinkItem>

            <LinkItem nome={"PESQUISA"}>
              <FaSearch color="white" size={16} />
            </LinkItem>

            <LinkItem nome={"FILMES"} className="hidden md:flex">
              <RiMovie2Fill color="white" size={18} />
            </LinkItem>

            <LinkItem nome={"SÉRIES"} className="hidden md:flex">
              <BiSolidCameraMovie color="white" size={18} />
            </LinkItem>

            <LinkItem nome={"FAVORITOS"} className="hidden md:flex">
              <FaStar color="white" size={18} />
            </LinkItem>
          </nav>
        </div>
        <FaUserCircle className="p-1 hidden md:flex" color="white" size={50} />
        <button className="p-1 md:hidden">
          <IoMenu color="white" size={30} />
        </button>
      </header>
    </>
  );
}

export default Header;
