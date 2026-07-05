export function About() {
  return (
    <section id="about" className="mb-17">
      <div className="eyebrow">// about</div>
      <p className="text-[1.12rem] max-w-[620px] text-[var(--ink)] leading-relaxed">
        I am a <em className="text-[var(--moss)]">Java Backend Developer</em> focused on building scalable distributed systems.
        I design and implement the core infrastructure — queues, schedulers, and high-performance databases — that keeps systems running under load.
        Most recently at <em className="text-[var(--moss)]">Thoughtworks</em>, I specialize in crafting robust backend solutions using Java and Spring Boot.
      </p>
      <div className="mono text-[0.82rem] text-[var(--ink-soft)] mt-[18px] flex gap-2.5 flex-wrap">
        <span className="chip">Java</span>
        <span className="chip">Spring Boot</span>
        <span className="chip">AWS</span>
        <span className="chip">Redis</span>
        <span className="chip">PostgreSQL</span>
        <span className="chip">Kafka</span>
        <span className="chip">Quarkus</span>
      </div>
    </section>
  );
}
