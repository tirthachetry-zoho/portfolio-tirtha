import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";
import { readdir, readFile } from "fs/promises";
import { join } from "path";

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
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">Articles & Insights</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technical articles on AI, software engineering, system design, and developer productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publishedPosts.map((post) => (
            <article
              key={post.slug}
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
                  {post.tags?.slice(0, 3).map((tag: string) => (
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
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
