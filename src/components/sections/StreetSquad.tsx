'use client';

import React from 'react'
import Image from "next/image";
import Button from "@/components/Button";
import { Anek_Gurmukhi, Gloria_Hallelujah } from "next/font/google";
import { CurvyLine, Logo } from '@/app/shared';


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

            <div className="w-full relative h-full rounded-3xl border min-h-[50rem] border-[#1F2935] p-12 space-y-4 vertix hidden 1xl:block">
                <CurvyLine className="absolute top-0 right-0 transform translate-x-[-24rem] translate-y-[27rem] z-10" />
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
                        className={`bg-[#1F2935] rounded-xl p-5 w-[23%] absolute right-0 bottom-0 rotate-[-4deg]  transform translate-x-[-12rem] translate-y-[-20rem] text-[#D2D4D7] ${anekGurmukhi.className}`}
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
                        className={`bg-[#1F2935] rounded-xl p-4 text-[#D2D4D7] w-1/4 ${anekGurmukhi.className} rotate-[6deg] transform translate-x-[-6rem] translate-y-[-15rem] absolute right-0 bottom-0`}
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
                        className={`bg-[#1F2935] rounded-xl p-6 w-[23%] absolute right-0 bottom-0 rotate-[18deg] transform translate-x-[-5rem] translate-y-[-10rem]  text-[#D2D4D7] ${anekGurmukhi.className} z-20`}
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


            {/* second card for smaller screens */}

            <section className="mx-auto max-w-7xl mt-[7rem] mb-[5rem] px-2">
                <div className="w-full relative h-full rounded-3xl border min-h-[50rem] md:min-h-[85rem] border-[#1F2935] p-2 md:p-12 space-y-4 vertix block 1xl:hidden overflow-hidden">
                    <CurvyLine className="absolute top-0 left-0 transform translate-x-[-12rem] md:translate-x-[-9rem] lg:translate-x-[-2rem] translate-y-[18rem] md:translate-y-[34rem] lg:translate-y-[39rem] z-10" />
                    <div
                        className={`bg-[#1A222C] rounded-xl p-5 w-[34%] lg:w-[30%] absolute left-0 top-0 rotate-[2deg] transform translate-x-[1rem] lg:translate-x-[7rem] translate-y-[6rem] lg:translate-y-[5rem] z-20 text-[#D2D4D7] ${anekGurmukhi.className} hidden md:block`}
                    >
                        <div className="space-y-3">
                            <div className="flex flex-col pt-2 text-xs text-gray-400">
                                <p className={`font-semibold text-[#D2D4D7] text-2xl `}>
                                    Be like na individual stats I go dey run for squad now🔥
                                    <span className="text-[#D0F091]">#Squadgame</span>
                                </p>
                                <div className="flex justify-between items-center mt-2">
                                    <p className="text-[#fff] text-sm">{'@Izu__Official'}</p>
                                    <Logo className="w-20 h-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className='hidden md:block'>
                        <div className="rounded-lg w-2/4 transform translate-x-[13rem]  lg:translate-x-[24rem] translate-y-[3rem] absolute left-0 top-0 z-10">
                            <Image
                                src={'/images/sm_4.png'}
                                alt="post"
                                className="rounded-lg "
                                height={120}
                                width={300}
                            />
                        </div>

                        <div
                            className={`bg-[#1A222C] rounded-xl p-5 w-[34%] lg:w-[30%] absolute right-0 top-0 rotate-[12deg] lg:rotate-[9deg] transform translate-x-[-2rem]  md:translate-x-[-2rem] lg:translate-x-[-3rem] translate-y-[5rem]  text-[#D2D4D7] ${anekGurmukhi.className}`}
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
                    </section>



                    <section className="absolute transform translate-x-[1rem] lg:translate-x-[5rem] translate-y-[15rem] md:translate-y-[25rem] lg:translate-y-[23rem]">
                        <div className={`text-5xl md:text-[56px] lg:text-8xl text-[#D0F091] ml-14 ${gloriaHallelujah.className}`}>The streets</div>
                        <div className={`text-5xl md:text-[56px] lg:text-8xl text-[#88C80C] ${gloriaHallelujah.className}`}>f**k with</div>
                        <div className={`text-5xl md:text-[56px] lg:text-8xl absolute transform translate-x-[7rem] sm:translate-x-[9rem] lg:translate-x-[20rem] text-[#D0F091] ${gloriaHallelujah.className}`}>Squads</div>
                    </section>

                    <div className="absolute transform translate-x-[5rem] sm:translate-x-[6rem]  md:translate-x-[14rem] lg:translate-x-[23rem] translate-y-[30rem] sm:translate-y-[26rem] md:translate-y-[45rem] ">
                        <Button>Sign Up on Squads 💸</Button>
                    </div>

                    <section className="flex md:hidden justify-center items-center gap-2 px-2 relative overflow-hidden h-[220px]">
                        <div className="transform rotate-[-12deg] scale-[1.3]">
                            <Image
                                src="/images/sm1.png"
                                alt="post"
                                className="rounded-lg"
                                width={220}
                                height={120}
                            />
                        </div>
                        <div className="transform rotate-0 scale-[1.5] z-10">
                            <Image
                                src="/images/sm_4.png"
                                alt="post"
                                className="rounded-lg"
                                width={240}
                                height={140}
                            />
                        </div>
                        <div className="transform rotate-[12deg] scale-[1.3]">
                            <Image
                                src="/images/sm_3.png"
                                alt="post"
                                className="rounded-lg"
                                width={220}
                                height={120}
                            />
                        </div>
                    </section>

                    <section>

                        <div className={`bg-[#1A222C] rounded-xl p-5  w-[40%] lg:w-[23%] absolute left-0 bottom-0 rotate-[-8deg] lg:rotate-[-8deg]  transform translate-x-[2rem] lg:translate-x-[7rem] translate-y-[-10rem] text-[#D2D4D7] ${anekGurmukhi.className} hidden md:block`}
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
                            className={`bg-[#1A222C] rounded-xl p-4 text-[#D2D4D7] w-2/5 lg:w-2/7 ${anekGurmukhi.className} rotate-[5deg] lg:rotate-[6deg] transform translate-x-[12rem] lg:translate-x-[20rem] translate-y-[-1rem] lg:translate-y-[-2rem] absolute left-0 bottom-0 hidden md:block`}
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
                            className={`bg-[#1A222C] rounded-xl w-[40%] lg:w-[28%] p-6 absolute right-0 bottom-0 rotate-[1deg]  transform translate-x-[-1rem] lg:translate-x-[-10rem]  translate-y-[-4rem] text-[#D2D4D7] ${anekGurmukhi.className} hidden md:block`}
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
                    {/* <section className='flex md:hidden position absolute bottom-0'>
                        <div className="rounded-lg rotate-[-12deg]">
                            <Image
                                src={'/images/sm1.png'}
                                alt="post"
                                className="rounded-lg "
                                height={120}
                                width={650}
                            />
                        </div>
                        <div className="rounded-lg rotate-12">
                            <Image
                                src={'/images/sm_2.png'}
                                alt="post"
                                className="rounded-lg"
                                height={120}
                                width={650}
                            />
                        </div>
                        <div className="rounded-lg z-10">
                            <Image
                                src={'/images/sm_3.png'}
                                alt="post"
                                className="rounded-lg"
                                height={120}
                                width={650}
                            />
                        </div>
                    </section> */}
                    <section className="absolute bottom-0 left-1/2 -translate-x-1/2 flex md:hidden justify-center items-end gap-2 px-2 h-[260px] w-full overflow-hidden">
                        {/* Left image (rotated and behind) */}
                        <div className="rotate-[-12deg] scale-[1.4] z-0">
                            <Image
                                src="/images/sm1.png"
                                alt="post"
                                className="rounded-lg"
                                width={200}
                                height={120}
                            />
                        </div>

                        {/* Center image (on top) */}
                        <div className="z-10 scale-[1.6]">
                            <Image
                                src="/images/sm_2.png"
                                alt="post"
                                className="rounded-lg"
                                width={240}
                                height={140}
                            />
                        </div>

                        {/* Right image (rotated and behind) */}
                        <div className="rotate-[12deg] scale-[1.4] z-0">
                            <Image
                                src="/images/sm_3.png"
                                alt="post"
                                className="rounded-lg"
                                width={200}
                                height={120}
                            />
                        </div>
                    </section>

                </div>
            </section>

            {/* transform translate-x-[-5rem] translate-y-[-10rem] */}
        </section>
    )
}

export default StreetSquad