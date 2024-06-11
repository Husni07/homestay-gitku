"use client";
import React, { useState, useEffect, useCallback } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function GalerySlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [jumlahSlide, setJumlah] = useState(3);

  const updateJumlah = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setJumlah(1);
    } else if (width < 1024) {
      setJumlah(2);
    } else {
      setJumlah(3); 
    }
  };

  useEffect(() => {
    updateJumlah();
    window.addEventListener("resize", updateJumlah);
    return () => {
      window.removeEventListener("resize", updateJumlah);
    };
  }, []);

  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToSlide = useCallback((slideIndex) => {
    setCurrentIndex(slideIndex);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  const getVisibleSlides = () => {
    const visibleSlides = [];
    for (let i = 0; i < jumlahSlide; i++) {
      const slideIndex = (currentIndex + i) % slides.length;
      visibleSlides.push(slides[slideIndex]);
    }
    return visibleSlides;
  };

  return (
    <div
      className="max-w-[1400px] h-full w-full m-auto relative group"
      data-aos="fade-up"
    >
      <div className="flex justify-center items-center md:gap-2">
        {getVisibleSlides().map((slide, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${slide.url})` }}
            className={`h-[400px] duration-500 bg-center bg-cover rounded-2xl ${
              jumlahSlide === 1
                ? "w-full"
                : jumlahSlide === 2
                ? "w-1/2"
                : "w-1/3"
            }`}
          ></div>
        ))}
      </div>
      <div className="hidden group-hover:block absolute top-[200px] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[200px] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
}

export default GalerySlider;
