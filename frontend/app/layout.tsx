import type { Metadata } from "next";
import "./globals.css";
import{ Navbar, Footer } from "@/components/index";


export const metadata: Metadata = {
  title: "oCampus",
  description: "Your gateway to hassle-free student living",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className="font-manrope">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
