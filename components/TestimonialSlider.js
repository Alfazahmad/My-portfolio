// testimonial data
const testimonials = [
  {
    image: "/new-t-avt-1.png",
    name: "Sir Isaac Newt-On-A-Leash",
    position: "Customer",
    message:
      "Gravity really pulled me into Alfaz's work. His data-driven approach is simply attractive!",
  },
  {
    image: "/new-t-avt-2.png",
    name: "Genghis Khaan’t Stop Conquering",
    position: "Customer",
    message:
     "His machine learning models are so efficient, even I couldn't predict them... and I conquered half the world!",
  },
  {
    image: "/new-t-avt-3.png",
    name: " Napoleon Blown-apart",
    position: "Customer",
    message:
      "His solutions are so powerful, I might have actually won at Waterloo with them!",
  },
];

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";

import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px] "
    >
      {testimonials.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center mx-auto xl:mx-0 ">
                <div className="flex flex-col justify-center text-center">
                  <div className="mb-2 mx-auto">
                    <Image src={person.image} width={100} height={100} alt="" />
                  </div>
                  <div className="text-lg">{person.name}</div>
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                </div>
              </div>

              <div className=" flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                <div className="xl:text-lg text-center md:text-left">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
