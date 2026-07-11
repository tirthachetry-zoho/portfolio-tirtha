import { SectionHeading } from "@/components/ui/section-heading";
import { SkillBadge } from "@/components/ui/skill-badge";
import { Reveal } from "@/components/ui/reveal";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Java", "TypeScript", "Python", "Go", "SQL"],
  },
  {
    category: "Backend & Frameworks",
    skills: ["Spring Boot", "Quarkus", "Node.js", "Express", "FastAPI"],
  },
  {
    category: "Data & Messaging",
    skills: ["PostgreSQL", "Redis", "Kafka", "MongoDB", "Prisma"],
  },
  {
    category: "Cloud & Infra",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
  },
  {
    category: "AI & Tooling",
    skills: ["LangChain", "CrewAI", "OpenAI", "Framer Motion", "Git"],
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16">
      <SectionHeading
        eyebrow="// about"
        title="About me"
        description="Here's a quick snapshot of who I am and the tools I reach for."
      />

      <Reveal>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          I'm a{" "}
          <span className="font-medium text-foreground">
            software engineer focused on distributed systems
          </span>{" "}
          and backend infrastructure. I design and implement the core plumbing —
          queues, schedulers, and high-performance data stores — that keeps
          systems reliable under load. Most recently at{" "}
          <span className="font-medium text-foreground">Thoughtworks</span>, I
          build robust services with Java and Spring Boot, and increasingly
          explore agentic AI to automate the tedious parts of engineering.
        </p>
      </Reveal>

      <div className="mt-12 space-y-8">
        {skillGroups.map((group) => (
          <Reveal key={group.category} as="div">
            <h3 className="mono mb-3 text-sm uppercase tracking-wider text-primary">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2.5">
              {group.skills.map((skill, i) => (
                <SkillBadge key={skill} name={skill} index={i} />
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}