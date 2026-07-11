"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, X, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";

const socials = [
  { label: "GitHub", href: "https://github.com/tirthachetry-zoho", Icon: GithubIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/tirthachetry", Icon: LinkedinIcon },
  { label: "X", href: "https://x.com/tirthachetry", Icon: X },
];

export function Hero() {
  const [time, setTime] = useState("");
  const reduce = useReducedMotion();

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item: Variants = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
      };

  return (
    <header className="relative overflow-hidden">
      {/* Subtle background grid + glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(100,255,218,0.10),transparent_45%)]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#8892b0_1px,transparent_1px),linear-gradient(to_bottom,#8892b0_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="wrap pt-32 pb-20 sm:pt-40 sm:pb-28">
        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          animate="show"
          className="max-w-3xl"
        >
          <motion.p
            variants={item}
            className="mono mb-5 text-sm text-primary"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl"
          >
            Tirtha Chetry.
          </motion.h1>

          <motion.h2
            variants={item}
            className="mt-2 text-3xl font-bold leading-tight tracking-tight text-muted-foreground sm:text-5xl"
          >
            I build scalable{" "}
            <span className="gradient-text">distributed systems</span> &
            agentic AI.
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            I'm a software engineer specializing in backend infrastructure,
            event-driven architecture, and LLM-powered tooling — turning hard
            engineering problems into reliable, production-grade systems.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
            >
              View my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="/resume"
              className="inline-flex items-center gap-2 rounded-md border border-primary/40 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              View résumé
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex items-center gap-5"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="mono">BLR</span>
              <span aria-hidden="true">·</span>
              <span className="mono">{time || "—"}</span>
            </div>
            <ul className="flex items-center gap-1">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex rounded-md p-2 text-muted-foreground transition-colors hover:-translate-y-0.5 hover:text-primary"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}