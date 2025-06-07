'use client';

import React from 'react'
import Image from "next/image";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import 'swiper/css/grid';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { PlayerMarketData } from '@/services/getPlayers';
import { formatDate } from '@/utils/date';

const SwiperBlock = ({ players, reverse = false }: { players: PlayerMarketData[]; reverse?: boolean }) => (
    <Swiper
        spaceBetween={20}
        speed={2000}
        autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: reverse,
        }}
        freeMode={true}
        loop={true}
        slidesPerView={3.6}
        breakpoints={{
            1728: { slidesPerView: 3.6 },
            1280: { slidesPerView: 2.9 },
            1024: { slidesPerView: 2.1 },
            768: { slidesPerView: 1.6 },
            0: { slidesPerView: 0.8 },
        }}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
    >
        {players.map((player: PlayerMarketData) => (
            <SwiperSlide key={player.player.id}>
                <div className="bg-[#262F3B] h-full w-[30rem] border border-[#2F3843] rounded-xl p-4 flex items-start gap-x-5 justify-between">
                    <div className="flex items-start gap-4">
                        <Image
                            src={player.player.imageUrl}
                            alt={player.player.name}
                            width={48}
                            height={48}
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-white text-md font-semibold">{player.player.name}</p>
                            <p className="text-xs text-[#8F949A] my-1">{player.player.position}</p>
                            <p className="text-xs text-[#D2D4D7] w-3/5">vs. {player.game.awayTeam.name} on {formatDate(new Date(player.game.startDate))}</p>
                        </div>
                    </div>
                    <section className="flex items-center gap-x-2 w-2/4">
                        <div className="flex justify-between items-center w-3/4 bg-[#1E252E] border border-[#2F3843] px-3 py-4 rounded-md">
                            <div className="flex flex-col items-center text-center">
                                <p className="text-white text-lg font-bold">2.5</p>
                                <p className="text-xs text-center text-gray-400">Shots on Target</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2 w-3/4">
                            <button className="bg-[#1F2935] text-xs text-white font-semibold py-3 px-4 rounded-md h-[2.7rem]">More ↑</button>
                            <button className="bg-[#1F2935] text-white text-xs font-semibold py-3 px-4 rounded-md h-[2.7rem]">Less ↓</button>
                        </div>
                    </section>
                </div>
            </SwiperSlide>
        ))}
    </Swiper>
);

export default SwiperBlock