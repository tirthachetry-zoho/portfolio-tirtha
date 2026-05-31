"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Building Agentic AI Systems with LangChain and CrewAI",
    summary: "A comprehensive guide to creating autonomous AI agents that can collaborate on complex tasks using modern frameworks.",
    date: "2024-05-15",
    readingTime: "12 min read",
    category: "AI",
    tags: ["LangChain", "CrewAI", "Agentic AI", "LLM"],
    image: "/articles/ai-agents.jpg",
  },
  {
    id: 2,
    title: "System Design Patterns for Scalable Applications",
    summary: "Exploring essential architectural patterns for building systems that can handle millions of users and requests.",
    date: "2024-05-10",
    readingTime: "15 min read",
    category: "System Design",
    tags: ["Architecture", "Scalability", "Microservices"],
    image: "/articles/system-design.jpg",
  },
  {
    id: 3,
    title: "Modern Cloud Architecture with AWS and Kubernetes",
    summary: "Best practices for designing and deploying cloud-native applications using AWS services and Kubernetes orchestration.",
    date: "2024-05-05",
    readingTime: "10 min read",
    category: "Cloud",
    tags: ["AWS", "Kubernetes", "Cloud Native"],
    image: "/articles/cloud-arch.jpg",
  },
  {
    id: 4,
    title: "Developer Productivity: Tools and Workflows",
    summary: "A deep dive into tools, techniques, and workflows that can significantly boost developer productivity and satisfaction.",
    date: "2024-04-28",
    readingTime: "8 min read",
    category: "Productivity",
    tags: ["Productivity", "Tools", "Workflow"],
    image: "/articles/productivity.jpg",
  },
  {
    id: 5,
    title: "Open Source Contribution Guide for Beginners",
    summary: "A practical guide to getting started with open source contributions, from finding projects to making your first PR.",
    date: "2024-04-20",
    readingTime: "11 min read",
    category: "Open Source",
    tags: ["Open Source", "GitHub", "Community"],
    image: "/articles/opensource.jpg",
  },
  {
    id: 6,
    title: "Building Production-Ready LLM Applications",
    summary: "Lessons learned from deploying LLM-powered applications to production, including scaling, monitoring, and cost optimization.",
    date: "2024-04-15",
    readingTime: "14 min read",
    category: "AI",
    tags: ["LLM", "Production", "Scaling"],
    image: "/articles/llm-prod.jpg",
  },
];

const categories = ["All", "AI", "Software Engineering", "System Design", "Cloud", "Productivity", "Open Source", "Career Growth", "Automation"];

export function Articles() {
  return (
    <section id="articles" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Articles & Insights</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technical articles on AI, software engineering, system design, and developer productivity.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full border hover:border-primary hover:text-primary transition-all duration-300 text-sm"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">Featured</span>
              <span className="text-sm text-muted-foreground">{articles[0].category}</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">{articles[0].title}</h3>
            <p className="text-muted-foreground mb-4 max-w-2xl">{articles[0].summary}</p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(articles[0].date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {articles[0].readingTime}
              </div>
            </div>
            <Link
              href={`/articles/${articles[0].id}`}
              className="inline-flex items-center text-primary hover:underline"
            >
              Read Article <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(1).map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">{article.category}</span>
              </div>
              <h3 className="font-semibold mb-2 line-clamp-2">{article.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{article.summary}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(article.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readingTime}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {article.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/articles"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300"
          >
            View All Articles <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
