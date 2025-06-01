'use client';
import React from 'react'
import Image from "next/image";
import { Anek_Gurmukhi, Gloria_Hallelujah } from "next/font/google";
import { LightBlue, PinkSvg } from '@/app/shared';



const anekGurmukhi = Anek_Gurmukhi({
    subsets: ["latin"],
    weight: "800",
});
const gloriaHallelujah = Gloria_Hallelujah({
    subsets: ["latin"],
    weight: "400",
});


const Features = () => {
    return (
        <section className='relative pt-[3rem] md:mt-[8rem]'>
            <Image
                alt="signup"
                src="/images/zigzag.png"
                // fill
                height={900}
                width={900}
                className="pointer-events-none w-full absolute inset-0 z-0 opacity-20 h-[60rem]"
                priority
            />
            <section className="mx-auto max-w-7xl transform translate-y-[5rem] z-20">
                <div className="flex flex-col items-center text-center relative z-20">
                    <div className={`text-4xl md:text-7xl lg:text-8xl text-[#D2D4D7] ${anekGurmukhi.className}`}>WHY THE STREET <span className={`${gloriaHallelujah.className} text-[#D0F091]`}>F**k</span> <br />WITH SQUAD</div>
                    <div className="mb-6 mt-2 max-w-md text-[#D2D4D7] hidden md:block">
                        Enjoy the swift and sweet benefits squads have for you.
                        We are here  for you 100% any day anytime!</div>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-12 mt-[7rem] px-4 relative">
                    <div className="relative bg-gradient-to-b from-[#232D39] to-[#000000]  rounded-2xl p-6 w-[260px] transform -rotate-[-16deg] md:-rotate-[4deg] -translate-y-[3rem] md:-translate-y-[1rem] z-10 translate-x-[0rem] lg:translate-x-[5rem]">
                        <LightBlue className="absolute top-0 left-0 h-10 z-10 w-10 transform translate-x-[-1.8rem] translate-y-[-.2rem] " />
                        <div className="mb-4 flex justify-center">
                            <Image src="/options.svg" width={100} height={100} alt="Icon" className="pointer-events-none" />
                        </div>
                        <h3 className="text-xl font-bold text-[#D0F091] mb-2">Numerous Options</h3>
                        <p className="text-[10px] text-white">
                            Bet Your Way with Endless Options! No matter your game,
                            we’ve got the odds, the excitement, and the options just for you!
                        </p>
                    </div>

                    <div className="bg-gradient-to-b from-[#104333] to-[#28A981]  rounded-2xl p-6 w-[260px] z-20 transform -rotate-[3deg] md:-rotate-[-6deg] -translate-y-[2.5rem] translate-x-[0.8rem] lg:translate-x-[3.8rem]">
                        <div className="mb-4 flex justify-center">
                            <Image src="/instant_cashout.svg" width={100} height={100} alt="Icon" className="pointer-events-none" />
                        </div>
                        <h3 className="text-xl font-bold text-[#D0F091] mb-2">Instant Cashout</h3>
                        <p className="text-[10px] text-white">
                            Say goodbye to waiting! With Squads, you can cash out your funds instantly—any time,
                            any day. Whether it&apos;s a weekend or midnight, your money is just a tap away. 🚀
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 w-[260px] z-20 transform rotate-[4deg] -translate-y-[3rem] md:-translate-y-[-1.5rem] -translate-x-[2rem] md:-translate-x-[-2rem]">
                        <div className="mb-4 flex justify-center">
                            <Image src="/fast_deposit.svg" width={100} height={100} alt="Icon" className="pointer-events-none" />
                        </div>
                        <h3 className="text-xl font-bold text-[#20262E] mb-2">Fast Deposit</h3>
                        <p className="text-[10px] text-[#353E49]">
                            Don’t let slow transactions hold you back. With Squads, you can deposit funds
                            instantly and stay in the game. Your winning streak starts here!&quot;🚀
                        </p>
                    </div>

                    <div className="relative py-10 bg-gradient-to-b from-[#FFC2F7] to-[#FFFBFD] rounded-2xl p-6 w-[260px] z-10 transform rotate-[-5deg] -translate-y-[3rem]  md:-translate-y-[1rem] -translate-x-[-1rem]">
                        <div className="mb-4 flex justify-center">
                            <Image src="/bonus.svg" width={100} height={100} alt="Icon" className="pointer-events-none" />
                        </div>
                        <h3 className="text-xl font-bold text-[#20262E] mb-2">Bonuses & Rewards</h3>
                        <p className="text-[10px] text-[#353E49]">
                            No dey hide updates!!!! Invite your friends and family to join squads
                            and get paid N1000 when they use your referral link🤑
                        </p>
                        <PinkSvg className="absolute bottom-0 right-0 h-10 z-10 w-10 transform translate-x-[1.3rem] translate-y-[-2rem] " />
                    </div>
                </div>

            </section>
        </section>

    )
}

export default Features