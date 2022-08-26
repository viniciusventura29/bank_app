import bgimg from "../img/Teste.jpg";

export default function Hero() {
    return(
        <div className="w-full bg-center bg-cover h-screen">
        <div
          className="flex items-center w-full h-full"
          style={{
            backgroundImage: `url(${bgimg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col w-[55rem] items-center lg:items-start text-center lg:ml-36 lg:text-left ">
            <h1 className="text-3xl font-semibold text-white uppercase lg:text-6xl ">
              lançou lorem local <span className="text-blue-400">passagem</span>
            </h1>
            <span className="text-white px-8 pt-2  mt-6 mb-16 lg:px-0">
              Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica e de impressos, e vem sendo utilizado desde o século
              XVI Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica e de impressos, e vem sendo utilizado desde o século
            </span>
            <button className="justify-self-center block px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-36 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Start project
            </button>
          </div>
        </div>
      </div>
    )
}