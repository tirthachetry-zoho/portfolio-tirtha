"use client";

import { ArrowLeft } from "lucide-react";
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
    <div>
      <Link
        href="/articles"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Articles
      </Link>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
          <span>{category}</span>
          <span>•</span>
          <span>{new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
          <span>•</span>
          <span>{readingTime}</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {tags?.map((tag: string) => (
          <span key={tag} className="text-sm text-muted-foreground">
            #{tag}
          </span>
        ))}
      </div>

      <article className="prose prose-invert prose-lg max-w-none">
        {children}
      </article>
    </div>
  );
}
