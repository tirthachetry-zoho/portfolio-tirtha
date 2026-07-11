import Link from "next/link";
import { ArrowRight, Trophy, Award, Terminal, Mic2 } from "lucide-react";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Articles } from "@/components/articles";
import { AILab } from "@/components/ai-lab";
import { OpenSource } from "@/components/open-source";
import { Contact } from "@/components/contact";
import { SectionHeading } from "@/components/ui/section-heading";

const exploreLinks = [
  { href: "/achievements", Icon: Trophy, title: "Achievements", desc: "Recognition, awards, and milestones from my engineering journey." },
  { href: "/certifications", Icon: Award, title: "Certifications", desc: "Professional certifications validating expertise in Cloud and AI." },
  { href: "/tech-stack", Icon: Terminal, title: "Tech Stack", desc: "The tools and technologies I use to build scalable systems." },
  { href: "/speaking", Icon: Mic2, title: "Speaking", desc: "My talks and presentations at various conferences and meetups." },
];

export default function Home() {
  return (
    <div className="wrap pb-8">
      <Hero />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[200px_1fr]">
        <div className="hidden lg:block" aria-hidden="true" />
        <main>
          <About />
          <Experience />
          <Projects />
          <Articles />
          <AILab />
          <OpenSource />

          <section className="scroll-mt-24 border-t border-border py-16">
            <SectionHeading eyebrow="// more" title="More to explore" />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {exploreLinks.map(({ href, Icon, title, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="group rounded-xl border border-border bg-surface/60 p-6 transition-colors hover:border-primary/50"
                >
                  <div className="mb-4 flex items-center gap-4">
                    <div className="rounded-xl bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                      {title}
                    </h3>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {desc}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    View {title}{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <Contact />
        </main>
      </div>
    </div>
  );
}