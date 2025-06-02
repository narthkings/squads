'use client'

import { Instagram, Logo, Tiktok, Twitter, Youtube } from "@/app/shared";
import BlogPost from "@/components/sections/BlogPost";
import Ecosystem from "@/components/sections/Ecosystem";
import Footer from "@/components/sections/Footer";
import WinningSquad from "@/components/sections/WinningSquad";
import { Gloria_Hallelujah } from "next/font/google";
// import Image from "next/image";
import StreetYarns from "@/components/sections/StreetYarns";
import Features from "@/components/sections/Features";
import Players from "@/components/sections/Players";
import Perks from "@/components/sections/Perks";
import Hero from "@/components/sections/Hero";

import "swiper/css";
import 'swiper/css/grid';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import Button from "@/components/Button";
import Header from "@/components/sections/Header";


const gloriaHallelujah = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {

  return (
    <main className="min-h-screen bg-[#141b23] text-white">
      <header className="w-full bg-[#222C38] lg:bg-[unset]">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-20">
          <nav className="lg:flex items-center gap-6 text-sm hidden">
            <a href="#" className="hover:text-[#D0F091] font-semibold text-white">Home</a>
            <a href="#" className=" hover:text-[#D0F091] font-semibold">Partners</a>
            <a href="#" className="hover:text-[#D0F091] text-white">How to play</a>
            <a href="#" className="hover:text-[#D0F091] text-white">FAQs</a>
          </nav>
          <Logo className="w-40 h-auto" />
          <Header />
          {/* Social Icons */}
          <div className="lg:flex hidden items-center gap-5">
            <a href="#"><Twitter className="w-5 h-5" /></a>
            <a href="#"><Tiktok className="w-5 h-5" /></a>
            <a href="#"><Youtube className="w-5 h-5" /></a>
            <a href="#"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
      </header>


      <Hero />
      <Perks />


      <Players />
      <section className="relative">
        <Features />

        <StreetYarns />
      </section>

      <Ecosystem />
      <WinningSquad />
      <BlogPost />

      <section className="mx-auto max-w-7xl mt-[7rem] mb-[5rem] px-2">
        <div className="w-full relative h-full rounded-3xl border border-[#1F2935] p-12 space-y-4 vertix bg-gradient-to-br from-[#19212A] to-black">
          {/* <div className={`text-8xl text-[#D0F091] ml-14 ${gloriaHallelujah.className}`}>The streets</div> */}
          <div className={`text-8xl text-[#88C80C] ${gloriaHallelujah.className}`}>f**k with</div>
          {/* <div className={`text-8xl relative transform translate-x-[17rem] text-[#D0F091] ${gloriaHallelujah.className}`}>Squads</div> */}
          <div className="flex justify-center">
            <Button>Sign Up on Squads 💸</Button>
          </div>
        </div>

      </section>

      <Footer />
    </main >
  );
}
