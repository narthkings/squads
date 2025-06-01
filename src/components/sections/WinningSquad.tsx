'use client'
import React from 'react'
import Image from "next/image";
import { Anek_Gurmukhi } from "next/font/google";
import Button from '../Button';
import { GreenStar, PurpleSvg, YellowSVG } from '@/app/shared';



const anekGurmukhi = Anek_Gurmukhi({
    subsets: ["latin"],
    weight: "800",
});

const WinningSquad = () => {
    return (
        <section className="mx-auto max-w-7xl mt-[12rem] mb-[5rem] px-4 xl:px-0">
            <div className="relative flex flex-col items-center text-center">
                <PurpleSvg className="absolute top-0 left-0 h-15 z-0 md:z-10 w-15 transform translate-x-[2rem] lg:translate-x-[6rem] translate-y-[5rem] lg:translate-y-[10rem] md:hidden xl:block " />

                <div className={`text-4xl md:text-7xl lg:text-8xl ${anekGurmukhi.className}`}>START WINNING <br /> WITH THE SQUAD</div>
                <div className="mb-6 mt-2 text-lg relative z-10">From signing up to winning your first entry, it only takes a few steps</div>
                <Button>Join the community</Button>
            </div>
            <div className="bg-[#232d398e] text-white p-2 md:p-5 xl:p-10 my-10 rounded-3xl mx-auto max-w-6xl relative">
                <div className="flex flex-col gap-6 p-4 md:p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="w-full lg:w-2/5 bg-[#1f2935] rounded-3xl p-6 md:p-12 space-y-4 designx">
                            <Image
                                src="/images/verify.png"
                                alt="checkmark"
                                width={100}
                                height={70}
                                priority
                            />

                            <button className="bg-[#2F3843] text-white font-semibold px-4 py-2 rounded-md shadow-sm">
                                Register
                            </button>
                            <div className="text-2xl font-extrabold">Join the Squads Community</div>
                            <div className="text-[#B6B8BB] text-xs lg:text-sm mt-2">Create your account in seconds with just your name and email address</div>
                        </div>
                        <div className="w-full lg:w-3/5 bg-[#1f2935] rounded-2xl p-6 flex flex-col-reverse lg:flex-row items-center justify-between designx overflow-y-hidden">
                            <Image
                                src="/images/phone_bolt.png"
                                alt="Phone and bolt"
                                width={300}
                                height={600}
                                className="relative -bottom-6 -left-9 hidden lg:block"
                                priority
                            />

                            <Image
                                src="/images/half_screen.png"
                                alt="Phone and bolt"
                                width={400}
                                height={400}
                                className="relative bottom-[-2rem]  block lg:hidden"
                                priority
                            />


                            <div className=" w-full md:w-2/3 flex flex-col justify-center gap-y-3 mt-[1rem] md:mt-[4rem]">
                                <button className="bg-[#2F3843] text-white font-semibold px-4 py-2 rounded-md shadow-sm w-fit">
                                    Fund Wallet
                                </button>
                                <div className="text-2xl font-extrabold text-white">Fund Your Account</div>
                                <div className="text-[#B6B8BB] text-xs lg:text-sm leading-relaxed">
                                    Deposit funds instantly using your preferred payment method to create an entry.
                                    All our payment methods are fast and secure.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center lg:flex-row gap-6">
                        <div className="w-full lg:w-3/5 bg-[#1f2935] rounded-3xl py-7 px-6 designx relative">
                            <Image src="/images/osimen.png" alt="osimen" width={530} height={200} className="rounded-md relative -left-6 mt-5 hidden lg:block" priority />
                            <Image
                                src="/images/osimenxx.png"
                                alt="osimen"
                                width={600}
                                height={600}
                                className="block lg:hidden"
                                priority
                            />
                            <section className="flex flex-col gap-y-4 mt-6 px-2 md:px-6">
                                <button className="bg-[#2F3843] text-white font-semibold px-4 py-2 rounded-md shadow-sm w-fit">
                                    Picks
                                </button>
                                <div className="text-2xl font-extrabold text-white">Create your entry</div>
                                <div className="text-[#B6B8BB] text-xs lg:text-sm leading-relaxed">
                                    Browse the players market, pick more or less on available players <br className='hidden lg:block' /> and create your entry.
                                </div>
                            </section>
                        </div>

                        <div className="w-full lg:w-2/5 bg-[#1f2935] rounded-3xl p-6 space-y-4 designx overflow-y-hidden">
                            <section className="flex flex-col gap-y-4 mt-3.5 pl-0 md:pl-6 w-full md:w-[80%]">
                                <button className="bg-[#2F3843] text-white font-semibold px-4 py-2 rounded-md shadow-sm w-fit">
                                    Cash out
                                </button>
                                <div className="text-2xl font-extrabold text-white">Withdraw your winning</div>
                                <div className="text-[#B6B8BB] text-xs lg:text-sm leading-relaxed">
                                    Your entry is looking green? Withdraw straight to your bank account with ease
                                </div>
                            </section>

                            <section className="px-[1rem]">
                                <div className="relative w-full max-w-md mx-auto h-[200px]">
                                    {/* Left card */}
                                    <div className="absolute left-0 top-[10rem] transform -translate-y-1/2 -rotate-[18.62deg] z-0">
                                        <div className="bg-white rounded-xl shadow-lg w-54 h-[200px] overflow-hidden p-3">
                                            <Image src="/images/cash_out.png" alt="Left meme" width={256} height={200} priority />
                                        </div>
                                    </div>

                                    {/* Right card */}
                                    <div className="absolute right-0 top-[13rem] transform -translate-y-1/2 rotate-[18.62deg] z-0">
                                        <div className="bg-white rounded-xl shadow-lg w-54 h-[200px] overflow-hidden p-3">
                                            <Image src="/images/cash_out.png" alt="Right meme" width={256} height={200} priority />
                                        </div>
                                    </div>

                                    {/* Center card */}
                                    <div className="relative z-10 mx-auto top-[1.3rem] left-[1.2rem] bg-white rounded-xl shadow-2xl w-52 h-[360px] overflow-hidden flex flex-col items-center p-3">
                                        <Image src="/images/cash_out.png" alt="Main meme" width={256} height={200} className="rounded-md" priority />
                                        <p className="mt-4 text-center font-bold text-xs text-[#4C545D]">
                                            You bad, no worry 😂🔥
                                        </p>
                                        <p className="text-green-500 text-xs my-2 font-semibold">You won</p>
                                        <p className="text-2xl font-extrabold text-[#4C545D]">₦1,000,000</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <GreenStar className="absolute bottom-0 left-0 h-10 z-10 w-10 transform translate-x-[-1rem] translate-y-[-9rem] " />
                <YellowSVG className="absolute top-0 right-0 h-15 z-10 w-15 transform translate-x-[2rem] translate-y-[28rem] hidden xl:block" />

            </div>
        </section>
    )
}

export default WinningSquad