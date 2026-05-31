"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Star, GitFork, Filter } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Warehouse Management System",
    description: "Comprehensive system designed to streamline inventory and order operations for medium-scale businesses.",
    techStack: ["Java", "Spring Boot", "PostgreSQL", "REST APIs"],
    category: "Enterprise Projects",
    stars: 234,
    forks: 45,
    github: "https://github.com/tirthachetry-zoho/warehouse-management",
    demo: null,
    image: "/projects/warehouse.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Order Management System",
    description: "Backend team contribution to Amdocs' enterprise telecom order management system handling high-throughput transactions.",
    techStack: ["Java", "Spring Boot", "Microservices", "Kafka"],
    category: "Enterprise Projects",
    stars: 189,
    forks: 32,
    github: "https://github.com/tirthachetry-zoho/order-management",
    demo: null,
    image: "/projects/oms.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "School Management Website",
    description: "Full-featured school website with admin panel for managing students, faculty, and academic content.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    category: "Full Stack Projects",
    stars: 567,
    forks: 89,
    github: "https://github.com/tirthachetry-zoho/school-management",
    demo: null,
    image: "/projects/school.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description: "Modern e-commerce platform with product catalog, shopping cart, and payment integration.",
    techStack: ["React", "Next.js", "Stripe", "PostgreSQL"],
    category: "Full Stack Projects",
    stars: 145,
    forks: 28,
    github: "https://github.com/tirthachetry-zoho/ecommerce",
    demo: null,
    image: "/projects/ecommerce.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "Municipality Portal",
    description: "Government portal for citizens to access municipal services, file complaints, and track requests.",
    techStack: ["Java", "Spring Boot", "React", "MySQL"],
    category: "Government Projects",
    stars: 312,
    forks: 56,
    github: "https://github.com/tirthachetry-zoho/municipality-portal",
    demo: null,
    image: "/projects/municipality.jpg",
    featured: true,
  },
];

const categories = ["All", "Featured Projects", "Enterprise Projects", "Full Stack Projects", "Government Projects"];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Projects Showcase</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects spanning AI, cloud engineering, open source, and enterprise applications.
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
          <Filter className="w-4 h-4 text-muted-foreground self-center mr-2" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 text-sm ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground border-primary"
                  : "hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-background border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                {project.featured && (
                  <span className="absolute top-3 left-3 px-2 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                    Featured
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {project.stars}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-3 h-3" />
                    {project.forks}
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm"
                  >
                    <GitBranch className="w-4 h-4" />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
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
          <button className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
