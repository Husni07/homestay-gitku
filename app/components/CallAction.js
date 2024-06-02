import Link from "next/link";
import React from "react";

const CallAction = () => {
  return (
    <div
      className="sticky top-0 flex items-center h-screen bg-transparent bg-center bg-cover -z-10"
      style={{ backgroundImage: "url('/Images/eth.jpg')" }}
    >
      <section className="w-full py-32">
        <div className="container mx-auto text-center text-white">
          <h1 className="mb-6 text-5xl font-medium">
            Welcome to FatayaHomestay
          </h1>
          <p className="mx-16 mb-12 text-xl font-semibold">
            Anda miskin? ga punya rumah? mau ngontrak? ngontrak di Fataya
            Homestay aja..... murah, tempatnya nyaman, fasilitas lengkap, dan
            bersih.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CallAction;
