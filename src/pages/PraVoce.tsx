import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { SimpleFormCard } from "react-pay-card";

export default function PraVoce() {
  return (
    <>
      <Navbar />
      <div className="z-10 h-[18rem] w-full flex items-end relative opacity-95 bg-gradient-to-r from-sky-400 to-blue-500">
        <h1 className="z-20 text-7xl lg:text-9xl opacity-90 -m-3 font-bold text-white">
          PRA VOCÊ
        </h1>
      </div>
      <div className="pt-28">
        <p className="text-xl">Pra você</p>
        <h2 className="text-4xl font-bold">Vantagens</h2>
        <h3 className="text-gray-700">
          Sabe quais são as vantagens de participar da nossa grande família?
        </h3>

        <div className="grid grid-cols-4 px-80 gap-5 mt-10 mb-28">
          <div className="px-10 py-6 bg-blue-200 rounded flex flex-col items-start">
            <h3 className="text-2xl mb-1 font-semibold">Lorem Ipsum</h3>
            <p className="leading-5 text-start text-gray-600">
              quando um impressor desconhecido pegou
            </p>
          </div>

          <div className="px-10 py-6 bg-blue-200 rounded flex flex-col items-start">
            <h3 className="text-2xl mb-1 font-semibold">Lorem Ipsum</h3>
            <p className="leading-5 text-start text-gray-600">
              quando um impressor desconhecido pegou
            </p>
          </div>

          <div className="px-10 py-6 bg-blue-200 rounded flex flex-col items-start">
            <h3 className="text-2xl mb-1 font-semibold">Lorem Ipsum</h3>
            <p className="leading-5 text-start text-gray-600">
              quando um impressor desconhecido pegou
            </p>
          </div>

          <div className="px-10 py-6 bg-blue-200 rounded flex flex-col items-start">
            <h3 className="text-2xl mb-1 font-semibold">Lorem Ipsum</h3>
            <p className="leading-5 text-start text-gray-600">
              quando um impressor desconhecido pegou
            </p>
          </div>

          <div className="px-10 py-6 bg-blue-200 rounded flex flex-col items-start">
            <h3 className="text-2xl mb-1 font-semibold">Lorem Ipsum</h3>
            <p className="leading-5 text-start text-gray-600">
              quando um impressor desconhecido pegou
            </p>
          </div>

          <div className="px-10 py-6 bg-blue-200 rounded flex flex-col items-start">
            <h3 className="text-2xl mb-1 font-semibold">Lorem Ipsum</h3>
            <p className="leading-5 text-start text-gray-600">
              quando um impressor desconhecido pegou
            </p>
          </div>

          <div className="px-10 py-6 bg-blue-200 rounded flex flex-col items-start">
            <h3 className="text-2xl mb-1 font-semibold">Lorem Ipsum</h3>
            <p className="leading-5 text-start text-gray-600">
              quando um impressor desconhecido pegou
            </p>
          </div>

          <div className="px-10 py-6 bg-blue-200 rounded flex flex-col items-start">
            <h3 className="text-2xl mb-1 font-semibold">Lorem Ipsum</h3>
            <p className="leading-5 text-start text-gray-600">
              quando um impressor desconhecido pegou
            </p>
          </div>
        </div>

        <p className="text-xl">Pra você</p>
        <h2 className="text-4xl font-bold">Seu Cartão</h2>
        <h3 className="text-gray-700">
          Já imaginou como seria seu cartão personalizado? Aqui você pode
          conferir!
        </h3>
        <SimpleFormCard />
      </div>

      <Footer />
    </>
  );
}
