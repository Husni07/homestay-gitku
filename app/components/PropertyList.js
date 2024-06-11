import React from "react";
import Image from "next/image";
import Link from "next/link";
const PropertyList = ({ src, url, property, desc }) => {
  return (
    <div
      className="relative flex md:w-1/2 lg:w-1/3 p-1 flex-col transition-all duration-300 rounded-xl hover:-translate-y-1 hover:shadow-lg"
      draggable={false}
    >
      <Link href={url} draggable={false}>
        <div className="">
          <Image
            src={src}
            alt={src}
            width={1200}
            height={600}
            draggable={false}
            className=" h-[300px] rounded-t-xl"
            data-aos="fade-up"
          />
        </div>
        <div className="px-3 py-4 bg-white rounded-b-xl">
          <h3 className="mb-2 text-xs font-medium">{property}</h3>
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-400">{desc}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyList;
