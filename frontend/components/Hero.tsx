"use client"
import { FlipWords } from './ui/FlipWords';

const Hero = () => {
    const words : any = [
        "Entrance",
        "Portal",
        "Entry point",
        "Access point",
        "Threshold",
        "Doorway",
        "Passage",
        "Ingress",
        "Opening",
        "Vestibule"
      ];
    return (
        <div className='section py-7 md:h-[60vh] md:py-2 bg-hero '>
            <div className='h-full drop-shadow w-full text-3xl md:text-4xl font-bold flex-center flex-col text-center text-white'>
                <h1 className='text-'>
                    Welcome to Ocampus; Your<FlipWords words={words} className='text-white'/> to hassle-free student living
                </h1>
                <button className='btn bg-primary-1 mt-8 text-lg text-content-1 '>Get Started</button>
            </div>
        </div>
    )
}

export default Hero