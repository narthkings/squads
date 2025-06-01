'use client';
import React, { useMemo } from 'react'
import { Anek_Gurmukhi } from "next/font/google";
import Image from "next/image";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Logo, Underline } from '@/app/shared';

import "swiper/css";
import 'swiper/css/autoplay';

const anekGurmukhi = Anek_Gurmukhi({
    subsets: ["latin"],
    weight: "800",
});


const StreetYarns = () => {
    const posts = useMemo(() => [
        {
            id: 2,
            username: "@Tau__Official",
            text: "Broooo I just noticed squads used the picture of GOAT for Messi and it’s bursting my brain 😂 #Squadgame",
            image: "",
        },
        {
            id: 1,
            username: "@ViktohLeo",
            text: "First time playing on squad. First of many 🫱 #Squadgame",
            image: "/images/ranks.png",
        },
        {
            id: 3,
            username: "@UDTrey",
            text: "",
            image: "/images/haaland.png",
        },
        {
            id: 4,
            username: "@Ayomide2986",
            text: "@SquadsDFS is real gee is here 😭😭😭🔥🔥🔥🔥🔥🔥🔥 #Squadgame",
            image: "",
        },
        {
            id: 5,
            username: "@Tau__Official",
            text: "Broooo I just noticed squads used the picture of GOAT for Messi and it’s bursting my brain 😂 #Squadgame",
            image: "/images/hug.png",
        },
        {
            id: 6,
            username: "@Tau__Official",
            text: "Them say na squad money dey now oo i don leave ***** for you na 🚀 #Squadgame",
            image: "",
        },

    ], []);

    const secondPost = useMemo(() => [

        {
            id: 7,
            username: "@Tau__Official",
            text: "",
            image: "/images/hug.png",
        },
        {
            id: 8,
            username: "@Ayomide2986",
            text: "Broo i just noticed squads used the picture of GOAT for Messi and it’s bursting my brain 😂 #Squadgame",
            image: "",
        },
        {
            id: 9,
            username: "@Ayomide2986",
            text: "@SquadsDFS is real gee is here 😭😭😭🔥🔥🔥🔥🔥🔥🔥 #Squadgame",
            image: "/images/arne.png",
        },
        {
            id: 10,
            username: "@Ayomide2986",
            text: "love the way @SquadDFS dey interact with their users, they dey always dey respond to my questions and suggestions. #Squadgame",
            image: "",
        },
        {
            id: 11,
            username: "@Ayomide2986",
            text: "Be like na individual stats i go dey run for Squad now 🔥. #Squadgame",
            image: "",
        },
        {
            id: 12,
            username: "@Ayomide2986",
            text: "The Manchester Derby at Old Trafford end goalless 🔥. #MUNMCI",
            image: "",
        },
        // add more posts as needed
    ], []);

    return (
        <section className='pt-[2rem] md:pt-[5rem] pb-[10rem]'>
            <div className="flex flex-col items-center text-center mt-[10rem] mb-[9rem]">
                <div className="relative">
                    <div className={`text-4xl md:text-6xl font-extrabold text-[#D2D4D7] ${anekGurmukhi.className}`}>WORDS ON THE <br className='block md:hidden' /> STREET</div>
                    <Underline className="absolute top-0 right-0 h-50 z-10 w-30 md:w-50 transform translate-x-[-4rem] md:translate-x-[1rem] translate-y-[-1rem] md:translate-y-[-2.5rem] " />
                </div>
            </div>

            <Swiper
                centeredSlides={false}
                spaceBetween={20}
                loop={true}
                speed={8000}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                slidesPerView={5}
                breakpoints={{
                    320: {
                        slidesPerView: 1.5, // mobile view (Figma style)
                        // centeredSlides: true,
                    },
                    480: {
                        slidesPerView: 1.2,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1280: {
                        slidesPerView: 5,
                    },
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {posts.map((post) => (
                    <SwiperSlide key={post.id}>
                        <div
                            className={`bg-[#262F3B] rounded-xl p-4 text-[#D2D4D7] ${anekGurmukhi.className}`}
                        >
                            {post.image && (
                                <div className="h-auto w-full overflow-hidden rounded-lg">
                                    <Image
                                        src={post.image}
                                        alt="post"
                                        className="w-full object-contain rounded-lg"
                                        height={160}
                                        width={300}
                                    />
                                </div>
                            )}
                            <div className="space-y-3">
                                <div className="flex flex-col pt-2 text-xs text-gray-400">
                                    <p className={`font-semibold text-[#D2D4D7] text-2xl `}>{post.text ? post.text : null}</p>
                                    <div className="flex justify-between items-center mt-2">
                                        <p className="text-[#fff] text-sm">{post.username}</p>
                                        <Logo className="w-20 h-auto" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="mt-[4rem]">
                <Swiper
                    centeredSlides={false}
                    spaceBetween={20}
                    speed={8000}
                    loop={true}
                    autoplay={{
                        delay: 1200,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    slidesPerView={5}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.5, // mobile view (Figma style)
                            // centeredSlides: true,
                        },
                        480: {
                            slidesPerView: 1.2,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 5,
                        },
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {secondPost.map((post) => (
                        <SwiperSlide key={post.id}>
                            <div
                                className={`bg-[#262F3B] rounded-xl p-4 text-[#D2D4D7] ${anekGurmukhi.className}`}
                            >
                                {post.image && (
                                    <div className="h-auto w-full overflow-hidden rounded-lg">
                                        <Image
                                            src={post.image}
                                            alt="post"
                                            className="w-full object-contain rounded-lg"
                                            height={160}
                                            width={300}
                                        />
                                    </div>
                                )}
                                <div className="space-y-3">
                                    <div className="flex flex-col pt-2 text-xs text-gray-400">
                                        <p className={`font-semibold text-[#D2D4D7] text-2xl `}>{post.text ? post.text : null}</p>
                                        <div className="flex justify-between items-center mt-2">
                                            <p className="text-[#fff] text-sm">{post.username}</p>
                                            <Logo className="w-20 h-auto" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default StreetYarns