"use client";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-gradient-to-r from-gray-200 via-[#bce1ff] to-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Visit Our Location
          </h2>
        </div>
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11933.845256355693!2d111.41194185391912!3d-6.69589750454396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77216a925bd3fd%3A0x7c67f3b28367b2fc!2sSpot%20foto%20laut%20pantai%20karang%20jahe!5e0!3m2!1sid!2sid!4v1717219373203!5m2!1sid!2sid"
                width="800"
                height="400"
                style={{ border: "0" }}
                // allowfullscreen=""
                loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
                className="w-[90%] m-auto rounded-lg"
              ></iframe>
            </div>
            <div>
              <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Alamat</h3>
                  <p className="mt-1 text-gray-600">
                    8C65+HR5, Jetakbelah, Punjulharjo, Kec. Rembang, Kabupaten
                    Rembang, Jawa Tengah 59219
                  </p>
                </div>
                <div className="border-t border-gray-200 px-6 py-2">
                  <h3 className="text-lg font-medium text-gray-900">Rooms</h3>
                  <div className="grid grid-cols-2">
                    <p className="mt-1 text-gray-600">FatayaHomestay</p>
                    <p className="mt-1 text-gray-600">simbahhomestay</p>
                    <p className="mt-1 text-gray-600">Kontrakan</p>
                    <p className="mt-1 text-gray-600">Kontrakan</p>
                    <p className="mt-1 text-gray-600">Kontrakan</p>
                  </div>
                </div>
                <div className="border-t border-gray-200 px-6 py-2">
                  <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                  <p className="mt-1 text-gray-600">
                    Email: husnimubarrok@barrq.com
                  </p>
                  <p className="mt-1 text-gray-600">Phone: +62 858 6624 2248</p>
                </div>
              </div>
            </div>
          </div>
          <div className="m-auto text-center">
            <h1 className="mx-auto my-6 text-sm font-semibold text-black">
              Copyright &copy; 2024 BARR&apos;Q, All rights reserved
              <p className="text-gray-600">Design by BarrDesign</p>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
