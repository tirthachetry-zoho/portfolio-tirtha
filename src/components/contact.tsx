"use client";

import { motion } from "framer-motion";
import { Mail, Link as LinkIcon, GitBranch, X as Twitter, Send, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Contact Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Let's build something impactful together.
          </p>
          <p className="text-muted-foreground">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  placeholder="Project collaboration"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:tirthachetri12@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    tirthachetri12@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <LinkIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">LinkedIn</h4>
                  <a
                    href="https://linkedin.com/in/tirthachetry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    linkedin.com/in/tirthachetry
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Twitter className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Twitter</h4>
                  <a
                    href="https://twitter.com/tirthachetry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    @tirthachetry
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t">
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/tirthachetry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background border rounded-lg hover:border-primary/50 hover:text-primary transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <LinkIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/tirthachetry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background border rounded-lg hover:border-primary/50 hover:text-primary transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
