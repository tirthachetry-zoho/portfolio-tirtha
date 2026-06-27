const projects = [
  {
    id: 1,
    name: "tirtha/wms",
    stars: "★ 234 · java",
    description: "Warehouse Management System designed to streamline inventory and order operations for medium-scale businesses.",
    why: "why it matters: handles high-volume inventory transactions with eventual consistency patterns and optimized PostgreSQL queries for real-time stock tracking.",
    links: [
      { text: "View source →", href: "https://github.com/tirthachetry-zoho/warehouse-management" },
    ],
  },
  {
    id: 2,
    name: "tirtha/oms",
    stars: "★ 189 · java",
    description: "Backend contribution to enterprise telecom order management system handling high-throughput transactions.",
    why: "why it mattered: implemented Kafka-based event sourcing for order state changes, reducing database load by 40% during peak hours.",
    links: [
      { text: "View source →", href: "https://github.com/tirthachetry-zoho/order-management" },
    ],
  },
  {
    id: 3,
    name: "tirtha/school-mgmt",
    stars: "★ 567 · fullstack",
    description: "Full-featured school website with admin panel for managing students, faculty, and academic content.",
    why: "why it exists: demonstrates full-stack capabilities with React frontend and Node.js backend, implementing role-based access control and real-time notifications.",
    links: [
      { text: "View source →", href: "https://github.com/tirthachetry-zoho/school-management" },
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="mb-17">
      <div className="eyebrow">// work — three things I'd defend in an interview</div>
      <h2 className="text-[1.6rem] font-bold mb-[18px]">Selected projects</h2>

      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-[var(--card)] border border-[var(--rule)] rounded-md p-[26px_28px] mb-[22px] relative"
        >
          <div className="flex justify-between items-baseline gap-4 flex-wrap">
            <div className="mono font-bold text-[1.05rem]">
              {project.name.split('/').map((part, i, arr) => (
                <span key={i}>
                  {i > 0 && <span className="text-[var(--ink-soft)] font-normal">/</span>}
                  {part}
                </span>
              ))}
            </div>
            <div className="mono text-[0.78rem] text-[var(--ink-soft)]">
              {project.stars}
            </div>
          </div>
          <p className="my-3 text-[0.98rem]">{project.description}</p>
          <div className="border-l-2 border-[var(--moss)] pl-[14px] mono text-[0.82rem] text-[var(--ink-soft)] leading-[1.6]">
            {project.why}
          </div>
          <div className="mt-4 flex gap-[18px] mono text-[0.78rem]">
            {project.links.map((link) => (
              <a
                key={link.text}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--rust)] border-b border-transparent hover:border-[var(--rust)]"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
