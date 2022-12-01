import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion';
  

export default function Duvidas(){
    return(
        <>
            <Navbar />
            <div className="z-10 h-[18rem] w-full flex items-end relative opacity-95 bg-gradient-to-r from-sky-400 to-blue-500">
                <h1 className="z-20 text-7xl lg:text-9xl opacity-90 -m-3 font-bold text-white">DÚVIDAS</h1>
            </div>

            <div className="mt-28 mb-40 flex items-center justify-center flex-col">
                <p className="text-xl">our mission</p>
                <h2 className="text-4xl font-bold ">Lorem ipsum</h2>

                <div>
                <Accordion className="w-[60rem]">
            <AccordionItem className="bg-gray-100">
                <AccordionItemHeading className="bg-gray-200 p-4">
                    <AccordionItemButton className="bg-gray-200 w-full flex">
                        What harsh truths do you prefer to ignore?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="p-5">
                    <p className="flex text-start">
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="bg-gray-100">
                <AccordionItemHeading className="bg-gray-200 p-4">
                    <AccordionItemButton className="bg-gray-200 w-full flex">
                        Is free will real or just an illusion?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="p-5">
                    <p className="flex text-start">
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
                </div>
            </div>
            <div className="bg-cover bg-center py-40 px-0 lg:px-20 " style={{backgroundImage:"URL(../../img/mulher-Duvidas.jpg)"}}>
                <div className="w-full h-[40rem]">
                <h1 className="text-white backdrop-blur p-6 w-full lg:w-[45rem] text-left uppercase font-semibold tracking-wider text-5xl lg:text-8xl">
                    softwares <br />
                    editoração <br />
                    eletrônica <br />
                </h1>
                <p className="text-white backdrop-blur lg:w-4/6 mt-10 p-4 text-justify">
                e vem sendo utilizado desde o século
                XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
                os embaralhou para fazer um livro de modelos de tipos Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século
                XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
                os embaralhou para fazer um livro de modelos de tipos Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século
                XVI, quando um impressor desconhecido pegou uma bandeja de tipos 
                </p>
                </div>
            </div>
            <Footer />
        </>
    )
}