'use client'
import React from 'react'
import Image from "next/image";
import { Anek_Gurmukhi } from "next/font/google";
import Button from '../Button';
import { GreenStar } from '@/app/shared';

const anekGurmukhi = Anek_Gurmukhi({
    subsets: ["latin"],
    weight: "800",
});


const Ecosystem = () => {
    return (
        <section className="relative bg-[#141b23] w-full h-[130rem] md:h-[69rem] lg:h-[79rem] xl:h-[85rem] ecoSystem">
            {/* <Image
                alt="signup"
                src="/wavy.png"
                fill
                // height={900}
                // width={900}
                className="pointer-events-none w-full absolute inset-0 h-full z-0 "
                priority
            /> */}
            <GreenStar className="absolute top-0 left-0 h-20 z-40 w-20 transform translate-x-[27rem] translate-y-[-1rem] hidden sm:block" />
            {/* Content Section */}
            <section className="relative z-10 mx-auto max-w-7xl flex flex-col items-center justify-center text-center px-4">
                <div className={`text-5xl md:text-7xl lg:text-8xl ${anekGurmukhi.className} text-[#271437] mt-[15rem]`}>JOIN AN ECOSYSTEM <br className='hidden md:block' /> THAT KEEPS GIVING</div>

                <div className="mt-4 mb-8 max-w-3xl text-[#271437] font-medium">
                    Our values are more than just words—they are the guiding principles
                    that shape our company culture, help us navigate challenges,
                    and ensure we stay true to our purpose.
                </div>
                <Button>Sign Up on Squads 💸</Button>
                <div className="flex flex-col md:flex-row justify-center gap-[-2rem] my-[10rem] relative">
                    {/* Left card */}
                    <div className="transform -rotate-[-4deg] md:-rotate-[4deg] -translate-y-[4rem] z-10 translate-x-0 md:translate-x-[5rem]">
                        <Image
                            alt="signup"
                            src="/images/signup.png"
                            height={450}
                            width={450}
                            className="rounded-lg pointer-events-none"
                            priority
                        />
                    </div>

                    {/* Center card */}
                    <div className="z-20 transform rotate-[-2deg] translate-y-[-9rem] md:-translate-y-[1.4rem] translate-x-[-1rem] md:translate-x-[3rem] md:block hidden">
                        <Image
                            alt="deposit"
                            src="/images/deposit.png"
                            height={450}
                            width={450}
                            className="rounded-lg pointer-events-none"
                            priority
                        />
                    </div>

                    <div className="z-20 transform rotate-[1deg] translate-y-[-9rem] md:-translate-y-[1.4rem] translate-x-[.5rem] md:translate-x-[3rem] block md:hidden">
                        <Image
                            alt="deposit"
                            src="/images/deposit.png"
                            height={350}
                            width={350}
                            className="rounded-lg pointer-events-none"
                            priority
                        />
                    </div>

                    {/* Right card */}

                    <div className="transform md:rotate-[-2deg] -translate-y-[12rem] md:-translate-y-[4rem] translate-x-[1rem]  md:-translate-x-[1.4rem] z-10 md:block hidden">
                        <Image
                            alt="sneaky_cash"
                            src="/images/sneaky_cash.png"
                            height={450}
                            width={450}
                            className="rounded-lg pointer-events-none"
                            priority
                        />
                    </div>
                    <div className="transform rotate-[0deg] -translate-y-[11rem] md:-translate-y-[4rem] translate-x-[1rem]  md:-translate-x-[1.4rem] z-10 block md:hidden">
                        <Image
                            alt="sneaky_cash"
                            src="/images/sneaky_cash2.png"
                            height={350}
                            width={350}
                            className="rounded-lg pointer-events-none"
                            priority
                        />
                    </div>
                </div>

            </section>
        </section>
    )
}

export default Ecosystem