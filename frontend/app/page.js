import Image from "next/image";
import { Navbar, Hero, About, Student, Landlord, Features, Download, Footer} from "@/components";



export default function Home() {
  
  return (
    <main className="">
      <div className="lg:min-h-screen mb-10">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Student/>
      <Landlord/>
      <Features/>
      <Download/>
      <Footer/>
    </main>
  )
}