'use client';
import Image from "next/image";
import { Hero, About, Student, Landlord, Features, Download} from "@/components/index";
// import SmoothScroll from "@/lib/SmoothScroll";



export default function Home() {
  return (
    <main className=" ">
        <Hero />
        <About />
        <Student/>
        <Landlord/>
        <Features/>
        <Download/>
    </main>
  )
}