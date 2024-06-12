import Image from "next/image";
import Slider from "./components/Slider";
import CallAction from "./components/CallAction";
import PropertyList from "./components/PropertyList";
import GalerySlider from "./components/Galery";
import Link from "next/link";
export default function Home() {
  const slides = [
    {
      url: "/Images/image1.jpg",
    },
    {
      url: "/Images/image2.jpg",
    },
    {
      url: "/Images/image3.jpg",
    },
    {
      url: "/Images/image4.jpg",
    },
    {
      url: "/Images/image5.jpg",
    },
  ];

  return (
    <>
      {/* <div
        className="p-3 bg-fixed bg-cover h-80 lg:h-screen lg:p-24"
        style={{
          backgroundImage:
            "url('/Images/image3.jpg')",
        }}
      >
        <Slider slides={slides} />
      </div> */}
      <CallAction />
      <section
        className="relative flex flex-col bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 w-full p-4 py-6 lg:py-16"
        id="property"
      >
        <div className="absolute inset-y-0 hidden w-full lg:w-1/2 lg:right-0 lg:block">
          <span className="absolute hidden w-24 h-24 rotate-90 skew-x-12 bg-green-400 -left-6 md:left-4 top-24 lg:top-28 rounded-3xl blur-xl opacity-60 lg:opacity-95 lg:block"></span>
          <span className="absolute w-24 h-24 bg-blue-600 right-4 bottom-12 rounded-3xl blur-xl opacity-80"></span>
        </div>
        <span className="absolute w-4/12 rotate-90 skew-x-12 skew-y-12 rounded-full lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 -top-5 lg:left-0 blur-2xl opacity-40"></span>
        <div className="h-80 py-20 lg:p-28 text-center font-semibold z-10">
          <h1 className="text-2xl lg:text-4xl text-gray-700">
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-green-700 bg-clip-text">
              lagi liburan di Rembang?&nbsp;
            </span>
             ayo menginap ke Barr homestay, nikmati semua fasilitas premium yang
            kami sediakan
          </h1>
            <div className="border-2 m-8 border-black hover:bg-gradient-to-r from-[#bce1ff] via-gray-100 to-[#bce1ff] w-fit rounded-3xl mx-auto p-2 px-3 transition-all duration-300 hover:-translate-y-1">
              <Link href="https://wa.me/6285155267710?text=P%20bang" target="_blank">Let&apos;s Fucking Go</Link>
            </div>
        </div>
        <h1 className="mx-auto my-10 text-xl font-bold text-black z-10">
          All Property
        </h1>
        <div className="flex flex-wrap justify-center">
          <PropertyList
            src="/Images/image1.jpg"
            url="/fatayahomestay"
            property="Fataya Home"
            desc="Cocok untuk buat keluarga baru"
          />
          <PropertyList
            src="/Images/image2.jpg"
            url="/simbahhomestay"
            property="Simbah Home"
            desc="Cocok untuk mbah mbah"
          />
          <PropertyList
            src="/Images/image3.jpg"
            url="/kontrakan-1"
            property="Kontrakan"
            desc="Cocok untuk yang masih jomblo"
          />
          <PropertyList
            src="/Images/image4.jpg"
            url="/fatayahomestay"
            property="Kontrakan"
            desc="Cocok untuk Checkin"
          />
          <PropertyList
            src="/Images/image5.jpg"
            url="/fatayahomestay"
            property="Kontrakan"
            desc="Cocok untuk Semua"
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
