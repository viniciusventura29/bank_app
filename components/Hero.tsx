import axios from "axios";
import { useEffect, useState } from "react";
import bgimg from "../img/front-view-of-people-having-a-meeting-in-the-office.jpg";

export default function Hero() {
  const [welcomeText,setWelcomeText] = useState('')

  useEffect(()=>{
    let token = localStorage.getItem("token");
    if (token === null) {
      setWelcomeText('Lorem Ipsum é simplesmente uma simulação inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.Lorem Ipsum é simplesmente uma simulação')
    }
    else{
      axios.get("http://127.0.0.1:8000/auth/users/me/", {
          headers: {
            Authorization: "JWT " + localStorage.getItem("token"),
          },
        }).then((res)=>{
          console.log(res.data)
        });
      setWelcomeText("Olá ")
    }
  }) 

  
    return(
        <div className="w-full flex flex-col lg:flex-row lg:justify-between justify-center items-center h-screen">
          
          <div className="flex flex-col rounded-lg lg:w-5/12 w-11/12 items-center lg:items-start text-center lg:text-left z-20 backdrop-blur-md  p-4 lg:p-10 lg:ml-20">

            <h1 className="text-3xl font-semibold text-gray-200 uppercase lg:text-6xl ">
              lançou lorem <span className="text-blue-400 font-bold">passagem</span>
            </h1>
            
            <span className="lg:text-gray-200 text-gray-800 leading-5 px-8 pt-2 lg:text-justify text-sm mt-6 mb-6 lg:mb-16 lg:text-base lg:px-0 ">
              {welcomeText} 
            </span>

            <a href="/cadastro" className="justify-self-center justify-center flex px-4 py-2 lg:mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-36 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 " title="Start project">
              Join Us
            </a>
            
          </div>
          <img className="absolute brightness-[.4] bg-clip-content pb-[30rem] z-10 w-full" src={bgimg} alt="" />
        </div>
    
    )
}