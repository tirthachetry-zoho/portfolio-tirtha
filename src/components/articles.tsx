import { ArrowRight } from "lucide-react";
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

export async function Articles() {
  const articlesList = (await getPosts()).slice(0, 3);

  return (
    <section id="articles" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Articles</h2>
          <p className="text-muted-foreground">
            Technical articles on AI, software engineering, system design, and developer productivity.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {articlesList.map((article, index) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="block"
            >
              <article className="py-4">
                <h3 className="text-2xl font-semibold mb-2 hover:text-primary transition-colors">{article.title}</h3>
                <p className="text-muted-foreground mb-3">{article.description}</p>
                <div className="text-sm text-muted-foreground">
                  {new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  <span className="mx-2">•</span>
                  {article.readingTime}
                </div>
              </article>
              {index < articlesList.length - 1 && <hr className="border-border my-8" />}
            </Link>
          ))}
        </div>

        <div>
          <Link
            href="/articles"
            className="inline-flex items-center text-sm text-primary hover:underline"
          >
            View all articles <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
