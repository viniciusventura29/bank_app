import  ReactDOM  from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Sobre from "./pages/Sobre";
import Duvidas from "./pages/Duvidas";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="duvidas" element={<Duvidas />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
