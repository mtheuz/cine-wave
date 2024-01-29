"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "/public/logo.png";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import LinkItem from "./LinkItem";

function Header() {
  const [isVisible, setVisible] = useState(false);
  const isActiveclick = (isVisible: boolean) => {
    if (isVisible) {
      setVisible(false);
      return;
    }
    setVisible(true);
  };
  return (
    <>
      <header className="fixed w-full z-20">
        <nav className="flex px-4 justify-between bg-blue-secondary  h-20  rounded-b-2xl drop-shadow-xl items-center ">
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
            <div className="flex gap-5 md:gap-8 ml-6 md:ml-10">
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
            </div>
          </div>
          <FaUserCircle
            className="p-1 hidden md:flex"
            color="white"
            size={50}
          />
          <button
            className="p-1 md:hidden border-b-2 border-t-2 border-transparent hover:border-white/70 rounded transition duration-700"
            onClick={() => isActiveclick(isVisible)}
          >
            {isVisible ? (
              <IoClose color="white" size={30} />
            ) : (
              <IoMenu color="white" size={30} />
            )}
          </button>
        </nav>
        {isVisible ? (
          <nav className="-mt-4">
            <nav className="w-full bg-font-logo">
              <LinkItem
                nome={"FILMES"}
                className="flex md:hidden hover:bg-blue-primary pt-6"
                mobile={true}
              >
                <RiMovie2Fill color="white" size={18} />
              </LinkItem>
              <LinkItem
                nome={"SÉRIES"}
                className="flex md:hidden hover:bg-blue-primary"
                mobile={true}
              >
                <BiSolidCameraMovie color="white" size={18} />
              </LinkItem>
              <LinkItem
                nome={"FAVORITOS"}
                className="flex md:hidden hover:bg-blue-primary"
                mobile={true}
              >
                <FaStar color="white" size={18} />
              </LinkItem>
            </nav>
          </nav>
        ) : (
          true
        )}
      </header>
    </>
  );
}

export default Header;
