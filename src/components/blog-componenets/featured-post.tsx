'use client'

import BlogList, { BlogPost } from "@/types/blog";
import Pagination from "./pagination";
import { useState } from "react";

const homeBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to choose the right colors when creating a website?',
    excerpt: 'For athletes, high altitude produces two contradictory effects on performance. For explosive events',
    image: '/blog_img_1.svg',
    location: 'Bangkok',
    author: {
      name: 'Samuel Ikiriko',
      avatar: '/blog_user_1.svg'
    },
    readTime: '5 minutes'
  },
  {
    id: '2',
    title: 'Why choose a theme that looks good with WooCommerce',
    excerpt: 'The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a s',
    image: '/blog_img_2.svg',
    author: {
      name: 'Samuel Ikiriko',
      avatar: '/blog_user_1.svg'
    },
    readTime: '5 minutes'
  },
  {
    id: '3',
    title: 'Why choose a theme that looks good with WooCommerce',
    excerpt: 'The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a s',
    image: '/blog_img_3.svg',
    author: {
      name: 'Samuel Ikiriko',
      avatar: '/blog_user_1.svg'
    },
    readTime: '5 minutes'
  },
  {
    id: '4',
    title: 'How to choose the right colors when creating a website?',
    excerpt: 'For athletes, high altitude produces two contradictory effects on performance. For explosive events',
    image: '/blog_img_1.svg',
    location: 'Bangkok',
    author: {
      name: 'Samuel Ikiriko',
      avatar: '/blog_user_1.svg'
    },
    readTime: '5 minutes'
  },
  {
    id: '5',
    title: 'Why choose a theme that looks good with WooCommerce',
    excerpt: 'The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a s',
    image: '/blog_img_2.svg',
    author: {
      name: 'Samuel Ikiriko',
      avatar: '/blog_user_1.svg'
    },
    readTime: '5 minutes'
  },
  {
    id: '6',
    title: 'Why choose a theme that looks good with WooCommerce',
    excerpt: 'The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a s',
    image: '/blog_img_3.svg',
    author: {
      name: 'Samuel Ikiriko',
      avatar: '/blog_user_1.svg'
    },
    readTime: '5 minutes'
  }
]

export default function FeaturedPost() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log('Navigate to page:', page);
  }
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl md:text-3xl text-center md:text-left text-[#101720] text-[500] mb-12">Featured blog post</h2>
        <BlogList posts={homeBlogPosts} />
      </div>
      <div className="flex justify-center">
        <Pagination currentPage={currentPage} totalPages={30} onPageChange={handlePageChange} />
      </div>
    </section>
  )
}