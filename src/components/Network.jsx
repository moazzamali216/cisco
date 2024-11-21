import React, { useState, useEffect } from "react";
import home from "../assets/images/home.svg";
import cloud from '../assets/images/cloud.svg';
import check from "../assets/images/check.svg";
import disc from '../assets/images/disc.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Network = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check the window size on mount and resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cards = [
    {
      image: home,
      title: "Hybrid Work",
      description: "Scale your business and empower your workforce",
      linkText: "EVOLVE ENABLE WORK",
    },
    {
      image: cloud,
      title: "Remote WorkForce",
      description: "Improve connectivity to create ideal experience for remote team",
      linkText: "POWER REMOTE WORK",
    },
    {
      image: check,
      title: "Safe Environments",
      description: "Unite Physical Security & CyberSecurity to protect what matters most",
      linkText: "SECURE YOUR SPACES",
    },
    {
      image: disc,
      title: "Smart Spaces",
      description: "Elevate the space where customer meet storage",
      linkText: "OPTIMIZE YOUR SPACES",
    },
  ];

  return (
<>
<div className="container pt-20 mx-auto">
      <h1 className="text-5xl px-4 font-medium text-center work-sans">
        Everything works better on a cloud- <br /> managed network.
      </h1>

      {/* For mobile, render Swiper with buttons; for desktop, render grid */}
      {isMobile ? (
        <div className="swiper-container">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="flex mx-4 py-4 my-10 px-6 sm:px-16 justify-center h-[450px] sm:h-[500px] rounded-3xl transition-all hover:shadow-xl drop-shadow-xl items-center flex-col">
                  <img className="w-[130px]" src={card.image} alt={card.title} />
                  <h1 className="text-[#3C3C3C] text-2xl font-semibold mt-4 text-center">
                    {card.title}
                  </h1>
                  <p className="inter text-center mt-2 font-light">
                    {card.description}
                  </p>
                  <a
                    href="#"
                    className="text-[#a72d2d] text-base mt-6 font-semibold capitalize text-center"
                  >
                    {card.linkText} <i className="fa-solid  -rotate-90 fa-chevron-down"></i>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Swiper Navigation Buttons (if needed for mobile) */}
  
        </div>
      ) : (
        <div>
          {/* Desktop Grid Layout */}
          <div className="grid px-4 py-4 mt-10 gap-x-10 grid-cols-2 lg:grid-cols-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex px-4 justify-start py-5 rounded-3xl transition-all md:hover:shadow-xl md:drop-shadow-xl items-center flex-col"
              >
                <img className="w-[100px] h-[100px]" src={card.image} alt={card.title} />
                <h1 className="text-[#3C3C3C] text-2xl font-semibold mt-4 text-center">
                  {card.title}
                </h1>
                <p className="inter text-center mt-2 font-light">{card.description}</p>
                <a
                  href="#"
                  className="text-[#a72d2d] text-base mt-6 font-semibold capitalize text-center"
                >
                  {card.linkText} <i className="fa-solid -rotate-90 fa-chevron-down"></i>
                </a>
              </div>
            ))}
          </div>

          {/* Optional: Buttons for Desktop */}
          <div className="desktop-buttons md:hidden flex mt-10  justify-center gap-5">
            <button className="bg-[#a72d2d] text-white w-8 py-2 px-4 rounded-full">Button 1</button>
            <button className="bg-[#a72d2d] text-white py-2 px-4 rounded-full">Button 2</button>
          </div>
        </div>
      )}
    </div>

</>
  );
};

export default Network;
