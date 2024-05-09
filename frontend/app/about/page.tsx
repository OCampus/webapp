import Image from "next/image";
import {  Hero, About, Student, Landlord, Features, Download} from "@/components/index";



export default function Home() {
  
  return (
    <main className="">
      <Hero />
      <About />
      <Student/>
      <Landlord/>
      <Features/>
      <Download/>
      
    </main>
  )
}