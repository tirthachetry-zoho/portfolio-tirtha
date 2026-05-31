import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";

const posts = {
  "building-agentic-ai-systems": {
    title: "Building Agentic AI Systems",
    description: "A deep dive into multi-agent AI systems and their practical applications in modern software development.",
    date: "2024-03-15",
    readingTime: "8 min read",
    category: "AI",
    tags: ["AI", "Machine Learning", "System Design"],
    content: `<h1>Building Agentic AI Systems</h1>
<p>Agentic AI systems represent a paradigm shift in how we approach artificial intelligence. Unlike traditional AI models that respond to prompts, agentic systems can autonomously plan, execute, and adapt to achieve complex goals.</p>
<h2>What are Agentic AI Systems?</h2>
<p>Agentic AI systems are AI agents that can:</p>
<ul>
<li>Make autonomous decisions</li>
<li>Plan multi-step workflows</li>
<li>Use tools and APIs</li>
<li>Learn from feedback</li>
<li>Collaborate with other agents</li>
</ul>
<h2>Key Components</h2>
<h3>1. Planning and Reasoning</h3>
<p>The ability to break down complex tasks into manageable steps is fundamental to agentic systems.</p>
<h3>2. Tool Use</h3>
<p>Agents need to interact with external systems through APIs, databases, and other tools.</p>
<h3>3. Memory</h3>
<p>Both short-term and long-term memory capabilities enable agents to maintain context and learn from experience.</p>
<h2>Building Your First Agent</h2>
<p>Start simple and iterate. Begin with a single-purpose agent and gradually add complexity as needed.</p>`,
  },
  "cloud-native-best-practices": {
    title: "Cloud-Native Architecture Best Practices",
    description: "Essential patterns and practices for building scalable cloud-native applications.",
    date: "2024-02-20",
    readingTime: "6 min read",
    category: "Cloud",
    tags: ["Cloud", "Architecture", "DevOps"],
    content: `<h1>Cloud-Native Architecture Best Practices</h1>
<p>Building cloud-native applications requires a shift in thinking from traditional monolithic architectures to distributed, microservices-based systems.</p>
<h2>Core Principles</h2>
<h3>1. Design for Failure</h3>
<p>Assume components will fail and build resilience into your architecture from the start.</p>
<h3>2. Scalability</h3>
<p>Design systems that can scale horizontally to handle increased load.</p>
<h3>3. Observability</h3>
<p>Implement comprehensive monitoring, logging, and tracing from day one.</p>
<h2>Best Practices</h2>
<ul>
<li>Use containerization for consistency</li>
<li>Implement CI/CD pipelines</li>
<li>Adopt infrastructure as code</li>
<li>Design stateless services when possible</li>
<li>Implement proper security measures</li>
</ul>`,
  },
  "developer-productivity-toolkit": {
    title: "Developer Productivity Toolkit",
    description: "Tools and techniques to boost your development workflow and productivity.",
    date: "2024-01-10",
    readingTime: "5 min read",
    category: "Productivity",
    tags: ["Productivity", "Tools", "Workflow"],
    content: `<h1>Developer Productivity Toolkit</h1>
<p>Productivity is not about working harder, but about working smarter. Here are tools and techniques that can dramatically improve your development workflow.</p>
<h2>Essential Tools</h2>
<h3>1. AI-Powered Code Assistants</h3>
<p>Tools like GitHub Copilot can significantly speed up development by suggesting code completions and entire functions.</p>
<h3>2. Automated Testing</h3>
<p>Implement comprehensive test suites with tools like Jest, Cypress, or Playwright.</p>
<h3>3. Documentation</h3>
<p>Keep documentation up-to-date with tools like Swagger or automated doc generators.</p>
<h2>Workflow Optimization</h2>
<ul>
<li>Use keyboard shortcuts</li>
<li>Automate repetitive tasks</li>
<li>Use version control effectively</li>
<li>Implement code reviews</li>
<li>Continuous learning and improvement</li>
</ul>`,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              {post.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{post.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{post.description}</p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
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
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </motion.div>
      </div>
    </div>
  );
}
