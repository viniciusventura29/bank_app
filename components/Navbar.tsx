import { render } from "react-dom";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  function logged() {
    let token = localStorage.getItem("token");
    if (token === null) {
      return (
        <nav
          className={`w-full px-20 py-4 flex items-center justify-between transition-all duration-[500ms] ease-in ${
            colorChange ? "navbar colorChange" : "navbar"
          } `}
        >
          <div className="text-xl font-semibold">
            <a
              className={`text-2xl transition-all duration-[300ms] font-bold text-white lg:text-3xl lg:mb-0 hover:text-gray-700 hover:text-blue-300 ${
                colorChange ? "text-gray-900" : "lg:text-gray-100 text-gray-800"
              }`}
              href="/"
            >
              Brand
            </a>
          </div>

          <div
            className={`gap-20 lg:flex lg:items-center overflow-hidden lg:overflow-visible lg:visible transition-all duration-[300ms] ${
              visible ? "h-52 mt-4" : "h-0"
            }`}
          >
            <div className="flex gap-10">
              <a
                href="/pravoce"
                className={`py-2 transition-all duration-[500ms] font-semibold text-[18px] text-sm capitalize lg:mt-0 lg:border-b-4 lg:border-transparent hover:text-blue-400 hover:border-l-4 lg:hover:border-l-0 lg:hover:border-b-4 lg:hover:border-blue-400 ${
                  colorChange
                    ? "text-gray-900"
                    : "lg:text-gray-100 text-gray-800"
                }`}
              >
                Pra você
              </a>
              <a
                href="#"
                className={`py-2 transition-all duration-[500ms] font-semibold text-[18px] text-sm capitalize lg:mt-0  lg:border-b-4 lg:border-transparent hover:text-blue-400 hover:border-l-4 lg:hover:border-l-0 lg:hover:border-b-4 lg:hover:border-blue-400 ${
                  colorChange
                    ? "text-gray-900"
                    : "lg:text-gray-100 text-gray-800"
                }`}
              >
                Para seu negócio
              </a>
              <a
                href="/sobre"
                className={`py-2 transition-all duration-[500ms] font-semibold text-[18px] text-sm capitalize lg:mt-0 lg:border-b-4 lg:border-transparent hover:text-blue-400 hover:border-l-4 lg:hover:border-l-0 lg:hover:border-b-4 lg:hover:border-blue-400 ${
                  colorChange
                    ? "text-gray-900"
                    : "lg:text-gray-100 text-gray-800"
                } `}
              >
                Sobre nós
              </a>
              <a
                href="/duvidas"
                className={`py-2 transition-all duration-[500ms] font-semibold text-[18px] text-sm capitalize lg:mt-0 lg:border-b-4 lg:border-transparent hover:text-blue-400 hover:border-l-4 lg:hover:border-l-0 lg:hover:border-b-4 lg:hover:border-blue-400 ${
                  colorChange
                    ? "text-gray-900"
                    : "lg:text-gray-100 text-gray-800"
                }`}
              >
                Dúvidas
              </a>
            </div>
            <div className="flex gap-4">
              <a
                href="/cadastro"
                className={`py-2 transition-all duration-[500ms] font-semibold text-[18px] text-sm capitalize lg:mt-0 lg:border-b-4 lg:border-transparent hover:text-blue-400 hover:border-l-4 lg:hover:border-l-0 lg:hover:border-b-4 lg:hover:border-blue-400 ${
                  colorChange
                    ? "text-gray-900"
                    : "lg:text-gray-100 text-gray-800"
                }`}
              >
                Cadastro
              </a>
              <a
                href="/login"
                className={`py-2 transition-all duration-[500ms] font-semibold text-[18px] text-sm capitalize lg:mt-0 lg:border-b-4 lg:border-transparent hover:text-blue-400 hover:border-l-4 lg:hover:border-l-0 lg:hover:border-b-4 lg:hover:border-blue-400 ${
                  colorChange
                    ? "text-gray-900"
                    : "lg:text-gray-100 text-gray-800"
                }`}
              >
                Login
              </a>
            </div>
          </div>
        </nav>
      );
    } else {
      return (
        <nav
          className={`w-full px-20 py-4 flex items-center justify-between transition-all duration-[500ms] ease-in ${
            colorChange ? "navbar colorChange" : "navbar"
          } `}
        >
          <div className="text-xl font-semibold">
            <a
              className={`text-2xl transition-all duration-[300ms] font-bold text-white lg:text-3xl lg:mb-0 hover:text-gray-700 hover:text-blue-300 ${
                colorChange ? "text-gray-900" : "lg:text-gray-100 text-gray-800"
              }`}
              href="/"
            >
              Brand
            </a>
          </div>

          <div
            className={`gap-20 lg:flex lg:items-center overflow-hidden lg:overflow-visible lg:visible transition-all duration-[300ms] ${
              visible ? "h-52 mt-4" : "h-0"
            }`}
          >
            <div className="flex gap-10">
              <a
                href="/pravoce"
                className={`py-2 transition-all duration-[500ms] font-semibold text-[18px] text-sm capitalize lg:mt-0 lg:border-b-4 lg:border-transparent hover:text-blue-400 hover:border-l-4 lg:hover:border-l-0 lg:hover:border-b-4 lg:hover:border-blue-400 ${
                  colorChange
                    ? "text-gray-900"
                    : "lg:text-gray-100 text-gray-800"
                }`}
              >
                Pra você
              </a>
              <a
                href="#"
                className={`py-2 transition-all duration-[500ms] font-semibold text-[18px] text-sm capitalize lg:mt-0  lg:border-b-4 lg:border-transparent hover:text-blue-400 hover:border-l-4 lg:hover:border-l-0 lg:hover:border-b-4 lg:hover:border-blue-400 ${
                  colorChange
                    ? "text-gray-900"
                    : "lg:text-gray-100 text-gray-800"
                }`}
              >
                Para seu negócio
              </a>
              <a
                href="/sobre"
                className={`py-2 transition-all duration-[500ms] font-semibold text-[18px] text-sm capitalize lg:mt-0 lg:border-b-4 lg:border-transparent hover:text-blue-400 hover:border-l-4 lg:hover:border-l-0 lg:hover:border-b-4 lg:hover:border-blue-400 ${
                  colorChange
                    ? "text-gray-900"
                    : "lg:text-gray-100 text-gray-800"
                } `}
              >
                Sobre nós
              </a>
              <a
                href="/duvidas"
                className={`py-2 transition-all duration-[500ms] font-semibold text-[18px] text-sm capitalize lg:mt-0 lg:border-b-4 lg:border-transparent hover:text-blue-400 hover:border-l-4 lg:hover:border-l-0 lg:hover:border-b-4 lg:hover:border-blue-400 ${
                  colorChange
                    ? "text-gray-900"
                    : "lg:text-gray-100 text-gray-800"
                }`}
              >
                Dúvidas
              </a>
            </div>
            <div className="flex gap-4">
              <a
                href="/meuperfil"
                className={`py-2 transition-all duration-[500ms] font-semibold text-[18px] text-sm capitalize lg:mt-0 lg:border-b-4 lg:border-transparent hover:text-blue-400 hover:border-l-4 lg:hover:border-l-0 lg:hover:border-b-4 lg:hover:border-blue-400 ${
                  colorChange
                    ? "text-gray-900"
                    : "lg:text-gray-100 text-gray-800"
                }`}
              >
                Meu Perfil
              </a>
              <a
                onClick={logout}
                href="/"
                className={`py-2 transition-all duration-[500ms] font-semibold text-[18px] text-sm capitalize lg:mt-0 lg:border-b-4 lg:border-transparent hover:text-blue-400 hover:border-l-4 lg:hover:border-l-0 lg:hover:border-b-4 lg:hover:border-blue-400 ${
                  colorChange
                    ? "text-gray-900"
                    : "lg:text-gray-100 text-gray-800"
                }`}
              >
                Sair
              </a>
            </div>
          </div>
        </nav>
      );
    }
  }

  function logout(){
    localStorage.removeItem('token')
  }

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 200) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return <header>{logged()}</header>;
}
