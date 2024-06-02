"use client";
import React from "react";
import { useEffect } from "react";
import Image from "next/image";

const Galery = ({ src }) => {
  return (
    <div className="w-full p-3 transition-all md:w-1/2 lg:w-1/3 md:p-2 rounded-2xl hover:-translate-y-1 hover:duration-300">
      <Image
        src={src}
        alt={src}
        width={1200}
        height={600}
        draggable={false}
        className="w-full h-auto rounded-2xl"
        data-aos="fade-up"
      />
    </div>
  );
};

export default Galery;
