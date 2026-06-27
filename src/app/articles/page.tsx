import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";
import { readdir, readFile } from "fs/promises";
import { join } from "path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles - Engineering Blogs by Tirtha",
  description: "Technical articles on AI, software engineering, system design, and developer productivity.",
  alternates: {
    canonical: "https://tirthachetry.dpdns.org/articles",
  },
  openGraph: {
    title: "Articles - Engineering Blogs by Tirtha",
    description: "Technical articles on AI, software engineering, system design, and developer productivity.",
    url: "https://tirthachetry.dpdns.org/articles",
    type: "website",
  },
};

async function getPosts() {
  const postsDir = join(process.cwd(), 'content/posts');
  const files = await readdir(postsDir);
  const mdxFiles = files.filter(f => f.endsWith('.mdx'));

  const posts = await Promise.all(mdxFiles.map(async (filename) => {
    const filePath = join(postsDir, filename);
    const content = await readFile(filePath, 'utf-8');
    
    // Parse frontmatter
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    const frontmatter: any = {};
    
    if (frontmatterMatch) {
      const lines = frontmatterMatch[1].split('\n');
      lines.forEach(line => {
        const match = line.match(/^(\w+):\s*(.*)$/);
        if (match) {
          const key = match[1];
          let value: string | string[] | boolean = match[2];
          // Handle arrays
          if (value.startsWith('[') && value.endsWith(']')) {
            value = value.slice(1, -1).split(',').map(v => v.trim().replace(/"/g, ''));
          }
          // Handle booleans
          if (value === 'true') value = true;
          if (value === 'false') value = false;
          frontmatter[key] = value;
        }
      });
    }

    return {
      ...frontmatter,
      slug: filename.replace('.mdx', ''),
    };
  }));

  return posts.filter(post => post.published).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default async function ArticlesPage() {
  const publishedPosts = await getPosts();

  return (
    <div className="wrap py-16">
      <div className="mb-12">
        <Link
          href="/"
          className="mono text-[0.8rem] text-[var(--ink-soft)] border-b border-transparent pb-1 transition-colors hover:text-[var(--rust)] hover:border-[var(--rust)] inline-block mb-8"
        >
          ← Back to home
        </Link>
        <h1 className="text-[1.6rem] font-bold mb-4">Articles</h1>
        <p className="text-[1.12rem] text-[var(--ink-soft)] max-w-[620px]">
          Technical articles on AI, software engineering, system design, and developer productivity.
        </p>
      </div>

        <div className="space-y-8">
          {publishedPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/articles/${post.slug}`}
              className="block"
            >
              <article className="py-4">
                <h2 className="text-2xl font-semibold mb-2 hover:text-primary transition-colors">{post.title}</h2>
                <p className="text-muted-foreground mb-3">{post.description}</p>
                <div className="text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  <span className="mx-2">•</span>
                  {post.readingTime}
                </div>
              </article>
              {index < publishedPosts.length - 1 && <hr className="border-border my-8" />}
            </Link>
          ))}
        </div>
    </div>
  );
}
