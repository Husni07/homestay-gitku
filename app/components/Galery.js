"use client";
import React from "react";
import Image from "next/image";
import AOS from "aos";
import { useEffect } from "react";
const Galery = ({ src }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  });
  return (
    <div className="w-full p-3 transition-all md:w-1/2 lg:w-1/3 md:p-2 rounded-2xl hover:-translate-y-1 hover:duration-300">
      <Image
        src={src}
        alt={src}
        width={1200}
        height={600}
        draggable={false}
        data-aos="fade-up"
        className="w-full h-auto rounded-2xl"
      />
    </div>
  );
};

export default Galery;
