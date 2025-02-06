import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { FreeMode, Pagination } from "swiper";

const serviceData = [
  {
    icon: <RxCrop />,
    title: "ML Solutions",
    description: "Build intelligent models for real-world problems.",
  },
  {
    icon: <RxPencil2 />,
    title: "Data Analysis & Visualization",
    description: "Extract insights and present data effectively",
  },
  {
    icon: <RxDesktop />,
    title: "Python Development ",
    description: " Write efficient and scalable Python code.",
  },
  {
    icon: <RxReader />,
    title: "Web Scraping & Automation",
    description: "Automate data collection and repetitive tasks.",
  },
  {
    icon: <RxRocket />,
    title: "AI Research & Implementation",
    description: "Explore and apply cutting-edge AI techniques.",
  },
];
const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px] "
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              <div className="mb-8">
                <div className="mb-2 text-lg">
                  {item.title}
                  <p className="max-w-[350px] leading-normal">
                    {item.description}
                  </p>
                </div>
                <div className="text-3xl">
                  <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
