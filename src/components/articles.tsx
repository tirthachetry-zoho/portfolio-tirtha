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

    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    const frontmatter: any = {};

    if (frontmatterMatch) {
      const lines = frontmatterMatch[1].split('\n');
      lines.forEach(line => {
        const match = line.match(/^(\w+):\s*(.*)$/);
        if (match) {
          const key = match[1];
          let value: string | string[] | boolean = match[2];
          if (value.startsWith('[') && value.endsWith(']')) {
            value = value.slice(1, -1).split(',').map(v => v.trim().replace(/"/g, ''));
          }
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
  const allPosts = await getPosts();
  const articlesList = allPosts.slice(0, 3);

  return (
    <section id="articles" className="mb-17">
      <div className="flex justify-between items-end mb-[18px]">
        <div>
          <div className="eyebrow">// writing</div>
          <h2 className="text-[1.6rem] font-bold">Notes from the job</h2>
        </div>
        {allPosts.length > 3 && (
          <Link
            href="/articles"
            className="mono text-[0.8rem] text-[var(--ink-soft)] border-b border-transparent pb-1 transition-colors hover:text-[var(--rust)] hover:border-[var(--rust)] mb-1"
          >
            View all articles →
          </Link>
        )}
      </div>

      {articlesList.map((article) => (
        <div
          key={article.slug}
          className="grid grid-cols-[110px_1fr] gap-[18px] py-4 border-b border-[var(--rule)] last:border-b-0"
        >
          <div className="mono text-[0.75rem] text-[var(--ink-soft)] pt-1">
            {new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "2-digit", day: "2-digit" }).replace(/\//g, '-')}
          </div>
          <div>
            <Link
              href={`/articles/${article.slug}`}
              className="text-[1.02rem] font-semibold hover:text-[var(--rust)] transition-colors"
            >
              {article.title}
            </Link>
            <div className="text-[0.92rem] text-[var(--ink-soft)] mt-1">
              {article.description}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
