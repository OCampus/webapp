import { Inter } from "next/font/google";
import { Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "ocampus",
  description: "Your gateway to hassle-free student living",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
