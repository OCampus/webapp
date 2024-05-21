"use client";
import { useState ,useEffect } from "react";
import { Navbar, Footer, HelpHero } from "@/components/index";
import  { usePathname } from "next/navigation";
// import Highlights from "@/components/video";

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname : any = usePathname();
    const [vidW, setVidW] = useState(0);
    const [vidH, setVidH] = useState(0);

    useEffect(() => {
        const vidElem = document.querySelector('#bgVd') as HTMLElement;
        if (vidElem) {
            setVidH(vidElem.offsetHeight);
            setVidW(vidElem.offsetWidth);
        }

        console.log(vidH)
    },[])

    return(
        <>
            {pathname == '/help' && (
                <div className="w-screen hidden md:block md:h-[70vh] overflow-hidden  relative">
                    <video className=" h-full " key='vid' id="bgVd" width="100%" height="100%" playsInline={true} autoPlay loop>
                        <source id="bgVid" src="/help.mp4" />
                    </video>

                    <div className="w-full mb-12 items-end justify-between translate-y[-25rem] translate-y-[-70vh]">
                        <Navbar/>
                        <HelpHero/>
                    </div>
                </div>
            )}

            <div className={pathname == '/about' ? ' bg-dot-content-1/[0.2]' : 'font-normal'}>
                {pathname !== '/help' && (
                    <Navbar/>
                )}    {children}
                <Footer />
            </div>
        </>
    )
  }