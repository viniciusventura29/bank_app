import { render } from "react-dom";
import React, { useState } from "react";

export default function Navbar() {
    const [visible, setVisible] = useState(false);

  return (

    <header>
    <nav className="bg-white shadow dark:bg-gray-800">
        <div className="px-2 lg:px-6 py-4 mx-0 lg:mx-auto">
            <div className="lg:flex lg:items-center lg:justify-between">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-semibold text-gray-700 mb-4">
                        <a className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl  lg:mb-0 hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a>
                    </div>

             
                    <div className="flex visible lg:hidden" onClick={() => setVisible(!visible)}>
                        <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className={`w-full lg:h-16 lg:flex lg:items-center justify-end overflow-hidden lg:overflow-visible lg:visible transition-all duration-[500ms] ease-in ${visible ? 'h-52': "h-0"}`}>
                    <a href="#" className="block lg:mx-4 py-4 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 lg:hover:bg-white hover:bg-gray-100">Pra você</a>
                    <a href="#" className="block lg:mx-4 py-4 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 lg:hover:bg-white hover:bg-gray-100">Para seu negócio</a>
                    <a href="#" className="block lg:mx-4 py-4 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 lg:hover:bg-white hover:bg-gray-100">Sobre nós</a>
                    <a href="#" className="block lg:mx-4 py-4 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 lg:hover:bg-white hover:bg-gray-100">Dúvidas</a>
                </div>
            </div>
        </div>
    </nav>

</header>


  );
}
