"use client";
import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "../components/Slider";
const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  });

  const slides = [
    {
      url: "https://picsum.photos/1200/600?grayscale",
    },
    {
      url: "https://picsum.photos/1200/600",
    },
    {
      url: "https://cdn.oneesports.id/cdn-data/sites/2/2024/01/404440064_892730489223202_7583215412251772023_n-1024x576.jpg",
    },
  ];
  return (
    <section className="relative py-16 bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 lg:py-16">
      <div className="flex justify-center mb-8">
        <div className="font-bold w-[80%] text-black z-10 flex justify-center flex-col items-center text-center">
          <h1 className="mb-4 text-4xl">Fataya Homestay</h1>
          <p className="px-5 text-base">
            Temukan kenyamanan dan kemewahan di Tempat kami di Kota Rembang.
            Nikmati fasilitas terbaik, mulai dari kamar tidur yang nyaman hingga
            ruang tamu yang luas dan dapur modern. Dapatkan juga akses Wi-Fi
            gratis, kolam renang pribadi, dan layanan pemandu wisata untuk
            pengalaman liburan yang tak terlupakan di Little Tiongkok
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full gap-10 px-5 mx-auto lg:flex-row lg:max-w-7xl sm:px-10 md:px-12 lg:px-5">
        <div className="absolute inset-y-0 hidden w-full lg:w-1/2 lg:right-0 lg:block">
          <span className="absolute hidden w-24 h-24 rotate-90 skew-x-12 bg-green-400 -left-6 md:left-4 top-24 lg:top-28 rounded-3xl blur-xl opacity-60 lg:opacity-95 lg:block"></span>
          <span className="absolute w-24 h-24 bg-blue-600 right-4 bottom-12 rounded-3xl blur-xl opacity-80"></span>
        </div>
        <span className="absolute w-4/12 rotate-90 skew-x-12 skew-y-12 rounded-full lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 -top-5 lg:left-0 blur-2xl opacity-40"></span>

        <div className="relative flex flex-col-reverse w-full gap-10 lg:gap-0 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full text-xl leading-tight lg:w-1/2 lg:pr-8 ">
            <div className="mb-8 border-b-2">
              <p className="text-lg font-bold text-transparent bg-gradient-to-r from-fuchsia-700 to-red-600 bg-clip-text">
                Description
              </p>
              <p className="text-base text-left text-gray-900">
                Di tempat ini kami menawarkan kamar tidur yang nyaman buat
                Checkin, kamar mandi pribadi, ruang tamu yang hangat, dapur
                lengkap, dan fasilitas tambahan seperti kolam renang untuk
                memastikan pengalaman menginap yang menyenangkan dan
                berkualitas.
              </p>
            </div>
            <div>
              <p className="text-lg font-bold text-transparent bg-gradient-to-r from-fuchsia-700 to-red-600 bg-clip-text">
                Fasilitas
              </p>
              <div className="text-base list-image-[url(/Images/check-mark.svg)] text-left text-gray-700 mt-2 leading-tight">
                <li>Playstation 5 full set</li>
                <li>Free Wi-Fi</li>
                <li>TV layar lebar</li>
                <li>Billiard</li>
                <li>AC</li>
                <li>Kolam renang</li>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto mt-8 lg:w-1/2 lg:h-auto lg:max-w-none lg:mx-0 lg:mt-0">
            <Slider slides={slides} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
