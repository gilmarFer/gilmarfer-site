import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 z-10 ">
      <div className="flex p-5 items-center lg:ml-16 xl:ml-24 lg:mr-16 xl:mr-24">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="border-red-600">
            <img
              className="object-center h-8 mx-1"
              alt="hero"
              src="./logo.svg"
            />
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Projetos
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#abount-me" className="mr-5 hover:text-white">
            Sobre me
          </a>
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}