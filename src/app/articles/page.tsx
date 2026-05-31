"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    slug: "building-agentic-ai-systems",
    title: "Building Agentic AI Systems",
    description: "A deep dive into multi-agent AI systems and their practical applications in modern software development.",
    date: "2024-03-15",
    readingTime: "8 min read",
    category: "AI",
    tags: ["AI", "Machine Learning", "System Design"],
  },
  {
    slug: "cloud-native-best-practices",
    title: "Cloud-Native Architecture Best Practices",
    description: "Essential patterns and practices for building scalable cloud-native applications.",
    date: "2024-02-20",
    readingTime: "6 min read",
    category: "Cloud",
    tags: ["Cloud", "Architecture", "DevOps"],
  },
  {
    slug: "developer-productivity-toolkit",
    title: "Developer Productivity Toolkit",
    description: "Tools and techniques to boost your development workflow and productivity.",
    date: "2024-01-10",
    readingTime: "5 min read",
    category: "Productivity",
    tags: ["Productivity", "Tools", "Workflow"],
  },
];

export default function ArticlesPage() {
  const publishedPosts = posts;

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">Articles & Insights</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technical articles on AI, software engineering, system design, and developer productivity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publishedPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20" />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">{post.category}</span>
                </div>
                <h2 className="font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readingTime}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/articles/${post.slug}`}
                  className="inline-flex items-center text-primary hover:underline text-sm"
                >
                  Read Article <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
