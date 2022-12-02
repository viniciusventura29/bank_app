import  ReactDOM  from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Sobre from "./pages/Sobre";
import Duvidas from "./pages/Duvidas";
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import PraVoce from "./pages/PraVoce";
import MeuPerfil from "./pages/MeuPerfil";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="duvidas" element={<Duvidas />} />
          <Route path="login" element={<Login />} />
          <Route path="cadastro" element={<Cadastro />} />
          <Route path='pravoce' element={<PraVoce />}/>
          <Route path='meuperfil' element={<MeuPerfil />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
