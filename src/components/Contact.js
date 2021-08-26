import React from "react";
import emailjs from 'emailjs-com';
import { ChatIcon } from "@heroicons/react/solid";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try{
      const templateParams = {
        from_name: name,
        to_name: email,
        message: message,
      }
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      alert('Mensagem enviada com sucesso!')
    }catch(error){
      console.log(error)
      alert('Erro ao tentar enviar a mensagem!')
    }
  }

  return (
    <section id="contact" className="text-center">
      <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
        Contato
      </h2>
      <p className="leading-relaxed mb-5">
        Gostou do meu trabalho? Entre em contato, vamos trocar ideias.

      </p>
      <div className="grid grid-col-1 md:grid-cols-2 px-5 py-10 mx-auto sm:flex-nowrap flex-wrap">
        <div className="text-center ">
          <h2 className="text-white sm:text-3xl text-2xl mb-1 font-medium title-font mt-8">
            Mídias Sociais
          </h2>
          <ul className="justify-center my-8 ">
              <li className="">
                <a href="https://www.linkedin.com/in/fernandes-gilmar/" target="_blank" rel="noopener noreferrer" className="flex gap-2 justify-center m-4">
                  <i className="fab fa-linkedin-in mt-1" />
                  <h2>
                    linkedin.com/in/fernandes-gilmar
                  </h2>
                </a>
              </li>
              <li>
                <a href="mailto:gilmar.fer0@live.com" target="_blank" rel="noopener noreferrer" className="flex gap-2 justify-center m-4">
                  <i className="far fa-envelope mt-1"/>
                  <h2>
                  gilmar.fer10@gmail.com
                  </h2>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/gilmar.fer/" target="_blank" rel="noopener noreferrer" className="flex gap-2 justify-center m-4">
                  <i className="fab fa-instagram mt-1"/>
                  <h2>
                  instagram.com/gilmar.fer
                  </h2>
                </a>
              </li>
              <li>
                <a href="https://github.com/gilmarFer" target="_blank" rel="noopener noreferrer" className="flex gap-2 justify-center m-4">
                  <i className="fab fa-github mt-1"/>
                  <h2>
                    github.com/gilmarFer
                  </h2>
                </a>
              </li>
          </ul>
          <h2 className="text-white sm:text-3xl text-2xl mb-1 font-medium title-font mt-8">
          </h2>
        </div>
        <form
          netlify="true"
          name="contact"
          onSubmit={handleSubmit}
          className="text-center flex flex-col w-full md:py-8 md:mt-0 mt-8 md:w-3/4 ">
          <h2 className="text-white sm:text-3xl text-2xl mb-1 font-medium title-font">
            Me mande uma mensagem
          </h2>
          <p className="leading-relaxed mb-5">
            <ChatIcon className="h-8 mx-auto" />
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}