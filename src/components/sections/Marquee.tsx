'use client';
import React from 'react'
import Image from "next/image";
import { Anek_Gurmukhi } from 'next/font/google';


const anekGurmukhi = Anek_Gurmukhi({
    subsets: ["latin"],
    weight: "800",
});

const Marquee = () => {
    return (

        <div className="overflow-hidden bg-[#12DD27] py-2 rotate-[1.3deg] h-[4rem] md:h-[5rem] z-20 w-full flex items-center translate-y-[.3rem]  md:translate-y-[1rem] lg:translate-y-[1rem] xl:translate-y-[1rem] 2xl:translate-y-[3rem]">
            <div className={`${anekGurmukhi.className} marquee whitespace-nowrap flex gap-x-10 items-center text-[#262F3B] font-extrabold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl uppercase mt-1`}>
                <div className="flex items-start gap-x-2">
                    <Image src="/cone.svg" width={100} height={100} alt="Dribble" className="w-7 h-7 mx-2" />

                    <div className='text-[#262F3B] text-2xl uppercase'>
                        Dribble
                    </div>
                </div>
                <div className="flex items-start gap-x-2">
                    <Image src="/ball.svg" width={100} height={100} alt="Shots" className="w-7 h-7 mx-2" />

                    <div className='text-[#262F3B] text-2xl uppercase'>
                        Shots
                    </div>
                </div>
                <div className="flex items-start gap-x-2">
                    <Image src="/gloves.svg" width={100} height={100} alt="Goalie Saves" className="w-7 h-7 mx-2" />
                    <div className='text-[#262F3B] text-2xl uppercase'>
                        Tackles
                    </div>
                </div>
                <div className="flex items-start gap-x-2">
                    <Image src="/tackle.svg" width={100} height={100} alt="Tackles" className="w-7 h-7 mx-2" />
                    <div className='text-[#262F3B] text-2xl uppercase'>
                        Goalie-saves
                    </div>

                </div>
                <div className="flex items-start gap-x-2">
                    <Image src="/whistle.svg" width={100} height={100} alt="Fouls" className="w-7 h-7 mx-2" />
                    <div className='text-[#262F3B] text-2xl uppercase'>
                        Fouls
                    </div>
                </div>
                <div className="flex items-start gap-x-2">
                    <Image src="/cone.svg" width={100} height={100} alt="Dribble" className="w-7 h-7 mx-2" />
                    <div className='text-[#262F3B] text-2xl uppercase'>
                        Dribble
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Marquee