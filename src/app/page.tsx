import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Articles } from "@/components/articles";
import { Projects } from "@/components/projects";
import { AILab } from "@/components/ai-lab";
import { OpenSource } from "@/components/open-source";
import { Contact } from "@/components/contact";
import { CommitRail } from "@/components/commit-rail";
import Link from "next/link";
import { ArrowRight, Trophy, Award, Terminal, Mic2 } from "lucide-react";

export default function Home() {
  return (
    <div className="wrap">
      <Hero />
      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 pt-11">
        <CommitRail />
        <main>
          <About />
          <Projects />
          <Articles />
          <AILab />
          <OpenSource />
          
          <section className="py-24 border-t border-primary/10">
            <h2 className="text-3xl font-bold mb-12 gradient-text">More to Explore</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/achievements" className="group p-6 glass border border-primary/20 rounded-2xl hover:border-primary/50 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Trophy className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Achievements</h3>
                </div>
                <p className="text-muted-foreground mb-4">Recognition, awards, and milestones from my engineering journey.</p>
                <div className="flex items-center text-primary font-medium">
                  View Achievements <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link href="/certifications" className="group p-6 glass border border-primary/20 rounded-2xl hover:border-primary/50 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Certifications</h3>
                </div>
                <p className="text-muted-foreground mb-4">Professional certifications validating expertise in Cloud and AI.</p>
                <div className="flex items-center text-primary font-medium">
                  View Certifications <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link href="/tech-stack" className="group p-6 glass border border-primary/20 rounded-2xl hover:border-primary/50 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Terminal className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Tech Stack</h3>
                </div>
                <p className="text-muted-foreground mb-4">The tools and technologies I use to build scalable systems.</p>
                <div className="flex items-center text-primary font-medium">
                  View Tech Stack <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link href="/speaking" className="group p-6 glass border border-primary/20 rounded-2xl hover:border-primary/50 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Mic2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Speaking</h3>
                </div>
                <p className="text-muted-foreground mb-4">My talks and presentations at various conferences and meetups.</p>
                <div className="flex items-center text-primary font-medium">
                  View Speaking <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </section>

          <Contact />
        </main>
      </div>
    </div>
  );
}
