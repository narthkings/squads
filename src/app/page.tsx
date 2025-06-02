'use client'

import { Instagram, Logo, Tiktok, Twitter, Youtube } from "@/app/shared";
import BlogPost from "@/components/sections/BlogPost";
import Ecosystem from "@/components/sections/Ecosystem";
import Footer from "@/components/sections/Footer";
import WinningSquad from "@/components/sections/WinningSquad";
import StreetYarns from "@/components/sections/StreetYarns";
import Features from "@/components/sections/Features";
import Players from "@/components/sections/Players";
import Perks from "@/components/sections/Perks";
import Hero from "@/components/sections/Hero";

import "swiper/css";
import 'swiper/css/grid';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import Header from "@/components/sections/Header";
import StreetSquad from "@/components/sections/StreetSquad";


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

      <StreetSquad />

      <Footer />
    </main >
  );
}
