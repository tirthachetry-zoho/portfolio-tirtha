export function Contact() {
  return (
    <section id="contact" className="mb-17">
      <div className="eyebrow">// contact</div>
      <h2 className="text-[1.6rem] font-bold mb-[18px]">Get in touch</h2>
      <p className="text-[1.12rem] max-w-[620px] text-[var(--ink)] leading-relaxed">
        Open to backend / infra roles, and always happy to talk through a hard pagination bug.
      </p>
      <div className="mono text-[0.9rem] mt-4 flex gap-7 flex-wrap">
        <a
          href="mailto:tirthachetri12@gmail.com"
          className="text-[var(--rust)] border-b border-[var(--rust)] pb-0.5"
        >
          tirthachetri12@gmail.com
        </a>
        <a
          href="https://github.com/tirthachetry-zoho"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--rust)] border-b border-[var(--rust)] pb-0.5"
        >
          github.com/tirthachetry-zoho
        </a>
        <a
          href="https://linkedin.com/in/tirthachetry"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--rust)] border-b border-[var(--rust)] pb-0.5"
        >
          linkedin.com/in/tirthachetry
        </a>
      </div>
    </section>
  );
}
