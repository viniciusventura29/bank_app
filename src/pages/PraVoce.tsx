import Navbar from "../../components/Navbar";
import CardsHome from "../../components/CardsHome";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import { SimpleFormCard } from "react-pay-card";

export default function PraVoce(){
return(
    <>
    <Navbar />
    <div className="z-10 h-[18rem] w-full flex items-end relative opacity-95 bg-gradient-to-r from-sky-400 to-blue-500">
        <h1 className="z-20 text-7xl lg:text-9xl opacity-90 -m-3 font-bold text-white">PRA VOCÊ</h1>
    </div>
    <div>
        <h1>Pra Você</h1>
        <SimpleFormCard />
    </div>

    <Footer />
    </>
    
)}