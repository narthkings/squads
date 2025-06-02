'use client'
import * as React from 'react';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import Image from 'next/image';

interface BlogCardProps {
    image: string;
    category: string;
    title: string;
    description: string;
    highlightColor: string;
}

export function BlogCard({ image, category, title, description, highlightColor }: BlogCardProps) {
    return (
        <div className="max-w-sm">
            <AspectRatio.Root ratio={16 / 9} className="rounded-xl overflow-hidden mb-4">
                <Image src={image} alt={title} fill className="object-cover" loading='lazy' />
            </AspectRatio.Root>
            <div className={`text-sm font-semibold ${highlightColor}`}>{category}</div>
            <h3 className="text-lg font-bold leading-snug text-[#D2D4D7] mt-1">{title}</h3>
            <p className="text-sm text-[#797F86] mt-2">{description}</p>
        </div>
    );
}