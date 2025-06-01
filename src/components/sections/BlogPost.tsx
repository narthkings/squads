'use client'
import React from 'react'
import { Gloria_Hallelujah, Anek_Gurmukhi } from "next/font/google";
import { BlogCard } from '../BlogCard'
import Button from '../Button'


const gloriaHallelujah = Gloria_Hallelujah({
    subsets: ["latin"],
    weight: "400",
});

const anekGurmukhi = Anek_Gurmukhi({
    subsets: ["latin"],
    weight: "800",
});

const BlogPost = () => {

    const blogPosts = [
        {
            id: 1,
            image: "/images/image_1.png",
            category: "News",
            highlightColor: "text-[#218208]",
            title: "Introducing: The new way to win money on sports .",
            description: "Lorem ipsum dolor sit amet consectetur. Massa a nec leo arcu sed netus. Feugiat diam aliquam sapien.",
        },
        {
            id: 2,
            image: "/images/image_2.png",
            category: "Tips",
            highlightColor: "text-[#FD89ED]",
            title: "From signing up to enjoying our sweet benefits, it only takes a few..",
            description: "Lorem ipsum dolor sit amet consectetur. Massa a nec leo arcu sed netus. Feugiat diam aliquam sapien.",
        },
        {
            id: 3,
            image: "/images/image_3.png",
            category: "News",
            highlightColor: "text-[#F9CC00]",
            title: "Squads Game: Win real money with your football knowledge",
            description: "Lorem ipsum dolor sit amet consectetur. Massa a nec leo arcu sed netus. Feugiat diam aliquam sapien.",
        },
    ];
    const renderBlogCards = () => {
        return blogPosts.map((post, index) => (
            <section className='flex flex-col gap-y-[4rem]' key={post.id}>
                <BlogCard
                    image={post.image}
                    category={post.category}
                    highlightColor={post.highlightColor}
                    title={post.title}
                    description={post.description}
                />
                {index < blogPosts.length - 1 && <hr className='text-[#353E49] block md:hidden' />}
            </section>
        ));
    };
    return (
        <section className="mx-auto max-w-7xl my-10 px-4 xl:px-0">
            <div className="text-center w-full">
                <div className="flex justify-center mb-4 gap-x-4">
                    <div className={`text-5xl md:text-7xl ${anekGurmukhi.className}`}>Latest from the
                        <span className={`${gloriaHallelujah.className} text-[#D0F091] ml-4`}>Gang</span>
                    </div>
                </div>
                <p className="text-sm md:text-xl text-[#D9D9D9]"> Subscribe to get latest yap from Wadmin</p>
            </div>

            <div className="flex justify-center">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-8 mt-[5rem]">
                    {renderBlogCards()}
                </div>
            </div>


            <div className="flex justify-center">
                <Button className="my-[5rem]">Read more on blog</Button>
            </div>
        </section>
    )
}

export default BlogPost