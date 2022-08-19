import { render } from "react-dom";
import React from "react";



export default function Navbar() {
  return (

    <header>
    <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto">
            <div className="lg:flex lg:items-center lg:justify-between">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-semibold text-gray-700">
                        <a className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a>
                    </div>

             
                    <div className="flex lg:hidden">
                        <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="-mx-4 lg:flex lg:items-center">
                    <a href="#" className="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Pra você</a>
                    <a href="#" className="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Para seu negócio</a>
                    <a href="#" className="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Sobre nós</a>
                    <a href="#" className="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Dúvidas</a>
                </div>
            </div>
        </div>
    </nav>

</header>


  );
}
