'use client';

import React from 'react'
import Image from "next/image";
import Button from "@/components/Button";
import { Anek_Gurmukhi, Gloria_Hallelujah } from "next/font/google";
import { Logo } from '@/app/shared';


const gloriaHallelujah = Gloria_Hallelujah({
    subsets: ["latin"],
    weight: "400",
});
const anekGurmukhi = Anek_Gurmukhi({
    subsets: ["latin"],
    weight: "800",
});

const StreetSquad = () => {
    return (
        <section className="mx-auto max-w-7xl mt-[7rem] mb-[5rem] px-2 relative">

            <div className="w-full relative h-full rounded-3xl border min-h-[50rem] border-[#1F2935] p-12 space-y-4 vertix hidden xl:block">
                <section>
                    <div
                        className={`bg-[#262F3B] rounded-xl p-5 w-[23%] absolute left-0 bottom-0 rotate-[-8deg] transform translate-x-[3rem] translate-y-[-14rem]  text-[#D2D4D7] ${anekGurmukhi.className}`}
                    >
                        <div className="space-y-3">
                            <div className="flex flex-col pt-2 text-xs text-gray-400">
                                <p className={`font-semibold text-[#D2D4D7] text-2xl `}>
                                    @SquadsDFS is real gee is here 🥰🥰🥰🥰🥰🥰🔥🔥🔥🔥🔥🔥🔥🔥🔥
                                    <span className="text-[#D0F091]">#Squadgame</span>
                                </p>
                                <div className="flex justify-between items-center mt-2">
                                    <p className="text-[#fff] text-sm">{'@Izu__Official'}</p>
                                    <Logo className="w-20 h-auto" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg w-2/4 transform translate-x-[12rem] translate-y-[-3rem] absolute left-0 bottom-0 ">
                        <Image
                            src={'/images/img.png'}
                            alt="post"
                            className="rounded-lg "
                            height={120}
                            width={280}
                        />
                    </div>
                </section>

                <section className="absolute transform translate-x-[5rem]">
                    <div className={`text-8xl text-[#D0F091] ml-14 ${gloriaHallelujah.className}`}>The streets</div>
                    <div className={`text-8xl text-[#88C80C] ${gloriaHallelujah.className}`}>f**k with</div>
                    <div className={`text-8xl relative transform translate-x-[17rem] text-[#D0F091] ${gloriaHallelujah.className}`}>Squads</div>
                </section>


                <section>
                    <div
                        className={`bg-[#262F3B] rounded-xl p-5 w-[23%] absolute right-0 bottom-0 rotate-[-4deg]  transform translate-x-[-12rem] translate-y-[-20rem] text-[#D2D4D7] ${anekGurmukhi.className}`}
                    >
                        <div className="space-y-3">
                            <div className="flex flex-col pt-2 text-xs text-gray-400">
                                <p className={`font-semibold text-[#D2D4D7] text-2xl `}>
                                    If the team like, make dem lose, my entry should sha be green😌🔥
                                    <span className="text-[#D0F091]">#Squadgame</span>
                                </p>
                                <div className="flex justify-between items-center mt-2">
                                    <p className="text-[#fff] text-sm">{'@Izu__Official'}</p>
                                    <Logo className="w-20 h-auto" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`bg-[#262F3B] rounded-xl p-4 text-[#D2D4D7] w-1/4 ${anekGurmukhi.className} rotate-[6deg] transform translate-x-[-6rem] translate-y-[-15rem] absolute right-0 bottom-0`}
                    >
                        <div className="rounded-lg">
                            <Image
                                src={'/images/ranks.png'}
                                alt="post"
                                className="rounded-lg w-full"
                                height={120}
                                width={200}
                            />
                        </div>

                        <div className="space-y-3">
                            <div className="flex flex-col pt-2 text-xs text-gray-400">
                                <div className="flex justify-between items-center mt-2">
                                    <p className="text-[#fff] text-sm">{'@Izu__Official'}</p>
                                    <Logo className="w-20 h-auto" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div
                        className={`bg-[#262F3B] rounded-xl p-6 w-[23%] absolute right-0 bottom-0 rotate-[18deg] transform translate-x-[-5rem] translate-y-[-10rem]  text-[#D2D4D7] ${anekGurmukhi.className}`}
                    >
                        <div className="space-y-3">
                            <div className="flex flex-col pt-2 text-xs text-gray-400">
                                <p className={`font-semibold text-[#D2D4D7] text-2xl `}>
                                    Broooo i just noticed squads used the picture of  GOAT for Lionel Messi in their platform and it’s bursting  my brain 😂
                                    <span className="text-[#D0F091]">#Squadgame</span>
                                </p>
                                <div className="flex justify-between items-center mt-2">
                                    <p className="text-[#fff] text-sm">{'@Izu__Official'}</p>
                                    <Logo className="w-20 h-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="flex justify-center absolute bottom-0 mx-auto transform translate-x-[30rem] translate-y-[-8rem]">
                    <Button>Sign Up on Squads 💸</Button>
                </div>
            </div>


            {/* second card */}

            <div className="w-full relative h-full rounded-3xl border min-h-[40rem] md:min-h-[60rem] border-[#1F2935] p-12 space-y-4 vertix block xl:hidden">

                {/* <section className="absolute transform translate-x-[20%] translate-y-[12rem] lg:translate-y-[10rem]">
                    <div className={`text-4xl md:text-7xl text-[#D0F091] ml-14 ${gloriaHallelujah.className}`}>The streets</div>
                    <div className={`text-4xl md:text-7xl text-[#88C80C] ${gloriaHallelujah.className}`}>f**k with</div>
                    <div className={`text-4xl md:text-7xl absolute transform translate-x-[13rem] lg:translate-x-[13rem] text-[#D0F091] ${gloriaHallelujah.className}`}>Squads</div>
                </section> */}

                <div className="flex justify-center  mx-auto transform translate-y-[10rem]  md:translate-y-[28rem]">
                    <Button>Sign Up on Squads 💸</Button>
                </div>




                <section className='relative left-0 bottom-0 transform translate-x-[-6rem] translate-y-[60rem] lg:translate-y-[55rem] hidden md:block'>

                    <div
                        className={`bg-[#262F3B] rounded-xl p-5 md:w-[35%] lg:w-[25%]  absolute left-0 bottom-0 rotate-[-6deg]  transform md:translate-x-[5rem] lg:translate-x-[16rem] translate-y-[-6rem] text-[#D2D4D7] ${anekGurmukhi.className}`}
                    >
                        <div className="space-y-3">
                            <div className="flex flex-col pt-2 text-xs text-gray-400">
                                <p className={`font-semibold text-[#D2D4D7] text-2xl `}>
                                    If the team like, make dem lose, my entry should sha be green😌🔥
                                    <span className="text-[#D0F091]">#Squadgame</span>
                                </p>
                                <div className="flex justify-between items-center mt-2">
                                    <p className="text-[#fff] text-sm">{'@Izu__Official'}</p>
                                    <Logo className="w-20 h-auto" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`bg-[#262F3B] rounded-xl p-4 text-[#D2D4D7] w-1/4 md:w-3/7 lg:w-1/4 ${anekGurmukhi.className} rotate-[6deg] transform md:translate-x-[-5rem] lg:translate-x-[-18rem] translate-y-[-1rem] absolute right-0 bottom-0`}
                    >
                        <div className="rounded-lg">
                            <Image
                                src={'/images/ranks.png'}
                                alt="post"
                                className="rounded-lg w-full"
                                height={120}
                                width={200}
                            />
                        </div>

                        <div className="space-y-3">
                            <div className="flex flex-col pt-2 text-xs text-gray-400">
                                <div className="flex justify-between items-center mt-2">
                                    <p className="text-[#fff] text-sm">{'@Izu__Official'}</p>
                                    <Logo className="w-20 h-auto" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`bg-[#262F3B] rounded-xl p-6 w-[80%]  md:w-[40%] lg:w-[30%] absolute right-0 bottom-0 rotate-[1deg] transform translate-x-[9rem] md:translate-x-[4rem] lg:translate-x-[-5rem] md:translate-y-[-2rem]  text-[#D2D4D7] ${anekGurmukhi.className}`}
                    >
                        <div className="space-y-3">
                            <div className="flex flex-col pt-2 text-xs text-gray-400">
                                <p className={`font-semibold text-[#D2D4D7] text-xl `}>
                                    Broooo i just noticed squads used the picture of  GOAT for Lionel Messi in their platform and it’s bursting  my brain 😂
                                    <span className="text-[#D0F091]">#Squadgame</span>
                                </p>
                                <div className="flex justify-between items-center mt-2">
                                    <p className="text-[#fff] text-sm">{'@Izu__Official'}</p>
                                    <Logo className="w-20 h-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='flex absolute bottom-0 left-0 translate-x-[-4rem]  md:hidden'>
                    <div className="rounded-lg rotate-[-12deg] transform translate-y-[-2rem] translate-x-[8rem]">
                        <Image
                            src={'/images/sm1.png'}
                            alt="post"
                            className="rounded-lg "
                            // height={120}
                            // width={650}
                            fill
                        />
                    </div>
                    <div className="rounded-lg rotate-12 transform translate-y-[-2rem] translate-x-[4rem]">
                        <Image
                            src={'/images/sm_2.png'}
                            alt="post"
                            className="rounded-lg"
                            // height={120}
                            // width={650}
                            fill
                        />
                    </div>
                    <div className="rounded-lg z-10">
                        <Image
                            src={'/images/sm_3.png'}
                            alt="post"
                            className="rounded-lg "
                            // height={120}
                            // width={650}
                            fill
                        />
                    </div>
                </section>
            </div>
        </section>
    )
}

export default StreetSquad