'use client';
import React from 'react'
import { Anek_Gurmukhi, Gloria_Hallelujah } from "next/font/google";

import { YellowSVG } from '@/app/shared';

import "swiper/css";
import 'swiper/css/grid';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import players from '@/utils/data.json';
import SwiperBlock from '../SwiperBlock';


const anekGurmukhi = Anek_Gurmukhi({
    subsets: ["latin"],
    weight: "800",
});
const gloriaHallelujah = Gloria_Hallelujah({
    subsets: ["latin"],
    weight: "400",
});

const Players = () => {

    return (
        <section>
            <section className="relative w-full min-h-[500px] lg:min-h-[700px]">
                <div className="absolute inset-0 bg-cover bg-no-repeat bg-center w-full h-full z-0 decoration hidden lg:block" />

                <section className="relative z-10 transform translate-y-[9rem] md:translate-y-[15rem] lg:translate-y-[18rem] mx-auto max-w-7xl px-4 xl:px-0">
                    <div className="flex flex-col items-center text-center xl:items-start xl:text-left">
                        <div className={`text-4xl md:text-6xl font-extrabold text-[#D2D4D7] ${anekGurmukhi.className}`}>
                            NUMEROUS <br className='hidden lg:block' /> PLAYER
                            <span className={`${gloriaHallelujah.className} text-6xl text-[#D0F091]`}> projections</span>
                        </div>
                        <div className="mb-6 mt-8 max-w-md text-[#D2D4D7] font-medium">
                            Available player stats categories  for you to pick from: Shots, goals, assists, saves, passes, and more.
                        </div>
                    </div>
                </section>

                <YellowSVG className="absolute bottom-0 right-0 h-10 z-10 w-10 transform translate-x-[-35rem] translate-y-[-12rem] hidden xl:block" />
            </section>

            <section className='flex flex-col gap-5'>
                <SwiperBlock players={players} />
                <SwiperBlock players={players} reverse />
                <SwiperBlock players={players} />
                <SwiperBlock players={players} reverse />
            </section>
        </section>
    )
}

export default Players