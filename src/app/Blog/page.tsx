import BlogPage from "@/components/blog-componenets/blog";
import FeaturedPost from "@/components/blog-componenets/featured-post";
import Footer from "@/components/home-components/footer";
import Header from "@/components/home-components/header";

export default function Blog() {
    return (
        <div className="flex flex-col min-h-screen px-12 md:px-16 lg:px-20">
          <Header />
          <main className="mt-12 md:mt-24 space-y-16">
            <BlogPage />
            <FeaturedPost />
          </main>
          <Footer />
        </div>
    )
}