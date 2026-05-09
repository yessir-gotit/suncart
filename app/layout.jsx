import "animate.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SunCart - Your One-Stop Summer Shop",
  description: "Discover the best summer products — from sunglasses to sunscreen, we've got you covered.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="suncart">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
