import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [errorCpf, setErrorCpf] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorPasswordMessage, setErrorPasswordMessage] = useState(false);
  const [errorCpfMessage, setErrorCpfMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  function handleCpf(e: any) {
    const notFormattedCpf = e.target.value;

    const formattedCpf = notFormattedCpf
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
    setCpf(formattedCpf);
  }

  function loginValidation() {
    if (cpf.length !== 14) {
      setErrorCpf(true);
      setErrorCpfMessage(true);
      return;
    } else {
      setErrorCpf(false);
      setErrorCpfMessage(false);
    }

    if (password.length < 8) {
      setErrorPassword(true);
      setErrorPasswordMessage(true);
      return;
    } else {
      setErrorPassword(false);
      setErrorPasswordMessage(false);
    }
    setSuccessMessage(true);

    doLogin();
  }

  function callErrorCpfMessage() {
    if (errorCpfMessage === true) {
      return <div className="text-red-500">Ops! Cpf invalid, try again.</div>;
    } else {
      null;
    }
  }

  function callErrorPasswordMessage() {
    if (errorPasswordMessage === true) {
      return (
        <div className="text-red-500">Ops! Password invalid, try again.</div>
      );
    } else {
      null;
    }
  }

  function callSuccessMessage() {
    if (successMessage === true) {
      timer();
      return (
        <div className="flex items-center gap-5 absolute border-r-[5px] border-green-500 px-20 py-6 bg-gray-100 bottom-10 right-10">
          Login Successfull <img className="w-10" src="img/check.png" />
        </div>
      );
    } else {
      null;
    }
  }
  interface Dados {
    cpf: string;
    senha: string;
  }
  function doLogin() {
    axios
      .post("http://127.0.0.1:8000/auth/jwt/new/", {
        cpf: cpf.replaceAll(".", "").replace("-", ""),
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.access);
        axios.get("http://127.0.0.1:8000/auth/users/me/", {
          headers: {
            Authorization: "JWT " + localStorage.getItem("token"),
          },
        });
        navigate('/')
      });
  }

  function timer() {
    setTimeout(() => {
      setSuccessMessage(false);
    }, 5000);
  }

  return (
    <div className="h-screen justify-center flex flex-col bg-blue-100">
      <form className="flex flex-col lg:w-1/4 p-10 mx-auto" action="">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold mb-2">Login</h2>
          <p className="mb-14 text-gray-500">
            Digite seu CPF e sua senha para logar!
          </p>
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="CPF mb-4">Cpf do usuário</label>
          <input
            placeholder="555.555.555-55"
            className={`w-full p-2 bg-blue-50 focus:outline-none ring-0 rounded ${
              errorCpf ? "border-2 border-red-500" : "border-none"
            }`}
            type="text"
            name="CPF"
            id="CPF"
            value={cpf}
            onChange={handleCpf}
          />
          {callErrorCpfMessage()}
          <label className="mt-6" htmlFor="Senha">
            Senha
          </label>
          <input
            placeholder="************"
            className={`w-full p-2 bg-blue-50 focus:outline-none ring-0 rounded ${
              errorPassword ? "border-2 border-red-500" : "border-0"
            }`}
            type="password"
            name="Senha"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {callErrorPasswordMessage()}
          <div className="mt-6 mb-10 gap-4">
            <input id="check" type="checkbox" name="" />
            <label htmlFor="check">Lembre de mim</label>
          </div>
          <button
            type="button"
            onClick={loginValidation}
            className="w-full py-2 bg-blue-500 rounded text-white"
          >
            Logar
          </button>
        </div>
      </form>
      {callSuccessMessage()}
      <a href="/cadastro">
        Não possui cadastro?{" "}
        <span className="hover:text-blue-500">Cadastrar!</span>
      </a>
    </div>
  );
}
