import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import img1 from "../../assets/SL1.jpg";
import img2 from "../../assets/SL2.jpg";
import img3 from "../../assets/SL3.jpg";

export default function HeaderSlider() {

    const datas = [
        {
            img: img1
        },
        {
            img: img2
        },
        {
            img: img3
        },
    ]


  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >

        <div>
            {
                datas.map((data,i)=>(
                    <SwiperSlide key={i}>
                  <div className="w-full h-[70vh]">
                    <img src={data.img} alt="" className="w-full h-full" />
                  </div>
                </SwiperSlide>
                ))
        
            }
        </div>

        


      </Swiper>
    </>
  );
}