'use client';
import React from 'react'
import Image from "next/image";
import { Anek_Gurmukhi, Gloria_Hallelujah } from "next/font/google";

import { Autoplay, Grid, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { YellowSVG } from '@/app/shared';

import "swiper/css";
import 'swiper/css/grid';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { PlayerMarketData } from '@/services/getPlayers';
import { formatDate } from '@/utils/date';
import players from '@/utils/data.json';


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

            <section>

                <Swiper
                    spaceBetween={20}
                    speed={2000}
                    freeMode={true}
                    grid={{
                        rows: 3,        // Number of visible rows
                        fill: "row",    // "row" or "column" filling order
                    }}
                    autoplay={{
                        delay: 1200,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    slidesPerView={3.6}
                    breakpoints={{
                        1728: { slidesPerView: 3.6 },
                        1280: { slidesPerView: 2.9 }, // desktops
                        1024: { slidesPerView: 2.1 },   // laptops
                        768: { slidesPerView: 1.6 },    // tablets
                        0: { slidesPerView: 0.8 },
                    }}
                    modules={[Autoplay, Grid, FreeMode]}
                    className="mySwiper"
                >
                    {players?.map((player: PlayerMarketData) => {
                        return (
                            <SwiperSlide key={player?.player?.id}>

                                <div key={player?.player?.id} className="bg-[#262F3B] h-full w-[30rem] border border-[#2F3843]  rounded-xl p-4 flex items-start gap-x-5 justify-between">
                                    <div className="flex items-start gap-4">
                                        <Image
                                            src={player?.player?.imageUrl}
                                            alt={player?.player?.name}
                                            width={48}
                                            height={48}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div className="">
                                            <p className="text-white text-lg font-semibold">{player?.player?.name}</p>
                                            <p className="text-xs text-[#8F949A] my-1"> Manchester City - {player?.player?.position}</p>
                                            <p className="text-xs text-[#D2D4D7] w-3/5">vs.  Man City on  {formatDate(new Date(player?.game?.startDate))}</p>
                                        </div>
                                    </div>

                                    <section className="flex items-center gap-x-2 w-2/4">
                                        <div className="flex justify-between items-center w-3/4 bg-[#1E252E] border border-[#2F3843] px-3 py-4 rounded-md">
                                            <div className="flex flex-col items-center text-center">
                                                <p className="text-white text-lg font-bold">2.5</p>
                                                <p className="text-xs text-center text-gray-400">Shots on Target</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-y-2 w-3/4 ">
                                            <button className="bg-[#1F2935] text-xs text-white font-semibold py-3 px-4 rounded-md h-[2.7rem]">
                                                More ↑
                                            </button>
                                            <button className="bg-[#1F2935] text-white text-xs font-semibold py-3 px-4 rounded-md h-[2.7rem]">
                                                Less ↓
                                            </button>
                                        </div>
                                    </section>

                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </section>
        </section>
    )
}

export default Players