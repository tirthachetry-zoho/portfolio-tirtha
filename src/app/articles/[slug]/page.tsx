import { notFound } from "next/navigation";
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { readFile } from "fs/promises";
import { join } from "path";
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import ArticleContent from "./ArticleContent";
import Mermaid from "@/components/Mermaid";
import CodeBlock from "@/components/CodeBlock";

async function getPost(slug: string) {
  const filePath = join(process.cwd(), 'content/posts', `${slug}.mdx`);
  try {
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

    // Get content without frontmatter
    const contentWithoutFrontmatter = content.replace(/^---\n[\s\S]*?\n---\n/, '');

    return {
      ...frontmatter,
      slug,
      content: contentWithoutFrontmatter,
    };
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return {};
  
  const baseUrl = "https://tirthachetry.dpdns.org";
  const url = `${baseUrl}/articles/${slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: url,
      type: "article",
      publishedTime: post.date,
      authors: ["Tirtha"],
      tags: post.tags || [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const baseUrl = "https://tirthachetry.dpdns.org";
  const url = `${baseUrl}/articles/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": `${baseUrl}/og-image.jpg`,
    "author": {
      "@type": "Person",
      "name": "Tirtha",
      "url": baseUrl
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "keywords": post.tags ? post.tags.join(", ") : "",
    "publisher": {
      "@type": "Organization",
      "name": "Engineering Blogs by Tirtha",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/icon.svg`
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen subpage py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ArticleContent
            title={post.title}
            description={post.description}
            category={post.category}
            date={post.date}
            readingTime={post.readingTime}
            tags={post.tags}
          >
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: {
                  rehypePlugins: [rehypeHighlight],
                },
              }}
              components={{
                Mermaid: ({ chart }: { chart: string }) => <Mermaid chart={chart} />,
                pre: CodeBlock,
              }}
            />
          </ArticleContent>
        </div>
      </div>
    </>
  );
}
