'use client';
import { BlueIcon, GreenIcon, PinkIcon, PurpleFlower, YellowIcon, YellowSVG2 } from '@/app/shared';
import React from 'react'
import Image from "next/image";
import { Anek_Gurmukhi, Gloria_Hallelujah } from "next/font/google";
import Marquee from './Marquee';

const anekGurmukhi = Anek_Gurmukhi({
    subsets: ["latin"],
    weight: "800",
});
const gloriaHallelujah = Gloria_Hallelujah({
    subsets: ["latin"],
    weight: "400",
});

const Perks = () => {
    return (
        <section className="relative w-full h-[110rem] md:h-[59rem] lg:h-[62rem] xl:h-[80rem] z-1 perksBg">

            <YellowSVG2 className="absolute top-0 right-0 h-20 w-20 z-10 transform translate-x-[-10rem] sm:translate-x-[-12rem] md:translate-x-[-15rem] translate-y-[-1rem]" />

            <section className="relative z-10 mx-auto max-w-6xl flex flex-col items-center justify-center text-center px-4 transform translate-y-[5%] sm:translate-y-[8%] md:translate-y-[10%]">
                <div className='flex gap-2 justify-center mt-4 mb-6'>
                    <PinkIcon />
                    <BlueIcon />
                    <GreenIcon />
                    <YellowIcon />
                </div>


                <div className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl mt-[2rem] ${anekGurmukhi.className} text-[#2A343F]`}>
                    WIN UPTO 100X <br className='hidden sm:block' /> YOUR <br className='block sm:hidden' /> CASH. JUST PICK <br /> MORE OR LESS
                </div>

                <Image
                    alt="signup"
                    src="/cycle.svg"
                    height={650}
                    width={750}
                    className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[70%] mt-12 pointer-events-none hidden md:block"
                    loading='lazy'
                />
                <section className='relative flex flex-col items-center'>


                    <div className={`${gloriaHallelujah.className} text-[#2A343F] font-bold text-xl block sm:hidden mt-[3rem] w-[61%] -rotate-[2.75deg]`}>
                        Pick more or less on your favorite players stats
                    </div>
                    <Image
                        alt="line curve"
                        src="/curved_line.svg"
                        height={110}
                        width={118}
                        className="block sm:hidden pointer-events-none absolute top-0 z-0 transform translate-y-[7rem] translate-x-[4.5rem]"
                        loading='lazy'
                    />

                    <Image
                        alt="player stats"
                        src="/images/player_stat.png"
                        height={650}
                        width={750}
                        className="pointer-events-none block sm:hidden z-10 mt-5"
                        loading='lazy'
                    />

                    <Image
                        alt="staking"
                        src="/images/staking.png"
                        height={650}
                        width={750}
                        className=" pointer-events-none block sm:hidden mt-[4rem]"
                        loading='lazy'
                    />
                    <Image
                        alt="line curve"
                        src="/curved2.svg"
                        height={100}
                        width={100}
                        className="block sm:hidden pointer-events-none relative transform translate-y-[-4rem] "
                        loading='lazy'
                    />

                    <div className={`${gloriaHallelujah.className} text-[#2A343F] font-bold text-xl block sm:hidden -rotate-[2.75deg] relative transform translate-y-[-3rem]`}>
                        Withdraw <br /> your winnings
                    </div>

                    <div className=" sm:hidden relative -rotate-[5deg] z-10 mx-auto top-[1.3rem] left-[.2rem] border border-solid border-[#000000] bg-white rounded-xl shadow-2xl w-52 h-full overflow-hidden flex flex-col items-center p-3 transform translate-y-[-3rem]">
                        <Image src="/images/cash_out.png" alt="Main meme" width={256} height={200} className="rounded-md" priority />
                        <p className="mt-4 text-center font-bold text-xs text-[#4C545D]">
                            You bad, no worry 😂🔥
                        </p>
                        <p className="text-green-500 text-xs mt-2 font-semibold">You won</p>
                        <p className="text-2xl font-extrabold text-[#4C545D] my-4">₦3,000</p>
                        <div className='text-[#000] bg-[#D0F091] text-xs mt-2 font-semibold rounded-xs p-3'>
                            Flex your wins 🚀
                        </div>
                    </div>
                </section>
            </section>

            <section className='absolute bottom-0 w-full'>
                <Marquee />
                <PurpleFlower className="absolute bottom-0 left-0 h-20 z-40 w-20 transform translate-x-[8rem] translate-y-[4rem] hidden sm:block" />
            </section>

        </section>

    )
}

export default Perks