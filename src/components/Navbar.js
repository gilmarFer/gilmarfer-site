import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 z-10 ">
      <div className="flex p-5 items-center lg:ml-16 xl:ml-24 lg:mr-16 xl:mr-24">
        <div className="md:mb-0">
          <a href="#about" >
            <img
              className="h-8 mx-1"
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
            Sobre
          </a>
        </nav>
      </div>
    </header>
  );
}