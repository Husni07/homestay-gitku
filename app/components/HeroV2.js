import React from "react";

const HeroV2 = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Images/kamar.webp')" }}
      >
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 sm:bg-gradient-to-r "></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Welcome to
              <strong className="block font-extrabold text-[#579fe2]">
                Fataya Homestay
              </strong>
            </h1>

            <p className="mt-4 max-w-lg font-bold sm:text-xl/relaxed lg:text-2xl">
              Kami menawarkan penginapan atau kontrakan dengan fasilitas lengkap
              dengan harga murah
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center justify-evenly">
              <a
                href="#"
                className="block w-full rounded bg-[#579fe2] px-12 py-3 text-sm font-medium text-white shadow hover:bg-black hover:border-2 hover:border-[#579fe2] sm:w-auto"
              >
                Let&apos;s Fucking Go
              </a>

              <a
                href="#"
                className="block w-full rounded border-2 border-[#579fe2] bg-white px-12 py-3 text-sm font-medium text-[#579fe2] shadow hover:text-black focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="container flex flex-col mx-auto p-4 bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
      <div className="w-full draggable">
        <div className="container flex flex-col items-center gap-16 mx-auto my-32">
          <div className="grid w-full grid-cols-2 gap-5 lg:grid-cols-4">
            <div className="flex flex-col items-center gap-3 px-4 text-center py-10 bg-white rounded-3xl shadow-xl">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 640 512"
                >
                  <path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
                </svg>
              </span>

              <p className="text-base text-dark-grey-600">
                Ruangan yan bersih
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 px-4 text-center py-10 bg-white rounded-3xl shadow-xl">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 448 512"
                >
                  <path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z" />
                </svg>
              </span>

              <p className="text-base text-dark-grey-600">
                Makanan lengkap chief dari luar negeri
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 px-4 text-center py-10 bg-white rounded-3xl shadow-xl">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 640 512"
                >
                  <path d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
                </svg>
              </span>

              <p className="text-base text-dark-grey-600">Free wifi 1GBps</p>
            </div>
            <div className="flex flex-col items-center gap-3 px-4 text-center py-10 bg-white rounded-3xl shadow-xl">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 576 512"
                >
                  <path d="M346.3 271.8l-60.1-21.9L214 448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H282.1l64.1-176.2zm121.1-.2l-3.3 9.1 67.7 24.6c18.1 6.6 38-4.2 39.6-23.4c6.5-78.5-23.9-155.5-80.8-208.5c2 8 3.2 16.3 3.4 24.8l.2 6c1.8 57-7.3 113.8-26.8 167.4zM462 99.1c-1.1-34.4-22.5-64.8-54.4-77.4c-.9-.4-1.9-.7-2.8-1.1c-33-11.7-69.8-2.4-93.1 23.8l-4 4.5C272.4 88.3 245 134.2 226.8 184l-3.3 9.1L434 269.7l3.3-9.1c18.1-49.8 26.6-102.5 24.9-155.5l-.2-6zM107.2 112.9c-11.1 15.7-2.8 36.8 15.3 43.4l71 25.8 3.3-9.1c19.5-53.6 49.1-103 87.1-145.5l4-4.5c6.2-6.9 13.1-13 20.5-18.2c-79.6 2.5-154.7 42.2-201.2 108z" />
                </svg>
              </span>

              <p className="text-base text-dark-grey-600">
                Fasilitas Mewah
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> */}
      <div className="mt-28">
        <div
          data-aos="flip-down"
          className="text-center max-w-screen-md mx-auto"
        >
          <h1 className="text-3xl font-bold mb-4">
            What is &nbsp;<span className="text-[#579fe2]">Fataya Homestay?</span>
          </h1>
          <p className="text-gray-500">
            FatayaHomestay is Menurut KBBI daring, puisi adalah gubahan dalam
            bahasa yang bentuknya dipilih dan ditata secara cermat, sehingga
            mempertajam kesadaran orang akan pengalaman hidup dan membangkitkan
            tanggapan khusus lewat penataan bunyi, irama, dan makna khusus. Baca
            artikel detikedu, 30 Contoh Puisi Pendek Bahasa Indonesia dari
            Berbagai Tema selengkapnya
          </p>
        </div>
        {/* <div
          data-aos="fade-up"
          className="flex flex-col md:flex-row justify-center space-y-5 md:space-y-0 md:space-x-6 lg:space-x-10 mt-7"
        >
          <div className="relative md:w-5/12">
            <img className="rounded-2xl" src="/Images/eth.webp" alt="" />
            <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="uppercase text-white font-bold text-center text-sm lg:text-xl mb-3">
                  FOR INSTRUCTORS
                </h1>
                <button className="rounded-full text-white border text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                  Start a class today
                </button>
              </div>
            </div>
          </div>
          <div className="relative md:w-5/12">
            <img className="rounded-2xl" src="/Images/eth.webp" alt="" />
            <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="uppercase text-white font-bold text-center text-sm lg:text-xl mb-3">
                  FOR STUDENTS
                </h1>
                <button
                  className="rounded-full text-white text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out"
                  // style="background: rgba(35, 189, 238, 0.9)"
                >
                  Enter access code
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default HeroV2;
