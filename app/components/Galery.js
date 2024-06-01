import React from "react";
import Image from "next/image";
const Galery = ({src}) => {
  return (
      <div className="w-full md:w-1/2 lg:w-1/3 p-3 md:p-2 rounded-2xl hover:-translate-y-1 hover:duration-300 transition-all">
        <Image
          src={src}
          alt={src}
          width={1200}
          height={600}
          draggable={false}
          className="w-full h-auto rounded-2xl"
        />
      </div>
  );
};

export default Galery;
