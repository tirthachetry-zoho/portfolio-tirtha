import { notFound } from "next/navigation";
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { readFile } from "fs/promises";
import { join } from "path";
import { MDXRemote } from 'next-mdx-remote/rsc';
import ArticleContent from "./ArticleContent";
import Mermaid from "@/components/Mermaid";

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
          let value = match[2];
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
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen py-24">
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
            components={{
              Mermaid: ({ chart }: { chart: string }) => <Mermaid chart={chart} />,
            }}
          />
        </ArticleContent>
      </div>
    </div>
  );
}
