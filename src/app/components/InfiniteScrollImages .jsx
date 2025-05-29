// src/app/components/InfiniteScrollImages.jsx
"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/images/wazarat.png",
  "/images/fedral.png",
  "/images/bank.png",
  "/images/arab.png",
  "/images/basm.png",
  "/images/saltant.png",
  "/images/rop.png",
  "/images/oman2024.png",
  "/images/omano.png",
  "/images/commernce.png",
  "https://sacbgroup.com/wp-content/uploads/2024/09/fdubaigov_0003_dubai_economy.png",
  "https://sacbgroup.com/wp-content/uploads/2024/09/fdubaigov_0001_dubaieconomy.png",
  "https://sacbgroup.com/wp-content/uploads/2024/09/fdubaigov_0002_dubaiairport.png",
  "https://sacbgroup.com/wp-content/uploads/2024/09/fdubaigov_0000_dubaipolice.png",
  "https://sacbgroup.com/wp-content/uploads/2024/09/fdubaigov_0011_Background-1.png",
];

const InfiniteScrollImages = ({ dictionary, currentLocale }) => {
  // Accept dictionary and currentLocale
  const settings = {
    infinite: true,
    speed: 4000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    focusOnSelect: true,
    // Adjust RTL for Slider if needed, Slick Carousel has built-in RTL support
    rtl: currentLocale === "ar", // Enable RTL for Slick Carousel
  };

  return (
    <div
      className={`relative overflow-hidden pb-20 pt-10 isolate bg-gradient-to-t from-gray-900 via-gray-950 to-black ${
        currentLocale === "ar" ? "rtl" : "ltr"
      }`}
    >
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 translate-y-0 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        aria-hidden="true"
      >
        <circle
          cx="512"
          cy="512"
          r="512"
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fillOpacity="0.7"
        ></circle>
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#14b8a6"></stop>
            <stop offset="1" stopColor="#0e7490"></stop>
          </radialGradient>
        </defs>
      </svg>

      <h2
        className={`text-center text-2xl md:text-4xl font-bold mb-4 py-10 text-white ${
          currentLocale === "ar"
            ? "text-right md:text-center"
            : "text-left md:text-center"
        }`}
      >
        {dictionary.our_partners_heading} {/* Use the translated heading */}
      </h2>

      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx} className="px-4 py-10">
            <img
              src={src}
              alt={`Partner image ${idx + 1}`} // Changed alt text for better context
              className="h-28 object-contain filter drop-shadow-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InfiniteScrollImages;
