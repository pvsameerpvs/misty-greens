import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, User, ArrowLeft, Heart, Sparkles, Coffee, Mountain, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RomanticDecorations } from "@/components/romantic-decorations";

const POSTS = {
  "valentines-escape-nuwara-eliya": {
    title: "The Ultimate Valentine’s Escape: Why Nuwara Eliya is the Most Romantic Choice",
    subtitle: "Forget the beach; head to the hills for a cozy, misty Valentine's Day that feels like a European dream.",
    content: (
        <div className="space-y-8">
            <p className="text-xl leading-relaxed text-muted-foreground italic border-l-4 border-primary pl-6 py-2">
                &quot;Valentine&apos;s Day isn&apos;t just about a date; it&apos;s about an atmosphere. In Nuwara Eliya, that atmosphere is made of mist, pine forests, and cool mountain air.&quot;
            </p>

            <section className="space-y-4">
                <h3 className="text-3xl font-bold tracking-tight">The Romantic Allure of &apos;Little England&apos;</h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    While the rest of Sri Lanka experiences the tropical heat, Nuwara Eliya remains a secluded paradise of cool climes and emerald landscapes. For the premium traveler, Valentine&apos;s Day here isn&apos;t just a holiday—it&apos;s an escape into a world that feels timeless.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    Imagine waking up at <strong>Misty Greens Lakeview Point</strong>, sipping hot Ceylon tea on your private balcony while the morning mist rolls over Gregory Lake. This is the luxury of serenity.
                </p>
            </section>

            <div className="grid gap-6 md:grid-cols-2 py-6">
                <div className="rounded-3xl bg-pink-50 p-8 border border-pink-100 dark:bg-pink-950/20 dark:border-pink-900/30">
                    <Heart className="h-8 w-8 text-pink-500 mb-4 fill-pink-500" />
                    <h4 className="text-xl font-bold mb-2">Morning Magic</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Take a slow boat ride on Gregory Lake at sunrise. The air is crisp, the water is still, and the surrounding mountains provide a majestic backdrop for a private moment.
                    </p>
                </div>
                <div className="rounded-3xl bg-amber-50 p-8 border border-amber-100 dark:bg-amber-950/20 dark:border-amber-900/30">
                    <Coffee className="h-8 w-8 text-amber-600 mb-4" />
                    <h4 className="text-xl font-bold mb-2">Afternoon Tea</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Experience a classic high-tea at a historic colonial club. Finger sandwiches, warm scones, and the world&apos;s finest tea in an atmosphere of old-world elegance.
                    </p>
                </div>
            </div>

            <section className="space-y-4">
                <h3 className="text-3xl font-bold tracking-tight">Why Misty Greens?</h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    Luxury is about privacy. Our two-bedroom premium apartments offer the perfect balance of home-like comfort and hotel-grade luxury. With fully equipped kitchens for a private romantic dinner and spacious living areas with panoramic views, your Valentine&apos;s stay is designed to be intimate.
                </p>
                <div className="relative h-[400px] w-full overflow-hidden rounded-[2.5rem] my-10 shadow-lg">
                    <Image 
                        src="/nuwara-eliya-gallery12.jpeg" 
                        alt="Romantic Interior" 
                        fill 
                        className="object-cover"
                    />
                </div>
            </section>

            <section className="space-y-6 rounded-[2.5rem] bg-slate-900 p-10 text-white md:p-14">
                <div className="flex items-center gap-3 text-primary">
                    <Sparkles className="h-6 w-6" />
                    <span className="font-bold tracking-widest uppercase text-sm">Valentine&apos;s Special</span>
                </div>
                <h2 className="text-4xl font-bold leading-tight decoration-primary">Book Your Romantic Getaway</h2>
                <p className="text-slate-300 text-lg">
                    Seats and stays are filling up fast for mid-February. Secure your luxury apartment at Misty Greens today and give your partner an experience they will never forget.
                </p>
                <div className="pt-4">
                     <Link href="/properties/nuwara-eliya-lakeview-point">
                        <Button size="lg" className="rounded-full bg-white text-slate-900 hover:bg-slate-200 px-10 h-14 text-lg font-bold">
                            View Apartment Details
                        </Button>
                     </Link>
                </div>
            </section>
        </div>
    ),
    image: "/nuwara-eliya-lakeview-cover.jpeg",
    thumbnail: "/nuwara-eliya-lakeview-cover.jpeg",
    date: "February 10, 2026",
    author: "Misty Greens Residence",
    category: "Luxury Travel",
    keywords: "Valentine's Day Sri Lanka, Romantic Getaway Nuwara Eliya, Luxury Stay Nuwara Eliya, Misty Greens Valentine",
    seoDescription: "Celebrate Valentine's Day in the misty mountains of Nuwara Eliya. Discover the most romantic destination in Sri Lanka and book your luxury stay at Misty Greens Residence."
  }
};

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = POSTS[params.slug as keyof typeof POSTS];
  if (!post) return { title: "Blog Post Not Found" };

  return {
    title: `${post.title} | Misty Greens Blog`,
    description: post.seoDescription,
    openGraph: {
      title: post.title,
      description: post.seoDescription,
      images: [{ url: post.thumbnail }],
      url: `https://mistygreensresidence.com/blog/${params.slug}/`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.seoDescription,
      images: [post.thumbnail],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = POSTS[params.slug as keyof typeof POSTS];
  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-background pb-20">
        {params.slug === "valentines-escape-nuwara-eliya" && <RomanticDecorations />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post.title,
              "image": [`https://mistygreensresidence.com${post.image}`],
              "datePublished": "2026-02-10T16:05:00+04:00",
                "author": {
                "@type": "Organization",
                "name": "Misty Greens Residence",
                "url": "https://mistygreensresidence.com/"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Misty Greens Residence",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://mistygreensresidence.com/logo.png"
                }
              },
              "description": post.seoDescription
            })
          }}
        />

      <main className="pt-32 lg:pt-48">
        {/* Article Header */}
        <div className="relative h-[65vh] min-h-[500px] w-full md:h-[75vh]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          
          <div className="absolute bottom-0 left-0 w-full p-6 lg:p-12">
            <div className="container">
              <div className="max-w-4xl space-y-6">
                 <Link href="/blog">
                    <Button variant="outline" size="sm" className="gap-2 rounded-full border-white/20 bg-black/30 text-white backdrop-blur-md hover:bg-black/50 hover:text-white mb-4">
                        <ArrowLeft className="h-4 w-4" /> Back to Blog
                    </Button>
                 </Link>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white shadow-lg">
                    <Heart className="h-3 w-3 fill-white" /> {post.category}
                  </span>
                  <span className="text-sm font-medium text-white/80 backdrop-blur-sm bg-black/20 px-3 py-1 rounded-full border border-white/10">
                    {post.date}
                  </span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-6xl lg:text-7xl leading-tight relative">
                  {post.title}
                  {params.slug === "valentines-escape-nuwara-eliya" && (
                    <span className="absolute -top-12 -right-8 opacity-50 hidden md:block animate-pulse">
                      <Sparkles className="h-16 w-16 text-primary fill-primary/20" />
                    </span>
                  )}
                </h1>
                <p className="text-xl text-primary font-medium tracking-wide max-w-2xl flex items-center gap-3">
                    {post.subtitle}
                    {params.slug === "valentines-escape-nuwara-eliya" && <Heart className="h-5 w-5 fill-primary animate-bounce text-primary" />}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mt-24 px-6 lg:mt-40">
          <div className="grid gap-16 lg:grid-cols-12">
             {/* Author Sidebar */}
             <div className="hidden lg:col-span-3 lg:block">
                <div className="sticky top-32 space-y-8 rounded-3xl border bg-card p-10 shadow-sm">
                   <div className="space-y-4">
                      <div className="h-16 w-16 overflow-hidden rounded-2xl bg-primary/10 p-3">
                        <Image src="/logo.png" alt="Misty Greens" width={64} height={64} className="object-contain" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Misty Greens</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">Defining Luxury Escapes in Sri Lanka&apos;s most scenic areas.</p>
                      </div>
                   </div>
                   
                   <div className="space-y-4 pt-4 border-t">
                      <p className="text-xs font-bold uppercase tracking-widest text-primary">Key Highlights</p>
                      <ul className="space-y-3 text-sm font-medium">
                         <li className="flex items-center gap-2"><Mountain className="h-4 w-4 text-primary" /> Cool Hills</li>
                         <li className="flex items-center gap-2"><Camera className="h-4 w-4 text-primary" /> Scenic Views</li>
                         <li className="flex items-center gap-2"><Coffee className="h-4 w-4 text-primary" /> High-Tea</li>
                      </ul>
                   </div>
                </div>
             </div>

             {/* Main Text */}
             <div className="lg:col-span-7 prose prose-lg prose-headings:font-bold prose-headings:tracking-tight prose-p:text-muted-foreground prose-p:leading-relaxed max-w-none">
                {post.content}
             </div>
             
             {/* Right Spacer or Ads/CTA */}
             <div className="hidden lg:col-span-2 lg:block"></div>
          </div>
        </div>

        {params.slug === "valentines-escape-nuwara-eliya" && (
          <div className="mt-32 border-t border-pink-100 bg-pink-50 py-24 px-6 lg:mt-48">
            <div className="container text-center">
              <span className="flex items-center justify-center gap-4 text-pink-600 font-bold tracking-[0.2em] uppercase text-sm md:text-base">
                 <Heart className="h-5 w-5 fill-pink-600" />
                 Limited Valentine&apos;s Availability at Lakeview Point
                 <Heart className="h-5 w-5 fill-pink-600" />
              </span>
              <p className="mt-4 text-muted-foreground text-sm uppercase tracking-widest">Book your romantic escape before slots are fully occupied</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
