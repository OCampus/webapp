import type { Metadata } from "next";
import "./globals.css";
import{ Navbar, Footer } from "@/components/index";


export const metadata: Metadata = {
  title: "oCampus",
  description: "oCampus",
};

export default function RootLayout({
  children ,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
