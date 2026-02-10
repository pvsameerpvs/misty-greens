import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Misty Greens Blog | Travel & Luxury Living in Sri Lanka",
  description: "Discover the best travel tips, romantic getaways, and luxury living insights in Sri Lanka. Expert guides on Nuwara Eliya and Kahathuduwa.",
};

const BLOG_POSTS = [
  {
    title: "The Ultimate Valentine’s Escape: Why Nuwara Eliya is the Most Romantic Choice",
    description: "Looking for the perfect way to celebrate love? Discover why Nuwara Eliya’s misty mountains and cool breeze offer a Valentine’s experience like no other.",
    slug: "valentines-escape-nuwara-eliya",
    image: "/nuwara-eliya-lakeview-cover.jpeg",
    date: "Feb 10, 2026",
    author: "Misty Greens Editorial",
    category: "Romantic Travel"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Blog Hero */}
        <section className="relative flex h-[40vh] min-h-[350px] items-center justify-center overflow-hidden">
          <Image
            src="/nuwara-eliya-gallery13.jpeg"
            alt="Misty Greens Blog"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
          <div className="container relative z-10 text-center text-white">
            <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-6xl">Our Blog</h1>
            <p className="mx-auto max-w-2xl text-xl font-light text-white/90">
              Insights, tips, and stories from Sri Lanka’s most exclusive destinations.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {BLOG_POSTS.map((post) => (
                <article key={post.slug} className="group overflow-hidden rounded-[2rem] border bg-card shadow-sm transition-all hover:shadow-xl">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm shadow-sm">
                          <Heart className="h-3 w-3 fill-primary" /> {post.category}
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="p-8">
                    <div className="mb-4 flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" /> {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5" /> {post.author}
                      </div>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="mb-4 text-2xl font-bold leading-tight decoration-primary/30 underline-offset-4 group-hover:underline">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="mb-6 text-muted-foreground line-clamp-3">
                      {post.description}
                    </p>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="ghost" className="group/btn h-auto p-0 font-bold text-primary hover:bg-transparent">
                        Read Story <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
