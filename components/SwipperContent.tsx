import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

export default function SwiperContent(){
    return(
    <div className="flex flex-col-reverse w-5/6 m-auto mt-44 items-center justify-between lg:flex-row-reverse">
        <div className="lg:w-[50rem] md:ml-16 w-5/6 overflow-hidden rounded-[12px]">
          <Swiper
            centeredSlides={true}
            navigation={true}
            modules={[Navigation]}
            loop={true}
            spaceBetween={10}
            slidesPerView={2}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide><a href=""><img src="../img/bg2.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href=""><img src="../img/bg2.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href=""><img src="../img/bg2.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href=""><img src="../img/bg2.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href=""><img src="../img/bg2.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href=""><img src="../img/bg2.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href=""><img src="../img/bg2.jpg" alt="" /></a></SwiperSlide>

          </Swiper>
        </div>

        <div className="flex flex-col text-justify items-center w-5/6 lg:w-[35rem] mb-16 lg:items-start lg:mb-0">
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
)}