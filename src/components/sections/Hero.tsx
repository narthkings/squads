'use client';
import React from 'react'
import Button from '../Button';
import { PurpleSvg, Boom, GreenSpiral, BlueFlower, OrangeSpiral, Flame } from '@/app/shared';

const Hero = () => {
    return (
        <section>
            <section className="relative w-full h-[70vh] xl:h-[95vh]">


                <PurpleSvg className="absolute top-0 right-0 w-5 h-5 xl:w-12 xl:h-12 transform translate-x-[-4rem] md:translate-x-[-10rem] lg:translate-x-[-17rem] 4xl:translate-x-[-25rem] translate-y-[8.5rem] xl:translate-y-[4rem] z-10" />
                <Boom className="absolute top-0 right-0 w-24 h-24 xl:w-40 xl:h-40 transform translate-x-[-2rem]  xl:translate-x-[-4rem] translate-y-[1rem] xl:translate-y-[8rem] z-10" />
                <GreenSpiral className="absolute top-0 left-0 w-10 h-10 xl:w-16 xl:h-16 transform translate-x-[4rem] xl:translate-x-[10rem] translate-y-[3rem] xl:translate-y-[9rem] z-10" />


                <section className="relative z-10 mx-auto max-w-7xl flex flex-col items-center justify-center text-center px-4 transform translate-y-[9rem]">
                    <div className="bg-[#12DD27] text-[#104333] px-6 py-4 sm:px-8 sm:py-5  text-3xl sm:text-5xl xl:text-8xl font-extrabold border border-[#D0F091] rounded-[1.4rem] xl:rounded-[3.5rem] transform rotate-[3deg]">
                        The New way to
                    </div>
                    <div className="relative">
                        <div className="bg-[#FD89ED] text-[#540835] px-6 py-4 sm:px-8 sm:py-5  text-3xl sm:text-5xl xl:text-8xl font-extrabold border border-[#FFC2F7] rounded-[1.4rem] xl:rounded-[3.5rem] transform -rotate-[2deg]">
                            Win Money on Sports
                        </div>
                        <BlueFlower className="absolute bottom-0 left-0 h-10 xl:h-20 z-10 w-10 xl:w-20 transform translate-x-[1rem] translate-y-[5rem] xl:translate-y-[3.5rem]" />
                    </div>

                    <div className="mt-12 md:mt-15 mb-8 max-w-xs text-[#D2D4D7] font-medium">
                        Just pick <span className="font-bold">More</span>  or <span className="font-bold">Less </span>
                        on player stats and win up to  <span className="text-[#D0F091]">100X your cash!</span>
                    </div>
                    <Button>Wanna play? Tap in 💸</Button>
                </section>

                <OrangeSpiral className="absolute bottom-0 right-0 w-10 h-10 xl:w-16 xl:h-16 transform translate-x-[-3rem] xl:translate-x-[-23rem]  translate-y-[-6rem] xl:translate-y-[-25rem] z-10" />
                <Flame className="absolute bottom-0 left-0 w-20 h-20 xl:w-32 xl:h-32 transform translate-x-[0rem]  lg:translate-x-[10rem]  translate-y-[0rem] xl:translate-y-[-18rem] z-10" />
                <div className="absolute inset-0 bottom-0 bg-cover bg-center bg-no-repeat w-full h-[100%] transform translate-y-[9rem] z-0 decoration" />
            </section>
        </section>
    )
}

export default Hero