import RSS from "rss";

export const dynamic = "force-static";

const posts = [
  {
    slug: "building-agentic-ai-systems",
    title: "Building Agentic AI Systems",
    description: "A deep dive into multi-agent AI systems and their practical applications in modern software development.",
    date: "2024-03-15",
    tags: ["AI", "Machine Learning", "System Design"],
  },
  {
    slug: "cloud-native-best-practices",
    title: "Cloud-Native Architecture Best Practices",
    description: "Essential patterns and practices for building scalable cloud-native applications.",
    date: "2024-02-20",
    tags: ["Cloud", "Architecture", "DevOps"],
  },
  {
    slug: "developer-productivity-toolkit",
    title: "Developer Productivity Toolkit",
    description: "Tools and techniques to boost your development workflow and productivity.",
    date: "2024-01-10",
    tags: ["Productivity", "Tools", "Workflow"],
  },
];

export async function GET() {
  const feed = new RSS({
    title: "Tirtha Chetry - Articles",
    description: "Technical articles on AI, software engineering, system design, and developer productivity.",
    feed_url: "https://tirthachetry.dpdns.org/rss.xml",
    site_url: "https://tirthachetry.dpdns.org",
    language: "en",
  });

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `https://tirthachetry.dpdns.org/articles/${post.slug}`,
      date: new Date(post.date),
      categories: post.tags,
    });
  });

  return new Response(feed.xml(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
