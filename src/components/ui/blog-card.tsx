import Image from 'next/image';
import { BlogPost } from '@/types/blog';

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="h-full group cursor-pointer rounded-lg overflow-hidden border border-[#838785]">
      {/* Image container with aspect ratio */}
      <div className="relative aspect-[4/3] mb-4">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform"
        />
        {post.location && (
          <div className="absolute left-4 top-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
            {post.location}
          </div>
        )}
      </div>

      <div className="px-3 space-y-5 pb-4">
        {/* Content */}
        <h3 className="text-xl md:text-2xl mb-2 text-[#070F0B]">
          {post.title}
        </h3>
        <p className="text-[#838785] text-md md:text-lg mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        {/* Author info */}
        <div className="flex items-center gap-2">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-sm md:text-xl text-black mr-auto">{post.author.name}</span>
          <span className="text-sm md:text-xl text-[#838785]">{post.readTime}</span>
        </div>
      </div>

    </article>
  )
}