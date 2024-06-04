import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ButtonWa from "./components/ButtonWa";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Barr Homestay: Penginapan dekat spot wisata Pantai Karang Jahe (KJB)",
  description:
    "Barr Homestay adalah penginapan yang sangat terjangkau dan terletak di lokasi yang strategis dekat dengan spot wisata Pantai Karang Jahe (KJB), Sangat cocok untuk yang mau liburan di kota Tiongkok kecil (Rembang)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="scroll-smooth">
        <Navbar />
        {children}
        <ButtonWa />
        <Footer />
      </body>
    </html>
  );
}
