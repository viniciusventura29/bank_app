import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Cadastro() {
  return (
    <div className="h-screen justify-center flex flex-col">
      <form className="flex flex-col w-1/4 p-10 mx-auto" action="">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold mb-2">Cadastro</h2>
          <p className="mb-14 text-gray-500">
            Digite seu CPF e sua senha para Cadastrar!
          </p>
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="CPF mb-4">Cpf do usuário</label>
          <input
            placeholder="555.555.555-55"
            className="w-full p-2 bg-gray-200 mb-6 focus:outline-none ring-0"
            type="text"
            name="CPF"
            id=""
          />
          <label htmlFor="Senha">Senha</label>
          <input
            placeholder="************"
            className="w-full p-2 bg-gray-200 mb-6 focus:outline-none ring-0"
            type="password"
            name="Senha"
            id=""
          />
          <div>
            <input className="mb-10 mr-2" type="checkbox" name="" />
            Lembre de mim
          </div>
          <button className="w-full py-2 bg-blue-500 rounded text-white">
            Logar
          </button>
        </div>
      </form>
      <a href="/cadastro">
        Já possui cadastro?{" "}
        <span className="hover:text-blue-500">Logar!</span>
      </a>
    </div>
  );
}
