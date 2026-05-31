import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Articles } from "@/components/articles";
import { Projects } from "@/components/projects";
import { AILab } from "@/components/ai-lab";
import { OpenSource } from "@/components/open-source";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Articles />
      <Projects />
      <AILab />
      <OpenSource />
      <Contact />
    </div>
  );
}
