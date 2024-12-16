import { Button } from '@/components/ui/button'
import Image from "next/image";
import { Input } from "../ui/input";
import React from 'react';

const blog = {
    id: '1',
    title: 'How to choose the right colors when creating a website?',
    excerpt: 'For athletes, high altitude produces two contradictory effects on performance. For explosive events',
    image: '/blog_img_4.svg',
    location: '',
    author: {
      name: 'Samuel Ikiriko',
      avatar: '/blog_user_1.svg'
    },
    readTime: '5 minutes'
  }

export default function BlogPage() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <section className="">
      <div className="flex justify-between mb-12">
        <h2 className="text-xl md:text-3xl text-center md:text-left text-[#101720] text-[500]">Blogs</h2>
        <div className="flex md:w-auto max-w-sm gap-1 p-1 border border-[#A6A7AC] bg-[#F3F3F3] rounded-md">
          <Input
            ref={inputRef}
            type="text"
            placeholder="Search for article"
            className="flex-grow outline-none bg-[#F3F3F3]"
          />
          <Button variant="default" className="bg-black text-white text-xs md:text-md hover:bg-gray-800">
            Search now
          </Button>
        </div>
      </div>
      <div className="">
        <article className="group cursor-pointer rounded-lg overflow-hidden border border-[#838785]">
          <div className="mb-4" style={{position: 'relative', width: '100%', height: '100vh'}}>
            <Image
              src={blog.image}
              alt={blog.title}
              layout="fill"
              objectFit="cover"
              quality={90}
            />
          </div>
          <div className="px-3 space-y-5 pb-4">
            {/* Content */}
            <h3 className="text-xl md:text-2xl mb-2 text-[#070F0B]">
              {blog.title}
            </h3>
            <p className="text-[#838785] text-md md:text-lg mb-4 line-clamp-2">
              {blog.excerpt}
            </p>
            {/* Author info */}
            <div className="flex items-center gap-2">
              <Image
                src={blog.author.avatar}
                alt={blog.author.name}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-sm md:text-xl text-black mr-auto">{blog.author.name}</span>
              <span className="text-sm md:text-xl text-[#838785]">{blog.readTime}</span>
            </div>
          </div>
    
        </article>
      </div>
    </section>
  )
}