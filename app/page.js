import Image from "next/image";
import Slider from "./components/Slider";
import CallAction from "./components/CallAction";
import PropertyList from "./components/PropertyList";
import Galery from "./components/Galery";
export default function Home() {
  const slides = [
    {
      url: "https://picsum.photos/1200/600?grayscale",
    },
    {
      url: "https://picsum.photos/1200/600",
    },
  ];
  return (
    <>
      <div
        className="p-3 bg-fixed bg-cover h-80 lg:h-screen lg:p-24"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1455382950/id/foto/tempat-tidur-yang-nyaman-tanpa-tamu-di-kamar-hotel.jpg?s=612x612&w=0&k=20&c=QTlpE-ImejQa9QjFK-AwhwtBAdEOTsXcfQpcLzHRjkk=')",
        }}
      >
        <Slider slides={slides} />
      </div>
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
        {/* <span className="absolute w-4/12 rotate-90 skew-x-12 skew-y-12 rounded-full lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 -top-5 lg:left-0 blur-2xl opacity-40"></span> */}
        <h1 className="mx-auto my-10 text-xl font-bold text-black">
          All Property
        </h1>
        <div className="flex flex-wrap justify-center gap-3">
          <PropertyList
            src="https://picsum.photos/1200/600"
            url="/fatayahomestay"
            property="Fataya Home"
            desc="Cocok untuk buat keluarga baru"
          />
          <PropertyList
            src="https://picsum.photos/1200/600"
            url="/simbahhomestay"
            property="Simbah Home"
            desc="Cocok untuk mbah mbah"
          />
          <PropertyList
            src="https://picsum.photos/1200/600"
            url="/FatayaHomestay"
            property="Kontrakan"
            desc="Cocok untuk yang masih jomblo"
          />
          <PropertyList
            src="https://picsum.photos/1200/600"
            url="/FatayaHomestay"
            property="Kontrakan"
            desc="Cocok untuk Checkin"
          />
          <PropertyList
            src="https://picsum.photos/1200/600"
            url="/FatayaHomestay"
            property="Kontrakan"
            desc="Cocok untuk Semua"
          />
        </div>
      </section>
      <section
        className="relative flex flex-col bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 w-full p-4 py-6 lg:py-16"
        id="galery"
      >
        {/* <span className="absolute w-4/12 rotate-90 skew-x-12 skew-y-12 rounded-full lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 -top-5 lg:left-0 blur-2xl opacity-40"></span> */}
        <h1 className="mx-auto my-10 text-xl font-bold text-black">Galery</h1>
        <div className="flex flex-wrap justify-center">
          <Galery src="https://picsum.photos/1200/600" />
          <Galery src="https://picsum.photos/1200/600" />
          <Galery src="https://picsum.photos/1200/600" />
          <Galery src="https://picsum.photos/1200/600" />
          <Galery src="https://picsum.photos/1200/600" />
          <Galery src="https://picsum.photos/1200/600" />
          <Galery src="https://picsum.photos/1200/600" />
          <Galery src="https://picsum.photos/1200/600" />
        </div>
      </section>
    </>
  );
}
