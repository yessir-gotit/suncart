import "animate.css";
import "./globals.css";
import { Bebas_Neue, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "SunCart - Your One-Stop Summer Shop",
  description: "Discover the best summer products — from sunglasses to sunscreen, we've got you covered.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="suncart">
      <body className={`${bebasNeue.variable} ${inter.variable} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
