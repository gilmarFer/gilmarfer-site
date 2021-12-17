import { KeyIcon } from "@heroicons/react/solid";
import React from "react";

export default function AboutMe() {
  return (
    <section
      id="abount-me"
      className="text-gray-400 bg-gray-900 body-font h-screen flex flex-wrap content-center"
    >
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <KeyIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Sobre mim
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Olá, me chamo Gilmar Fernandes, tenho 27 anos e sou de Belo
            Horizonte/MG
            <br />
            Após pular de galho em galho acredito ter encontrado minha paixão:{" "}
            <strong>Programar</strong>
            <br />
            Atualmente sou estudante na área de desenvolvimento mobile, mais
            especificamente Flutter.
            <br />
            Minha ideia é atuar no back-end com Node e no Mobile com Flutter.
            <br />
            Abaixo você pode conferir algumas das minhas Skills
          </p>
        </div>
      </div>
    </section>
  );
}
