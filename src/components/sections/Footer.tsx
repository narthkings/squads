'use client'
import { FooterLogo, Tiktok, Rated18, Twitter, Youtube, Instagram } from '@/app/shared'
import React from 'react'

const Footer = () => {
    return (
        <footer className="flex lg:flex-row flex-col justify-between items-start gap-6 mx-auto max-w-7xl px-4 xl:px-0">
            <section className="rounded-3xl border-1 border-[#2A343F] h-full text-xs sm:text-sm p-8 sm:p-10 flex flex-col gap-y-4 sm:gap-y-5 flex-1/2">
                <FooterLogo className="w-40 h-auto" />
                <div className="text-[#797F86] my-0 xl:my-3">
                    Squads Daily Fantasy  uses official league statistics
                    provided by reputable partners and only includes statistics
                    from sporting events the relevant league deems to be official. Squads
                    is not affiliated or connected with sports teams, and/or players displayed on its platform.
                </div>
                <div>
                    Want to reach us? <a href="#" className="text-[#D0F091]">sup@squads.game</a>
                </div>
            </section>

            <section className="flex flex-col justify-between flex-1/2 gap-y-6 w-full h-full">
                <section className="rounded-3xl border-1 border-[#2A343F] p-6 xl:p-10 flex flex-col gap-y-5">
                    <nav className="flex items-center gap-x-2 sm:gap-x-6 text-[9px] lg:text-[10px] xl:text-sm font-bold">
                        <a href="#" className="hover:text-[#D0F091] font-semibold text-white">How To Play</a>
                        <a href="#" className="hover:text-[#D0F091] text-white">FAQs</a>
                        <a href="#" className=" hover:text-[#D0F091] font-semibold">Terms</a>
                        <a href="#" className="hover:text-[#D0F091] text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-[#D0F091] text-white">Responsible Gaming</a>
                    </nav>
                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-x-8">
                            <a href="#"><Twitter className="w-5 xl:w-7 h-5 xl:h-7" /></a>
                            <a href="#"><Tiktok className="w-5 xl:w-7 h-5 xl:h-7" /></a>
                            <a href="#"><Youtube className="w-5 xl:w-7 h-5 xl:h-7" /></a>
                            <a href="#"><Instagram className="w-5 xl:w-7 h-5 xl:h-7" /></a>
                        </div>

                        <div>
                            <Rated18 className="w-5 lg:w-7 h-5 lg:h-7" />
                        </div>
                    </div>
                </section>
                <section className="rounded-3xl border-1 border-[#2A343F] p-8 lg:p-10 text-[#797F86] text-xs lg:text-sm flex items-center justify-center font-medium">
                    Copyright © {new Date().getFullYear()} SquadsDFS. All Rights Reserved.
                </section>
            </section>
        </footer>
    )
}

export default Footer