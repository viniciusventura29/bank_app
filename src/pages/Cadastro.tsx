import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'

export default function Cadastro() {
  const navigate = useNavigate()
  const [cpf, setCpf] = useState('')
  const [password,setPassword] = useState('')
  const [nome,setNome] = useState('')
  const [idade,setIdade] = useState('')
  const [endereco,setEndereco] = useState('')
  const [genero,setGenero] = useState('')
  const [errorCpf,setErrorCpf] = useState(false)
  const [errorNome,setErrorNome] = useState(false)
  const [errorEndereco,setErrorEndereco] = useState(false)
  const [errorIdade,setErrorIdade] = useState(false)
  const [errorGenero,setErrorGenero] = useState(false)
  const [errorPassword,setErrorPassword] = useState(false)
  const [errorPasswordMessage, setErrorPasswordMessage] = useState(false)
  const [errorNomeMessage, setErrorNomeMessage] = useState(false)
  const [errorIdadeMessage, setErrorIdadeMessage] = useState(false)
  const [errorEnderecoMessage, setErrorEnderecoMessage] = useState(false)
  const [errorCpfMessage, setErrorCpfMessage] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)

  function handleCpf(e:any){
    const notFormattedCpf = e.target.value

    const formattedCpf = notFormattedCpf.replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
  setCpf(formattedCpf)
  }

  function cadastroValidation(){ 

    const regex = /[0-9]/;

    if (nome.length <1){
      setErrorNome(true)
      setErrorNomeMessage(true)
      return
    }
    else{
      setErrorNome(false)
      setErrorNomeMessage(false)
    }

    if (regex.test(nome)){
      setErrorNome(true)
      setErrorNomeMessage(true)
      return
    }
    else{
      setErrorNome(false)
      setErrorNomeMessage(false)
    }

    if (idade.length > 3 || idade.length <1){
      setErrorIdade(true)
      setErrorIdadeMessage(true)
      return
    }
    else{
      setErrorIdade(false)
      setErrorIdadeMessage(false)
    }

    if (endereco.length <1){
      setErrorEndereco(true)
      setErrorEnderecoMessage(true)
      return
    }
    else{
      setErrorEndereco(false)
      setErrorEnderecoMessage(false)
    }

    if(cpf.length !== 14){
      setErrorCpf(true)
      setErrorCpfMessage(true)
      return
    }
    else{
      setErrorCpf(false)
      setErrorCpfMessage(false)
    }

    if (password.length < 8){
      setErrorPassword(true)
      setErrorPasswordMessage(true)
      return
    }
    else{
      setErrorPassword(false)
      setErrorPasswordMessage(false)
    }

    setSuccessMessage(true)
    
  }

  function callSuccessMessage(){
    if (successMessage===true){
      timer()
    return <div className="flex items-center gap-5 absolute border-r-[5px] border-green-500 px-20 py-6 bg-gray-100 bottom-10 right-10">Register Successfull <img className="w-10" src="img/check.png" /></div>
    }
    else{
      null
    }
  }

  function callErrorEnderecoMessage(){
    if (errorEnderecoMessage === true){
    return <div className="text-red-500">Hey! This is invalid, try again.</div>
  }else{
    null
  }
  }

  function callErrorNomeMessage(){
    if (errorNomeMessage === true){
    return <div className="text-red-500">This input is wrong, try again.</div>
  }else{
    null
  }
  }

  function callErroIdadeMessage(){
    if (errorIdadeMessage === true){
    return <div className="text-red-500">This age is invalid.</div>
  }else{
    null
  }
  }

  function callErrorCpfMessage(){
    if (errorCpfMessage === true){
    return <div className="text-red-500">Ops! Cpf invalid, try again.</div>
  }else{
    null
  }
  }

  function callErrorPasswordMessage(){
    if (errorPasswordMessage === true){
    return <div className="text-red-500">Ops! Password invalid, try again.</div>
  }else{
    null
  }
  }

  function timer(){
    setTimeout(()=>{
      setSuccessMessage(false)
    },5000)
  }

  return (
    <div className="h-screen justify-center flex flex-col bg-blue-100">
      <form className="flex flex-col w-1/4 p-10 mx-auto" action="">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold mb-2">Cadastro</h2>
          <p className="mb-14 text-gray-500">
            Digite seu CPF e sua senha para logar!
          </p>
        </div>
        <div className="flex flex-col items-start">
        <label htmlFor="CPF mb-4">Nome completo</label>
          <input
            placeholder="Fulano Gomes da Silva"
            className={`w-full p-2 bg-blue-50 focus:outline-none ring-0 rounded ${errorNome ? 'border-2 border-red-500': 'border-none'}`}
            type="text"
            name="Nome"
            id="Nome"
            value={nome}
            onChange={e => setNome(e.target.value) }
          />
          {callErrorNomeMessage()}
          <div className="flex gap-2 mt-4">
            <div className="flex flex-col items-start">
           <label htmlFor="CPF mb-4">Idade</label>
          <input
            placeholder="17"
            className={`w-full p-2 bg-blue-50 focus:outline-none ring-0 rounded ${errorIdade ? 'border-2 border-red-500': 'border-none'}`}
            type="number"
            name="Idade"
            id="Idade"    
            value={idade}
            onChange={e => setIdade(e.target.value) }
          />
          {callErroIdadeMessage()}
          </div>
          <div className="flex flex-col items-start">
           <label htmlFor="CPF">Gênero</label>
          <input
            placeholder="/"
            className={`w-full p-2 bg-blue-50 focus:outline-none ring-0 rounded ${errorGenero ? 'border-2 border-red-500': 'border-none'}`}
            type="text"
            name="Genero"
            id="Genero"
            value={genero}
          />
          </div>
          </div>
           <label className="mt-4" htmlFor="CPF">Endereço</label>
          <input
            placeholder="Rua LogoAli, Bairro São Pedro, Número 512, Campinas/SP"
            className={`w-full p-2 bg-blue-50 focus:outline-none ring-0 rounded ${errorEndereco ? 'border-2 border-red-500': 'border-none'}`}
            type="text"
            name="Address"
            id="Address"
            value={endereco}
            onChange={e => setEndereco(e.target.value) }
          />
          {callErrorEnderecoMessage()}
          <label className="mt-4" htmlFor="CPF">Cpf do usuário</label>
          <input
            placeholder="555.555.555-55"
            className={`w-full p-2 bg-blue-50 focus:outline-none ring-0 rounded ${errorCpf ? 'border-2 border-red-500': 'border-none'}`}
            type="text"
            name="CPF"
            id="CPF"
            value={cpf}
            onChange={handleCpf}
          />
          {callErrorCpfMessage()}
          <label className="mt-4" htmlFor="Senha">Senha</label>
          <input
            placeholder="************"
            className={`w-full p-2 bg-blue-50 focus:outline-none ring-0 rounded ${errorPassword ? 'border-2 border-red-500': 'border-0'}`}
            type="password"
            name="Senha"
            id="password"
            onChange={e => setPassword(e.target.value) }
          />
          {callErrorPasswordMessage()}
          <div className="mt-6">
            <input className="mb-10 mr-2" type="checkbox" name="" />
            Lembre de mim
          </div>
          <button type="button" onClick={cadastroValidation} className="w-full py-2 bg-blue-500 rounded text-white">
            Logar
          </button>
        </div>
      </form>
      {callSuccessMessage()}
      <a href="/login">
        Já possui cadastro?{" "}
        <span className="hover:text-blue-500">Logar!</span>
      </a>
    </div>
  );
}
