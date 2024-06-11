import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ButtonWa from "./components/ButtonWa";
import GoogleAnalytics from "./components/GoogleAnalytics.";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Barr Homestay: Penginapan dekat spot wisata Pantai Karang Jahe (KJB)",
  description:
    "Barr Homestay adalah penginapan yang sangat terjangkau dan terletak di lokasi yang strategis dekat dengan spot wisata Pantai Karang Jahe (KJB), Sangat cocok untuk yang mau liburan di kota Tiongkok kecil (Rembang)",
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <GoogleTagManager gtmId="GTM-TNZRGJ65" />

      <body className="scroll-smooth">
        {/* <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PDC27K9H"
          height="0"
          width="0"
          style="display:none;visibility:hidden"
        ></iframe> */}
        <Navbar />
        <div className="w-0 h-0" id="top"></div>
        {children}
        <ButtonWa />
        <Footer />
      </body>
    </html>
  );
}
