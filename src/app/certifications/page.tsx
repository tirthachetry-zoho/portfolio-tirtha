"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, CheckCircle } from "lucide-react";
import Link from "next/link";

const certifications = [
  {
    title: "AWS Certified Solutions Architect - Professional",
    issuer: "Amazon Web Services",
    date: "March 2023",
    credential: "AWS-SAP-123456",
    skills: ["Cloud Architecture", "AWS Services", "Security", "Cost Optimization"],
    image: "/certifications/aws-sap.png",
    link: "https://aws.amazon.com/certification/",
  },
  {
    title: "Google Cloud Professional Data Engineer",
    issuer: "Google Cloud",
    date: "January 2023",
    credential: "GCP-PDE-789012",
    skills: ["Data Engineering", "BigQuery", "Dataflow", "ML Pipelines"],
    image: "/certifications/gcp-pde.png",
    link: "https://cloud.google.com/certification",
  },
  {
    title: "Microsoft Certified: Azure Solutions Architect Expert",
    issuer: "Microsoft",
    date: "November 2022",
    credential: "AZ-305",
    skills: ["Azure Architecture", "Hybrid Cloud", "Security", "Networking"],
    image: "/certifications/azure-sae.png",
    link: "https://learn.microsoft.com/certifications",
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "August 2022",
    credential: "TF-DEV-345678",
    skills: ["TensorFlow", "Deep Learning", "ML Models", "Deployment"],
    image: "/certifications/tensorflow.png",
    link: "https://www.tensorflow.org/certificate",
  },
  {
    title: "Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "June 2022",
    credential: "CKA-901234",
    skills: ["Kubernetes", "Container Orchestration", "Cluster Management", "Troubleshooting"],
    image: "/certifications/cka.png",
    link: "https://www.cncf.io/certification/cka/",
  },
  {
    title: "Certified Kubernetes Application Developer (CKAD)",
    issuer: "Cloud Native Computing Foundation",
    date: "April 2022",
    credential: "CKAD-567890",
    skills: ["Kubernetes", "Application Deployment", "Helm", "Configuration"],
    image: "/certifications/ckad.png",
    link: "https://www.cncf.io/certification/ckad/",
  },
];

const categories = ["All", "AI & ML", "Cloud", "Development", "DevOps"];

export default function CertificationsPage() {
  return (
    <div className="wrap py-16">
      <Link
        href="/"
        className="mono text-[0.8rem] text-[var(--ink-soft)] border-b border-transparent pb-1 transition-colors hover:text-[var(--rust)] hover:border-[var(--rust)] inline-block mb-8"
      >
        ← Back to home
      </Link>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="text-[1.6rem] font-bold mb-4">Certifications</h1>
        <p className="text-[1.12rem] text-[var(--ink-soft)] max-w-[620px]">
          Professional certifications validating expertise in cloud, AI, and development technologies.
        </p>
      </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
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

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Award className="w-16 h-16 text-primary/50" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <Calendar className="w-3 h-3" />
                  {cert.date}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <span key={skill} className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                      <CheckCircle className="w-3 h-3" />
                      {skill}
                    </span>
                  ))}
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline text-sm"
                >
                  View Credential <ExternalLink className="w-3 h-3 ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-card border rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold mb-4">Continuous Learning</h2>
          <p className="text-muted-foreground mb-6">
            Technology evolves rapidly, and I believe in continuous learning. These certifications represent milestones in my journey,
            but the real value comes from applying this knowledge to solve real-world problems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm">Hands-on experience with certified technologies</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm">Regular skill updates and recertification</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm">Knowledge sharing with the community</span>
            </div>
          </div>
        </motion.div>
    </div>
  );
}
