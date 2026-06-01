import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const supabase = await createClient();
  const { data: post } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const supabase = await createClient();
  const { data: post } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/articles"
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Link>

          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{post.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{post.description}</p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.published_at || post.created_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.reading_time}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags?.map((tag) => (
              <span key={tag} className="flex items-center gap-1 px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-end mb-8">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>

          {post.cover_image_url && (
            <div className="mb-8">
              <img src={post.cover_image_url} alt={post.title} className="w-full rounded-xl" />
            </div>
          )}

          <article className="prose prose-invert prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }} />
          </article>
        </motion.div>
      </div>
    </div>
  );
}
