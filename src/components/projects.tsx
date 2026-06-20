"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Star, GitFork, Filter, Sparkles } from "lucide-react";
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
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gradient-text">Projects Showcase</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of projects spanning AI, cloud engineering, open source, and enterprise applications.
          </p>
        </motion.div>

        {/* Enhanced Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          <Filter className="w-4 h-4 text-muted-foreground self-center mr-2" />
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full border transition-all duration-300 text-sm font-medium ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground border-primary glow"
                  : "glass border-primary/20 hover:border-primary/50 hover:text-primary"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Premium Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="gradient-border h-full">
                <div className="glass border border-primary/20 rounded-2xl overflow-hidden h-full p-6">
                  {/* Project Image/Gradient */}
                  <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 rounded-xl relative overflow-hidden mb-6">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    {project.featured && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                        className="absolute top-3 left-3 px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-medium flex items-center gap-1"
                      >
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </motion.div>
                    )}
                  </div>

                  {/* Project Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6 pb-6 border-b border-primary/10">
                    <div className="flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5" />
                      <span className="font-medium">{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <GitFork className="w-3.5 h-3.5" />
                      <span className="font-medium">{project.forks}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 glass border border-primary/30 rounded-xl hover:border-primary hover:bg-primary/10 transition-all duration-300 text-sm font-medium"
                    >
                      <GitBranch className="w-4 h-4" />
                      Code
                    </motion.a>
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:opacity-90 transition-all duration-300 text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 glass border border-primary/30 text-primary rounded-full font-medium hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
