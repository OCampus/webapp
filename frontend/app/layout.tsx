import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
