import React from "react";
import Image from "next/image";
import Galery from "../components/Galery";
import Slider from "../components/Slider";
import Head from "next/head";


export const metadata = {
  title: "Fataya Homestay: Penginapan dekat spot wisata Pantai Karang Jahe (KJB)",
  description:
    "Fataya Homestay adalah penginapan yang sangat terjangkau dan terletak di lokasi yang strategis dekat dengan spot wisata Pantai Karang Jahe (KJB), Sangat cocok untuk yang mau liburan di kota Tiongkok kecil (Rembang)",
};
export default function RoomPage() {
  const slides = [
    {
      url: "/Images/eth.jpg",
    },
    {
      url: "/Images/kamar.jpg",
    },
  ];
  return (
    <div className="">
      <div className="sticky top-0">
        <Image
          src={"/Images/image3.jpg"}
          alt="image"
          width={1280}
          height={600}
          draggable={false}
          className="object-cover w-full md:h-screen"
        />
      </div>
      {/* <Hero /> */}
      <section className="relative py-16 bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
        <div className="flex justify-center mb-8">
          <div className="font-bold w-[80%] text-black z-10 flex justify-center flex-col items-center text-center">
            <h1 className="mb-4 text-4xl">Fataya Homestay</h1>
            <p className="px-5 text-base">
              Fataya Homestay adalah penginapan yang sangat terjangkau dan
              terletak di lokasi yang strategis dekat dengan spot wisata Pantai Karang
              Jahe (KJB), dengan fasilitas yang lengkap mulai dari kamar tidur yang nyaman hingga ruang tamu yang
              luas dan dapur modern. Dapatkan juga akses Wi-Fi gratis, kolam
              renang pribadi, dan layanan pemandu wisata untuk pengalaman
              liburan yang tak terlupakan di Little Tiongkok
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full gap-10 px-5 mx-auto lg:flex-row lg:max-w-7xl sm:px-10 md:px-12 lg:px-10">
          <div className="absolute inset-y-0 hidden w-full lg:w-1/2 lg:right-0 lg:block">
            <span className="absolute hidden w-24 h-24 rotate-90 skew-x-12 bg-green-400 -left-6 md:left-4 top-24 lg:top-28 rounded-3xl blur-xl opacity-60 lg:opacity-95 lg:block"></span>
            <span className="absolute w-24 h-24 bg-blue-600 right-4 bottom-12 rounded-3xl blur-xl opacity-80"></span>
          </div>
          <span className="absolute w-4/12 rotate-90 skew-x-12 skew-y-12 rounded-full lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 -top-5 lg:left-0 blur-2xl opacity-40"></span>

          <div className="relative flex flex-col-reverse w-full gap-10 lg:gap-0 lg:flex-row lg:items-center lg:justify-between">
            <div className="w-full leading-tight lg:w-1/2 lg:pr-8 ">
              <div>
                <h1 className="text-lg text-center border-b-2 border-black mb-2 font-bold">
                  Fasilitas
                </h1>
                <div className="grid gap-2 text-base">
                  <div className="bg-[#bce1ff] text-center lg:text-left px-3 py-1 rounded-lg">
                    4 Kamar (2 AC dan 2 fan), dengan tempat tidur
                  </div>
                  <div className="bg-[#bce1ff] text-center lg:text-left px-3 py-1 rounded-lg">
                    Ruang keluarga beserta TV & Playstation 5
                  </div>
                  <div className="bg-[#bce1ff] text-center lg:text-left px-3 py-1 rounded-lg">
                    Kitchen set, kompor, kulkas, dispenser.
                  </div>
                  <div className="bg-[#bce1ff] text-center lg:text-left px-3 py-1 rounded-lg">
                    Kapasitas rumah hingga 10 orang
                  </div>
                  <div className="bg-[#bce1ff] text-center lg:text-left px-3 py-1 rounded-lg">
                    Garasi
                  </div>
                  <div className="bg-[#bce1ff] text-center lg:text-left px-3 py-1 rounded-lg">
                    Kolam renang
                  </div>
                  <div className="bg-[#bce1ff] text-center lg:text-left px-3 py-1 rounded-lg">
                    Makan siang Gratis buat anak-anak yang masih sekolah
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-lg text-center border-b-2 border-black mb-2 font-bold">
                  Price
                </p>
                <div className=" bg-gradient-to-r from-[#7ed77b] to-[#bce1ff] text-center lg:text-left px-3 py-1 rounded-lg">
                  Harga permalam{" "}
                  <span className="line-through">Rp. 2.000.000</span>
                  <p className="text-3xl">1.999.999</p>
                </div>
              </div>
            </div>
            <div className="w-full mx-auto mt-8 lg:w-1/2 h-[400px] lg:max-w-none lg:mx-0 lg:mt-0">
              <Slider slides={slides} />
            </div>
          </div>
        </div>
      </section>
      <section
        className="relative flex flex-col bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 w-full p-4 py-6 lg:py-16"
        id="galery"
      >
        {/* <span className="absolute w-4/12 rotate-90 skew-x-12 skew-y-12 rounded-full lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 -top-5 lg:left-0 blur-2xl opacity-40"></span> */}
        <h1 className="mx-auto my-10 text-xl font-bold text-black">Galery</h1>
        <div className="flex flex-wrap justify-center">
          <Galery src="/Images/rt.jpg" />
          <Galery src="/Images/rtg.jpg" />
          <Galery src="/Images/rmk.jpg" />
          <Galery src="/Images/ps5.jpg" />
          <Galery src="/Images/km.jpg" />
          <Galery src="/Images/kamar.jpg" />
        </div>
      </section>
      {/* <Galery /> */}
    </div>
  );
}
