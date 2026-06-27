import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Articles } from "@/components/articles";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { CommitRail } from "@/components/commit-rail";

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
          <Contact />
        </main>
      </div>
    </div>
  );
}
