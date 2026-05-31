"use client";

import { motion } from "framer-motion";
import { Database, Cloud, Code2, Server, GitBranch, Zap, GraduationCap, Briefcase, Award, Rocket, MessageSquare, Users } from "lucide-react";

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
  { year: "2020", title: "Computer Science Degree", company: "NIT Silchar", description: "Graduated with honors", icon: GraduationCap },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Software Engineer specializing in building scalable backend systems with Java, Spring Boot, and Microservices Architecture. Passionate about creating efficient solutions and mentoring developers.
          </p>
        </motion.div>

        {/* Core Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Core Interests</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-background border rounded-xl hover:border-primary/50 transition-all duration-300 cursor-pointer"
              >
                <interest.icon className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-semibold mb-2">{interest.title}</h4>
                <p className="text-sm text-muted-foreground">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Career Timeline</h3>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-2 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                    <div className="bg-background border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-bold text-primary">{item.year}</span>
                        <item.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm font-medium text-primary mb-1">{item.company}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
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
