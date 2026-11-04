import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { NewsletterSubscription } from "../components/NewsletterSubscription";
import { BLOG_POSTS, type BlogPost } from "../data/blogPosts";

interface BlogsSearchParams {
  article?: string;
  category?: string;
}

export const Route = createFileRoute("/blogs")({
  validateSearch: (search: Record<string, unknown>): BlogsSearchParams => {
    return {
      article: (search.article as string) || undefined,
      category: (search.category as string) || undefined,
    };
  },
  head: (ctx) => {
    const search = ctx?.search as BlogsSearchParams | undefined;
    const post = search?.article ? BLOG_POSTS.find((p) => p.slug === search.article) : null;

    if (post) {
      return {
        meta: [
          { title: `${post.title} | Bacon Legal Recruiting Blogs` },
          { name: "description", content: post.summary },
          { property: "og:title", content: post.title },
          { property: "og:description", content: post.summary },
          { property: "og:image", content: post.featuredImage },
        ],
      };
    }

    return {
      meta: [
        { title: "Blogs & Legal Market Insights | Bacon Legal Recruiting" },
        {
          name: "description",
          content:
            "Expert insights, lateral partner hiring analysis, lobbyist recruitment, and attorney career guidance from Bacon Legal Recruiting — a premier national recruiting firm.",
        },
      ],
    };
  },
  component: BlogsPage,
});

function BlogsPage() {
  const { article, category } = Route.useSearch();
  const navigate = useNavigate({ from: "/blogs" });
  const [selectedCategory, setSelectedCategory] = useState<string>(category || "All");
  const [copiedNotification, setCopiedNotification] = useState(false);

  const categories = ["All", ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))];

  const currentPost = article ? BLOG_POSTS.find((p) => p.slug === article) : null;

  const filteredPosts = BLOG_POSTS.filter((post) => {
    if (selectedCategory !== "All" && post.category !== selectedCategory) {
      return false;
    }
    return true;
  });

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brass selection:text-ink">
      <SiteHeader />

      <main>
        {/* If viewing a single blog article */}
        {currentPost ? (
          <article className="pb-20">
            {/* ARTICLE HEADER HERO */}
            <section className="bg-ink text-ink-foreground py-16 lg:py-20 border-b border-border">
              <div className="mx-auto max-w-4xl px-6">
                <button
                  type="button"
                  onClick={() => navigate({ search: {} })}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brass hover:text-ink-foreground transition-colors mb-6 cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to all articles
                </button>

                <div className="flex flex-wrap items-center gap-4 text-xs tracking-wider uppercase text-brass">
                  <span className="bg-brass/20 text-brass px-3 py-1 font-semibold rounded-xs">
                    {currentPost.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-ink-foreground/70">
                    <Calendar className="h-3.5 w-3.5" />
                    {currentPost.date}
                  </span>
                  <span className="flex items-center gap-1.5 text-ink-foreground/70">
                    <Clock className="h-3.5 w-3.5" />
                    {currentPost.readTime}
                  </span>
                </div>

                <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-ink-foreground">
                  {currentPost.title}
                </h1>

                <div className="mt-6 flex items-center justify-between gap-4 border-t border-ink-foreground/15 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brass text-ink font-semibold text-sm">
                      KB
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ink-foreground">
                        {currentPost.author}
                      </p>
                      <p className="text-xs text-ink-foreground/70">{currentPost.authorRole}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleShare}
                    className="inline-flex items-center gap-1.5 border border-ink-foreground/20 px-3 py-1.5 text-xs font-semibold tracking-wider uppercase text-ink-foreground hover:bg-ink-foreground/10 transition-colors cursor-pointer"
                  >
                    <Share2 className="h-3.5 w-3.5" />
                    {copiedNotification ? "Link Copied!" : "Share"}
                  </button>
                </div>
              </div>
            </section>

            {/* ARTICLE CONTENT */}
            <div className="mx-auto max-w-4xl px-6 pt-12">
              {/* Featured Image */}
              <div className="overflow-hidden rounded-sm border border-border shadow-lg">
                <img
                  src={currentPost.featuredImage}
                  alt={currentPost.title}
                  className="w-full aspect-[16/9] object-cover"
                />
              </div>

              {/* Lead Summary */}
              <div className="mt-10 border-l-2 border-brass pl-6 py-2 bg-secondary/40 text-base sm:text-lg italic text-ink font-display leading-relaxed">
                {currentPost.summary}
              </div>

              {/* Article Paragraphs */}
              <div className="mt-10 space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
                {currentPost.content.map((paragraph, idx) => (
                  <p key={idx} className="text-foreground/90">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Key Takeaways Callout */}
              {currentPost.keyTakeaways && (
                <div className="mt-12 rounded-sm border border-brass/50 bg-secondary/50 p-8 shadow-sm">
                  <p className="eyebrow text-brass">Executive Summary</p>
                  <h3 className="mt-2 text-xl font-normal text-ink">Key Strategic Takeaways</h3>
                  <ul className="mt-4 space-y-3">
                    {currentPost.keyTakeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-foreground/90">
                        <CheckCircle2 className="h-4 w-4 text-brass shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Author Bio Box */}
              <div className="mt-14 border border-border bg-card p-8 rounded-sm shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-ink text-brass font-serif text-xl border border-brass">
                  KB
                </div>
                <div>
                  <p className="eyebrow text-brass">About the Author</p>
                  <h4 className="text-lg font-medium text-ink mt-1">Kevin Bacon · Founder & CEO</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Kevin Bacon is an attorney with more than 25 years of legal and legislative
                    experience, having served in the Ohio House of Representatives (2007–2010) and
                    as an Ohio State Senator (2011–2018). As founder of Bacon Legal Recruiting, a
                    national recruiting firm, he conducts discreet permanent placements for law
                    firms and corporate legal departments across the United States.
                  </p>
                  <div className="mt-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink hover:text-brass transition-colors"
                    >
                      Consult with an Attorney
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bottom Back Button */}
              <div className="mt-12 pt-8 border-t border-border flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => navigate({ search: {} })}
                  className="inline-flex items-center gap-2 border border-ink px-6 py-2.5 text-xs font-semibold tracking-widest uppercase text-ink hover:bg-ink hover:text-ink-foreground transition-colors cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4" />
                  All Articles
                </button>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-brass px-6 py-2.5 text-xs font-semibold tracking-widest uppercase text-ink hover:opacity-90 transition-opacity shadow-sm"
                >
                  Connect With Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Newsletter Subscription directly below article */}
            <div className="mt-16">
              <NewsletterSubscription variant="section" />
            </div>
          </article>
        ) : (
          /* BLOG LISTING VIEW */
          <div>
            {/* HERO / INTRO BANNER */}
            <section className="bg-ink text-ink-foreground py-20 lg:py-24 border-b border-border">
              <div className="mx-auto max-w-6xl px-6">
                <div className="max-w-3xl">
                  <p className="eyebrow text-brass">Our Perspective</p>
                  <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[3.25rem] font-normal leading-[1.15]">
                    Blogs & Legal Market <span className="text-brass">Insights.</span>
                  </h1>
                  <p className="mt-6 text-base sm:text-lg leading-relaxed text-ink-foreground/80 font-display italic">
                    Analysis, recruitment strategies, and lateral market intelligence from our
                    national recruiting firm.
                  </p>
                </div>
              </div>
            </section>

            {/* CATEGORIES & BLOG POSTS GRID */}
            <section className="mx-auto max-w-6xl px-6 py-20">
              {/* Category Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2 border-b border-border pb-6">
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mr-2">
                  Category:
                </span>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer rounded-xs ${
                      selectedCategory === cat
                        ? "bg-ink text-ink-foreground shadow-sm"
                        : "bg-secondary text-muted-foreground hover:text-ink hover:bg-secondary/80"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* POSTS GRID */}
              <div className="mt-12 grid gap-10 sm:grid-cols-2">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="flex flex-col border border-border bg-card shadow-sm transition-all hover:border-brass/50 hover:shadow-md rounded-sm overflow-hidden"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <span className="absolute top-4 left-4 bg-ink/90 text-brass px-3 py-1 text-[0.68rem] font-semibold tracking-wider uppercase backdrop-blur-xs border border-brass/30">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-8 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {post.date}
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="mt-3 text-2xl font-normal text-ink leading-snug">
                        <button
                          type="button"
                          onClick={() => navigate({ search: { article: post.slug } })}
                          className="text-left hover:text-brass transition-colors cursor-pointer"
                        >
                          {post.title}
                        </button>
                      </h2>

                      <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">
                        {post.summary}
                      </p>

                      <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                        <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <User className="h-3.5 w-3.5 text-brass" />
                          {post.author}
                        </span>

                        <button
                          type="button"
                          onClick={() => navigate({ search: { article: post.slug } })}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink hover:text-brass transition-colors cursor-pointer"
                        >
                          Read More
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="py-20 text-center">
                  <BookOpen className="mx-auto h-12 w-12 text-muted-foreground/50" />
                  <p className="mt-4 text-lg font-medium text-ink">No articles in this category.</p>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory("All")}
                    className="mt-3 text-xs uppercase tracking-wider text-brass hover:underline"
                  >
                    View all articles
                  </button>
                </div>
              )}
            </section>

            {/* Newsletter Subscription on Blogs Page */}
            <NewsletterSubscription variant="section" />
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
