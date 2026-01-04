import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const HeroSection = () => {
  const slides = [
    {
      title: "Reliable Car Service & Maintenance",
      subtitle: "Professional mechanics. Transparent pricing. Trusted service.",
      bg: "bg-[url('/images/hero1.jpg')]",
    },
    {
      title: "Fast & Affordable Repairs",
      subtitle: "Expert mechanics at your service.",
      bg: "bg-[url('/images/hero2.jpg')]",
    },
    {
      title: "Certified Mechanics",
      subtitle: "We care about your car like our own.",
      bg: "bg-[url('/images/hero3.jpg')]",
    },
    {
      title: "Premium Customer Support",
      subtitle: "24/7 support for your convenience.",
      bg: "bg-[url('/images/hero4.jpg')]",
    },
  ];

  return (
    <section>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="h-[500px] md:h-[600px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`h-full w-full ${slide.bg} bg-cover bg-center flex flex-col justify-center items-center text-center px-6`}
            >
              <h1 className="text-3xl md:text-5xl font-bold text-slate-500 mb-4 drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-gray-400 mb-6 md:text-lg drop-shadow-md">
                {slide.subtitle}
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded text-white font-semibold transition">
                Book a Service Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
