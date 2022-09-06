import "../styles/App.css";
import Navbar from "../components/Navbar";
import CardsHome from "../components/CardsHome";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import SwiperContent from "../components/SwipperContent";
import ContainersHome from "../components/ContainersHome";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <CardsHome />

      <div className="flex flex-col-reverse lg:flex-row w-4/6 m-auto mt-44 items-center justify-between">
        <div>
          <img src="../img/4636951.jpg" alt="" className="w-52 lg:w-96" />
        </div>

        <div className="flex flex-col text-justify items-center w-5/6 lg:w-3/6 lg:items-start">
          <h2 className="mb-6 font-bold text-3xl">Title</h2>
          <p>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
            sobreviveu não só a cinco séculos, como também ao salto para a
            editoração eletrônica, permanecendo essencialmente inalterado. Se
            popularizou na década de 60, quando a Letraset lançou decalques
            contendo passagens de Lorem Ipsum, e mais recentemente quando passou
            a ser integrado a softwares de editoração eletrônica como Aldus
            PageMaker.
          </p>
        </div>
      </div>

      <SwiperContent />

      <ContainersHome />

      <Footer />
    </>
  );
}

export default App;
