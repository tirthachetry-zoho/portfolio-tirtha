"use client";

import { motion } from "framer-motion";
import { Database, Cloud, Code2, Server, GitBranch, Zap, GraduationCap, Briefcase, Award, Rocket, MessageSquare, Users, Sparkles } from "lucide-react";

const interests = [
  { icon: Server, title: "Backend Systems", description: "Building scalable backend systems with Java, Spring Boot, and Microservices Architecture" },
  { icon: Database, title: "Database Design", description: "Designing and optimizing PostgreSQL schemas for high-volume transactions" },
  { icon: Cloud, title: "Cloud Infrastructure", description: "Deploying and managing cloud infrastructure on AWS for distributed systems" },
  { icon: Code2, title: "Microservices", description: "Developing microservices architecture using Java, Spring Boot, and RESTful APIs" },
  { icon: Zap, title: "Real-time Streaming", description: "Implementing real-time data streaming with Apache Kafka for payment processing" },
  { icon: GitBranch, title: "Open Source", description: "Contributing to and maintaining open source projects" },
  { icon: Users, title: "Mentoring", description: "Mentoring junior developers on coding standards and industry best practices" },
  { icon: Rocket, title: "Full SDLC", description: "Participating in full SDLC: requirement analysis, design, development, testing, and production support" },
];

const timeline = [
  { year: "2025", title: "Senior Software Engineer", company: "Thougtworks", description: "Building UPI distributed system for international markets", icon: Briefcase },
  { year: "2023", title: "Software Engineer", company: "Grid Dynamics", description: "Developed scalable microservices architecture using Java and Quarkus", icon: Briefcase },
  { year: "2022", title: "Software Engineer", company: "Amdocs", description: "Worked on Order Management System (OMS) for telecom clients", icon: Briefcase },
  { year: "2021", title: "Software Developer", company: "Amdocs", description: "Developed scalable software solutions for diverse client needs", icon: Briefcase },
  { year: "2019", title: "Computer Science Degree", company: "NIT Silchar", description: "Graduated with honors", icon: GraduationCap },
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
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
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">About</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Software Engineer specializing in building scalable backend systems with Java, Spring Boot, and Microservices Architecture. Passionate about creating efficient solutions and mentoring developers.
          </p>
        </motion.div>

        {/* Enhanced Core Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Core Interests</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="group"
              >
                <div className="gradient-border h-full">
                  <div className="glass border border-primary/20 rounded-2xl p-6 h-full hover:border-primary/50 transition-all duration-300">
                    <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                      <interest.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">{interest.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{interest.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Career Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-12 text-center">Career Timeline</h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Enhanced timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-20"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="absolute left-6 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg shadow-primary/50"
                    />
                    <div className="gradient-border">
                      <div className="glass border border-primary/20 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-bold">{item.year}</span>
                          <div className="p-2 bg-secondary/10 rounded-lg">
                            <item.icon className="w-4 h-4 text-secondary" />
                          </div>
                        </div>
                        <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                        <p className="text-sm font-medium text-primary mb-2">{item.company}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
