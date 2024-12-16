import { Button } from '@/components/ui/button'
import BlogList, { BlogPost } from "@/types/blog";

const homeBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Importance of Money Management and Financial Control in Small and Medium Enterprises (SMEs)',
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
  }
]

export default function BlogSection() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl md:text-3xl text-center md:text-left text-[#101720] text-[500] mb-12">Blogs</h2>
        <BlogList posts={homeBlogPosts} />
        <div className="text-right">
          <Button variant="secondary">
            See More →
          </Button>
        </div>
      </div>
    </section>
  )
}