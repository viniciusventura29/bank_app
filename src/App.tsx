import "../styles/App.css";
import Navbar from "../components/Navbar";
import CardsHome from "../components/CardsHome";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import SwiperContent from "../components/SwipperContent";

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

      <div className="mt-52">

        <div className="flex bg-blue-300 w-full">
          <div className="w-[55rem] ">
            <img src="../img/happywoman.jpg" alt="" className="" />
          </div>
          <div className="w-[45rem] text-end m-auto">
            <h2 className="mb-10 font-bold text-3xl">Lorem Ipsum Loren </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>

        <div className="flex flex-row-reverse bg-blue-400 w-full">
          <div className="w-[55rem] ">
            <img src="../img/happywoman.jpg" alt="" className="" />
          </div>
          <div className="text-start w-[45rem] m-auto">
            <h2 className="mb-10 font-bold text-3xl">Lorem Ipsum Loren </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>

        <div className="flex bg-blue-300 w-full">
          <div className="w-[55rem] ">
            <img src="../img/happywoman.jpg" alt="" className="" />
          </div>
          <div className="w-[45rem] text-end m-auto">
            <h2 className="mb-10 font-bold text-3xl">Lorem Ipsum Loren </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
