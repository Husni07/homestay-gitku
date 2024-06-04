import Link from "next/link";
import React from "react";

const CallAction = () => {
  return (
    <div
      className="sticky top-0 flex items-center h-screen bg-transparent bg-center bg-cover -z-10"
      style={{ backgroundImage: "url('/Images/image4.jpg')" }}
    >
      <section className="w-full py-32">
        <div className="container mx-auto text-center text-white">
          <h1 className="mb-6 text-5xl font-medium">
            Welcome to Barr Homestay
          </h1>
          <p className="mx-16 mb-12 text-xl font-semibold">
            Penginapan yang sangat terjangkau dan terletak di lokasi yang
            strategis dekat dengan spot wisata Pantai Karang Jahe (KJB), dengan
            fasilitas yang lengkap serta pemandu wisata untuk pengalaman liburan
            yang tak terlupakan di Little Tiongkok
          </p>
        </div>
      </section>
    </div>
  );
};

export default CallAction;
