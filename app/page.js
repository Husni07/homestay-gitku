import Image from "next/image";
import PropertyList from "./components/PropertyList";
import GalerySlider from "./components/Galery";
import HeroV2 from "./components/HeroV2";
export default function Home() {
  const slides = [
    {
      url: "/Images/image1.webp",
    },
    {
      url: "/Images/image2.webp",
    },
    {
      url: "/Images/image3.webp",
    },
    {
      url: "/Images/image4.webp",
    },
    {
      url: "/Images/image5.webp",
    },
  ];

  return (
    <>
      {/* <CallAction /> */}
      <HeroV2 />
      <section
        className="relative flex flex-col bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 w-full px-4"
        id="property"
      >
        <div className="absolute inset-y-0 hidden w-full lg:w-1/2 lg:right-0 lg:block">
          <span className="absolute hidden w-24 h-24 rotate-90 skew-x-12 bg-green-400 -left-6 md:left-4 top-24 lg:top-28 rounded-3xl blur-xl opacity-60 lg:opacity-95 lg:block"></span>
          <span className="absolute w-24 h-24 bg-blue-600 right-4 bottom-12 rounded-3xl blur-xl opacity-80"></span>
        </div>
        <span className="absolute w-4/12 rotate-90 skew-x-12 skew-y-12 rounded-full lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 -top-5 lg:left-0 blur-2xl opacity-40"></span>
        {/* <div className="lg:px-20 font-semibold z-10">
          <h1 className="text-2xl lg:text-4xl text-gray-700 md:text-left">
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-green-700 bg-clip-text">
              Sedang mencari Penginapan di Jogja?&nbsp;
            </span>
            <p className="text-1xl md:text-2xl">
              di mana Anda bisa bersantai, merasakan budaya tradisional, dan
              melihat wisata yang menakjubkan
            </p>
          </h1>
          <div className="flex flex-col md:flex-row gap-4 my-4 w-full">
            <p className="w-full md:w-3/5">
              fatayahomestay adalah salah satu Tempat Penginapan kjhkjhkjh
              kjhjhk jhkjh kjhkj hkjh kjh kjh kjh fatayahomestay adalah salah
              satu Tempat Penginapan kjhkjhkjh kjhjhk jhkjh kjhkj hkjh kjh kjh
              kjh fatayahomestay adalah salah satu Tempat Penginapan kjhkjhkjh
              kjhjhk jhkjh kjhkj hkjh kjh kjh kjh fatayahomestay adalah salah
              satu Tempat Penginapan kjhkjhkjh kjhjhk jhkjh kjhkj hkjh kjh kjh
            </p>
            <div className="w-full md:w-2/5">
              <Image
                src="/Images/eth.webp"
                alt="p"
                width="1200"
                height="600"
                className="rounded-lg"
              />
            </div>
          </div>
        </div> */}
        <h1 className="mx-auto my-10 text-xl font-bold text-black z-10">
          All Property
        </h1>
            <div
    className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-7 px-4"
  >
          <PropertyList
            src="/Images/image1.webp"
            url="/fatayahomestay"
            property="Fataya Home"
          />
          <PropertyList
            src="/Images/image2.webp"
            url="/simbahhomestay"
            property="Simbah Home"
          />
          <PropertyList
            src="/Images/image3.webp"
            url="/kontrakan-1"
            property="Kontrakan"
          />
          <PropertyList
            src="/Images/image4.webp"
            url="/fatayahomestay"
            property="Kontrakan"
          />
          <PropertyList
            src="/Images/image5.webp"
            url="/fatayahomestay"
            property="Kontrakan"
          />
        </div>
      </section>
      <section
        className="p-4 h-screen lg:p-20 bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100"
        id="galery"
      >
        <h1 className="mb-10 text-xl text-center font-bold text-black">
          Galery
        </h1>
        <GalerySlider slides={slides} />
      </section>
    </>
  );
}
