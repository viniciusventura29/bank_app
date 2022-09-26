import Navbar from "../../components/Navbar";
import CardsHome from "../../components/CardsHome";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";

export default function Sobre(){
return(
    <>
    <Navbar />

    <div className="z-10 h-[18rem] w-full flex items-end relative opacity-95 bg-gradient-to-r from-sky-400 to-blue-500">
        <h1 className="z-20 text-9xl opacity-90 -m-3 font-bold text-white">SOBRE NÓS</h1>
    </div>
        {/*Cola a imagem ai cara <img alt="Img_sobre" /> */}
    <div className="mt-28 mb-20 flex items-center justify-center flex-col">
            <p className="text-xl">our mission</p>
            <h2 className="text-4xl font-bold ">Lorem ipsum</h2>
            <p className="mt-8 w-3/6">e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
            sobreviveu não só a cinco séculos Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
            sobreviveu não só a cinco séculosLorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
            sobreviveu não só a cinco séculos</p>
            
    </div>
        <div className="flex lg:justify-start justify-center lg:mx-40 lg:mt-20">
            <div className="mt-28 w-5/6 lg:w-4/6 mb-52 bg-gray-100 p-8 lg:p-20 flex items-start flex-col">
                <p className="text-xl">our mission</p>
                <h2 className="text-4xl font-bold ">Lorem ipsum</h2>
                <div className="flex flex-col lg:flex-row items-center">
                <p className="mt-8 w-auto lg:w-[40rem] text-justify">e vem sendo utilizado desde o século
                XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
                os embaralhou para fazer um livro de modelos de tipos Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século
                XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
                os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
                sobreviveu não só a cinco séculos Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século
                XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
                os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
                sobreviveu não só a cinco séculosLorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século
                XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
                os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
                sobreviveu não só a cinco séculos</p>
                <img src="../img/sobre_homem.jpg" className="lg:absolute lg:ml-[50rem] mt-10 lg:-mt-10 h-3/6" alt="imagem de um homem apontando para o computador" />
                </div>
            </div>
            
        </div>

        <div className="mt-2 mb-20 flex items-center justify-center flex-col">
            <p className="text-xl">our mission</p>
            <h2 className="text-4xl font-bold ">Lorem ipsum</h2>

        <div className="w-full flex flex-col px-16 lg:grid lg:grid-cols-5 lg:gap-10 gap-2 mt-16">
      <a className="lg:bg-blue-600 bg-blue-600 text-2xs lg:text-base col-start-2 col-span-2 lg:col-span-1 lg:col-start-2 rounded-lg drop-shadow-2xl flex flex-col justify-evenly px-4 py-10 text-white " href="/">
        <div className="flex flex-col items-center">
          <img className="w-16 lg:w-24" src="../img/teste2.svg" alt="sla" />
          <p className="mt-4">O Lorem Ipsum é um texto modelo livro de modelos de tipos. Lorem Ipsum
                sobreviveu não só a cinco séculosO Lorem Ipsum é um texto modelo livro de modelos de tipos. Lorem Ipsum
                sobreviveu não só a cinco séculos</p>
        </div>
      </a>
      <a className="lg:bg-blue-200 bg-blue-200 text-2xs lg:text-base col-start-4 col-span-2 lg:col-span-1 lg:col-start-3 rounded-lg drop-shadow-2xl flex flex-col justify-evenly px-4 py-10 text-white" href="/">
        <div className="flex flex-col items-center">
          <img className="w-16 lg:w-24" src="../img/teste2.svg" alt="sla" />
          <p className="mt-4">O Lorem Ipsum é um texto modelo livro de modelos de tipos. Lorem Ipsum
                sobreviveu não só a cinco séculosO Lorem Ipsum é um texto modelo livro de modelos de tipos. Lorem Ipsum
                sobreviveu não só a cinco séculos</p>
        </div>
      </a>
      <a href="" className="lg:bg-blue-600 bg-blue-600 text-2xs lg:text-base col-start-2 col-span-2 lg:col-span-1 lg:col-start-4 rounded-lg drop-shadow-2xl flex flex-col justify-evenly px-4 py-10 text-white ">
        <div className="flex flex-col items-center">
          <img className="w-16 lg:w-24" src="../img/teste2.svg" alt="sla" />
          <p className="mt-4">O Lorem Ipsum é um texto modelo livro de modelos de tipos. Lorem Ipsum
                sobreviveu não só a cinco O Lorem Ipsum é um texto modelo livro de modelos de tipos. Lorem Ipsum
                sobreviveu não só a cinco séculos</p>
        </div>
      </a>
      </div>
      </div>

    <Footer />
    </>
    
)}