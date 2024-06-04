import React from "react";
import Image from "next/image";
const ButtonWa = () => {
  return (
    <div>
      <a
        href="https://wa.me/6285155267710" target="_blank"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600"
      >
        <Image
          src="Images/buttonWa.svg"
          alt=""
          width={100}
          height={100}
          className="w-8 h-8 animate-pulse hover:animate-none"
        />
      </a>
    </div>
  );
};

export default ButtonWa;
