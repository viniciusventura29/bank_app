import  ReactDOM  from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Sobre from "./pages/Sobre";
import Duvidas from "./pages/Duvidas";
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="duvidas" element={<Duvidas />} />
          <Route path="Login" element={<Login />} />
          <Route path="Cadastro" element={<Cadastro />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
