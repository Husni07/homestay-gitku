import React from "react";
import Image from "next/image";
import Link from "next/link";
const PropertyList = ({ src, url, property, desc }) => {
  return (
    // <div
    //   className="relative flex md:w-1/2 lg:w-1/3 p-1 flex-col transition-all duration-300 rounded-xl hover:-translate-y-1 hover:shadow-lg"
    //   draggable={false}
    // >
    //   <Link href={url} draggable={false}>
    //     <div className="">
    //       <Image
    //         src={src}
    //         alt={src}
    //         width={1200}
    //         height={600}
    //         draggable={false}
    //         className=" h-[300px] rounded-t-xl"
    //         data-aos="fade-up"
    //       />
    //     </div>
    //     <div className="px-3 py-4 bg-white rounded-b-xl">
    //       <h3 className="mb-2 text-xs font-medium">{property}</h3>
    //       <div className="flex items-center justify-between">
    //         <p className="text-xs text-gray-400">{desc}</p>
    //       </div>
    //     </div>
    //   </Link>
    // </div>
    // <div
    //   className="relative flex md:w-1/2 lg:w-1/3 p-1 flex-col transition-all duration-300 rounded-xl hover:-translate-y-1 hover:shadow-lg"
    //   draggable={false}
    // >
    //   <div className="max-w-sm mx-auto relative shadow-md rounded-lg">
    //     <Image
    //         src={src}
    //         alt={src}
    //         width={1200}
    //         height={600}
    //         draggable={false}
    //         className="h-[300px] md:h-[500px]"
    //         data-aos="fade-up"
    //       />
    //     <Link href={url} draggable={false}>
    //       <div className="absolute bottom-0 left-0 right-0 h-28 bg-black bg-opacity-50 backdrop-blur text-white px-4 rounded-b-lg">
    //         <h1 className="text-2xl font-semibold mt-2">{property}</h1>
    //         <p className="mt-1">{desc}</p>
    //       </div>
    //     </Link>
    //   </div>
    // </div>

    <div className="relative">
      {/* <img className="rounded-2xl" src={src} alt="" /> */}
      <Image
        src={src}
        alt={src}
        width={1200}
        height={600}
        draggable={false}
        className="rounded-xl w-full h-full"
        data-aos="fade-up"
      />
      <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="uppercase text-white font-bold text-center text-sm lg:text-xl mb-3">
            {property}
          </h1>
          <Link href={url}>
            <button className="rounded-full text-white border text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
              view Property
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
