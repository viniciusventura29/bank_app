import "../styles/App.css";
import Navbar from "../components/Navbar";
import CardsHome from "../components/CardsHome";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ilustration from "../img/4636951.jpg"

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <CardsHome/>

      <div className="flex justify-around">
        <div>
        <img src="../img/4636951.jpg" alt="" className="w-96"/>
          
        </div>

        <div className="w-3/6">
          <h2>Title</h2>
          <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
          </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
