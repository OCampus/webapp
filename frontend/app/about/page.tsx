'use client';
import Image from "next/image";
import { Hero, AboutUs, WhyChooseUs, Features, Download} from "@/components/index";
// import SmoothScroll from "@/lib/SmoothScroll";



export default function Home() {
  return (
    <main className="">
        <Hero />
        <AboutUs />
        <Features/>
        <WhyChooseUs />
        <Download/>
    </main>
  )
}