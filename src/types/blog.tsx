import { BlogCard } from "@/components/ui/blog-card"
import React from "react"

export interface BlogPost {
    id: string
    title: string
    excerpt: string
    image: string
    location?: string
    author: {
      name: string
      avatar: string
    }
    readTime: string
  }

  type BlogPostProps = {
    posts: BlogPost[];
  }

  const BlogList: React.FC<BlogPostProps> = ({posts}) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    )
  }

  export default BlogList;