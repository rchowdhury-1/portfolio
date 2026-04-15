import { Metadata } from "next";
import { getAllPosts, getAllTags } from "@/lib/posts";
import BlogList from "@/components/blog/BlogList";
import AnimatedSection from "@/components/shared/AnimatedSection";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on building React apps, real-time systems, AI integration, and transitioning from finance to software development.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <AnimatedSection>
        <div className="mb-12">
          <p className="text-amber-500 text-sm font-mono tracking-widest mb-4 uppercase">Writing</p>
          <h1 className="font-serif text-4xl sm:text-5xl text-zinc-100 mb-4">Blog</h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Technical deep-dives, career reflections, and notes from six months of building
            real projects from scratch.
          </p>
          <div className="mt-4 h-px w-16 bg-amber-500/60" />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <BlogList posts={posts} tags={tags} />
      </AnimatedSection>
    </div>
  );
}
