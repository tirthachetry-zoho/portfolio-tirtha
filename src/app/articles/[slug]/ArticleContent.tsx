"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface ArticleContentProps {
  title: string;
  description: string;
  category: string;
  date: string;
  readingTime: string;
  tags: string[];
  children: ReactNode;
}

export default function ArticleContent({ title, description, category, date, readingTime, tags, children }: ArticleContentProps) {
  return (
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
          {category}
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-muted-foreground mb-6">{description}</p>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {new Date(date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {readingTime}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {tags?.map((tag: string) => (
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

      <article className="prose prose-invert prose-lg max-w-none">
        {children}
      </article>
    </motion.div>
  );
}
