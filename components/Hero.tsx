import bgimg from "../img/front-view-of-people-having-a-meeting-in-the-office.jpg";

export default function Hero() {
    return(
        <div className="w-full flex flex-col lg:flex-row lg:justify-between justify-center items-center h-screen">
          
          <div className="flex flex-col rounded-lg lg:w-5/12 w-11/12 items-center lg:items-start text-center lg:text-left z-20 backdrop-blur-md  p-4 lg:p-10 lg:ml-20">

            <h1 className="text-3xl font-semibold text-gray-200 uppercase lg:text-6xl ">
              lançou lorem <span className="text-blue-400 font-bold">passagem</span>
            </h1>
            
            <span className="lg:text-gray-200 text-gray-800 leading-5 px-8 pt-2 lg:text-justify text-sm mt-6 mb-6 lg:mb-16 lg:text-base lg:px-0 ">
              Lorem Ipsum é simplesmente uma simulação inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.Lorem Ipsum é simplesmente uma simulação 
            </span>

            <button className="justify-self-center block px-4 py-2 lg:mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-36 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 " title="Start project">
              Join Us
            </button>
            
          </div>
          <img className="absolute brightness-[.4] bg-clip-content pb-[30rem] z-10 w-full" src={bgimg} alt="" />
        </div>
    
    )
}