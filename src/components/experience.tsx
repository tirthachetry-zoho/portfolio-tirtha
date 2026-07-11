import { Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Thoughtworks",
    period: "Dec 2025 — Present",
    location: "Bengaluru, IN",
    highlights: [
      "Building a UPI distributed system serving international markets.",
      "Developed scalable microservices architecture using Java and Quarkus.",
      "Deployed and managed cloud infrastructure on AWS for distributed system components.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Grid Dynamics",
    period: "May 2023 — Dec 2025",
    location: "Bengaluru, IN",
    highlights: [
      "Developed scalable software solutions for diverse client needs.",
      "Deployed applications on server machines with AWS.",
      "Conducted code reviews to ensure adherence to coding standards and best practices.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Airtel Africa",
    period: "Aug 2022 — Mar 2023",
    location: "Bengaluru, IN",
    highlights: [
      "Mentored junior developers on coding standards and industry best practices.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Amdocs",
    period: "Jun 2019 — Nov 2021",
    location: "Pune, IN",
    highlights: [
      "Designed and developed microservices using Java, Spring Boot, and RESTful APIs for scalable backend systems.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16">
      <SectionHeading
        eyebrow="// experience"
        title="Where I've worked"
        description="A short timeline of the teams and systems I've contributed to."
      />

      <ol className="relative ml-3 border-l border-border">
        {experiences.map((exp, i) => (
          <Reveal as="li" key={`${exp.company}-${exp.period}`} delay={i * 0.05}>
            <div className="relative mb-10 pl-8 last:mb-0 sm:pl-10">
              {/* Timeline node */}
              <span
                className="absolute -left-[9px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-background"
                aria-hidden="true"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold text-foreground">
                  {exp.role}{" "}
                  <span className="text-primary">@ {exp.company}</span>
                </h3>
                <p className="mono text-xs text-muted-foreground sm:text-sm">
                  {exp.period}
                </p>
              </div>
              <p className="mono mt-0.5 text-xs text-muted-foreground">
                {exp.location}
              </p>

              <ul className="mt-3 space-y-2">
                {exp.highlights.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <Briefcase
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary/70"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}