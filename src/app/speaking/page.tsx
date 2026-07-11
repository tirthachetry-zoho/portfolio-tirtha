"use client";

import { motion } from "framer-motion";
import { Mic, Calendar, MapPin, Users, ExternalLink, Video, FileText } from "lucide-react";
import Link from "next/link";

const events = [
  {
    title: "Building Agentic AI Systems",
    event: "AI Conference 2024",
    date: "March 15, 2024",
    location: "San Francisco, CA",
    type: "Conference Talk",
    description: "Deep dive into multi-agent AI systems and their practical applications",
    slides: "https://slides.com/tirthachetry/agentic-ai",
    recording: "https://youtube.com/watch?v=example",
  },
  {
    title: "Cloud-Native Architecture Best Practices",
    event: "Cloud Summit 2024",
    date: "February 20, 2024",
    location: "Virtual",
    type: "Workshop",
    description: "Hands-on workshop on building scalable cloud-native applications",
    slides: "https://slides.com/tirthachetry/cloud-native",
    recording: "https://youtube.com/watch?v=example2",
  },
  {
    title: "Open Source Contribution Guide",
    event: "Dev Community Meetup",
    date: "January 10, 2024",
    location: "Bangalore, India",
    type: "Meetup Talk",
    description: "Guide for beginners on how to contribute to open source projects",
    slides: "https://slides.com/tirthachetry/opensource",
    recording: null,
  },
  {
    title: "System Design for Scale",
    event: "Tech Talks Series",
    date: "December 5, 2023",
    location: "Virtual",
    type: "Webinar",
    description: "Architectural patterns for building systems that scale",
    slides: "https://slides.com/tirthachetry/system-design",
    recording: "https://youtube.com/watch?v=example3",
  },
  {
    title: "AI-Powered Automation",
    event: "Enterprise AI Summit",
    date: "November 15, 2023",
    location: "New York, NY",
    type: "Panel Discussion",
    description: "Panel discussion on implementing AI automation in enterprises",
    slides: null,
    recording: null,
  },
  {
    title: "Developer Productivity Tools",
    event: "DevTools Conference",
    date: "October 8, 2023",
    location: "Berlin, Germany",
    type: "Conference Talk",
    description: "Tools and techniques to boost developer productivity",
    slides: "https://slides.com/tirthachetry/devtools",
    recording: "https://youtube.com/watch?v=example4",
  },
];

const types = ["All", "Conference Talk", "Workshop", "Meetup Talk", "Webinar", "Panel Discussion"];

export default function SpeakingPage() {
  return (
    <div className="wrap subpage py-16">
      <Link
        href="/"
        className="mono text-[0.8rem] text-muted-foreground border-b border-transparent pb-1 transition-colors hover:text-primary hover:border-primary inline-block mb-8"
      >
        ← Back to home
      </Link>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="text-[1.6rem] font-bold mb-4">Speaking & Community</h1>
        <p className="text-[1.12rem] text-[var(--ink-soft)] max-w-[620px]">
          Conference talks, workshops, and community events where I share knowledge and connect with developers.
        </p>
      </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-card border rounded-xl p-6 text-center">
            <Mic className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold mb-2">25+</div>
            <div className="text-sm text-muted-foreground">Talks Given</div>
          </div>
          <div className="bg-card border rounded-xl p-6 text-center">
            <Users className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold mb-2">10K+</div>
            <div className="text-sm text-muted-foreground">Audience Reached</div>
          </div>
          <div className="bg-card border rounded-xl p-6 text-center">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Cities</div>
          </div>
          <div className="bg-card border rounded-xl p-6 text-center">
            <Video className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Video Views</div>
          </div>
        </motion.div>

        {/* Type Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {types.map((type) => (
            <button
              key={type}
              className="px-4 py-2 rounded-full border hover:border-primary hover:text-primary transition-all duration-300 text-sm"
            >
              {type}
            </button>
          ))}
        </motion.div>

        {/* Events Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />
            <div className="space-y-8">
              {events.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-2 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                  <div className="bg-card border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {event.type}
                      </span>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-1">{event.event}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
                    <div className="flex gap-3">
                      {event.slides && (
                        <a
                          href={event.slides}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm"
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          Slides
                        </a>
                      )}
                      {event.recording && (
                        <a
                          href={event.recording}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 text-sm"
                        >
                          <Video className="w-4 h-4 mr-2" />
                          Recording
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-card border rounded-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Interested in having me speak?</h2>
            <p className="text-muted-foreground mb-6">
              I'm always open to speaking at conferences, meetups, and company events. Let's connect!
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
    </div>
  );
}
