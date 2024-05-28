"use client";
import { useState ,useEffect } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import { Navbar, Footer, HelpHero } from "@/components/index";
import  { usePathname } from "next/navigation";
// import Highlights from "@/components/video";

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname : any = usePathname();
    const [modal,setModal] = useState(false);

    const handleModal = (state : any) => {
        setModal(state);
    }

    return(
        <>
            <div id="modal" className={modal == false ? `text-xs bg-content-1 hidden` : `bg-content-1`}>
                hgdfsjdka
            </div>
            {pathname == '/help' && (
                <div className="w-screen hidden md:block md:h-[70vh] overflow-hidden  relative">
                    <video className=" h-full " key='vid' id="bgVd" width="100%" height="100%" playsInline={true} autoPlay loop>
                        <source id="bgVid" src="/help.mp4" />
                    </video>

                    <div className="w-full mb-12 items-end justify-between translate-y[-25rem] translate-y-[-70vh]">
                        <Navbar handleModal={handleModal}/>
                        <HelpHero/>
                    </div>
                </div>
            )}

            <div className='font-normal'>
                {pathname !== '/help' && (
                    <Navbar handleModal={handleModal}/>
                )} <hr/>   {children}
                <Footer />
            </div>
        </>
    )
  }