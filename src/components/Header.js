import React from "react";

export default function Header() {
  return (
    <section id="about">
      <div className="container flex px-10 py-20 md:flex-row flex-col items-center md:h-screen">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center lg:ml-16 xl:ml-24 ">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Olá, eu sou Gilmar Fernandes
            <br className="inline-block" />
            Desenvolvedor Web Full Stack
          </h1>
          <p className="mb-8 leading-relaxed">
            Sou apaixonado por tecnologia e pelo seu poder
            <br className="inline-block" />
            Desenvolvo sistemas Web, APIs, landing pages, SPAs, um pouco de UI/UX...
            <br className="inline-block" />
            Estudo Typescriot, Javascrit, React, Node, clean code, SOLID...
            <br className="inline-block" />
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-primary-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contato
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Trabalhos
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-3/6 md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.png"
          />
        </div>
      </div>
    </section>
  );
}