import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t-2 flex flex-col px-10 pt-4 bg-gradient-to-r from-gray-300 via-[#bce1ff] to-gray-300">
      <h1 className="font-bold text-xl mx-auto my-10 text-black">
        Hubungi Kami
      </h1>
      <div className="flex lg:gap-10 flex-col lg:flex-row h-auto">
        <div className="flex mx-auto h-80 flex-col lg:w-2/5">
          <div className="mb-2">
            <h1 className="font-bold text-lg">Alamat :&nbsp;
            <span className="text-base font-normal">
              8C65+HR5, Jetakbelah, Punjulharjo, Kec. Rembang, Kabupaten
              Rembang, Jawa Tengah 59219
            </span></h1>
          </div>
          <div className="mb-2">
            <h1 className="font-bold text-lg">E-mail :&nbsp;
            <span className="text-base font-normal">
              xxxxxxxxxxxxx@gmail.com
            </span></h1>
          </div>
          <div className="mb-2">
            <h1 className="font-bold text-lg">Telepon :&nbsp;
            <span className="text-base font-normal">
              08xxxxxxxxxxxxxxx
            </span></h1>
          </div>
          <div className="mb-2">
            <h1 className="font-bold text-lg">WhatsApp :&nbsp;
            <span className="text-base font-normal">
              08xxxxxxxxxxxxxxx
            </span></h1>
          </div>
          <div className="mb-2">
            <h1 className="font-bold text-lg">Facebook :&nbsp;
            <span className="text-base font-normal">
              FatayaHomestay
            </span></h1>
          </div>
          <div className="mb-2">
            <h1 className="font-bold text-lg">Tiktok :&nbsp;
            <span className="text-base font-normal">
              @Fataya
            </span></h1>
          </div>
        </div>
        <div className="lg:w-3/5 flex" id="lokasi">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11933.845256355693!2d111.41194185391912!3d-6.69589750454396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77216a925bd3fd%3A0x7c67f3b28367b2fc!2sSpot%20foto%20laut%20pantai%20karang%20jahe!5e0!3m2!1sid!2sid!4v1717219373203!5m2!1sid!2sid"
            width="800"
            height="400"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-[90%] m-auto rounded-lg"
          ></iframe>
        </div>
      </div>
      <div className="text-center m-auto">
      <h1 className="text-sm mx-auto my-6 text-black font-semibold">
        Copyright &copy; {currentYear} BARR&apos;Q, All rights reserved
        <p className="text-gray-600">Design by BarrDesign</p>
      </h1>
      </div>
    </footer>
  );
};

export default Footer;
