export function About() {
  return (
    <section id="about" className="mb-17">
      <div className="eyebrow">// about</div>
      <p className="text-[1.12rem] max-w-[620px] text-[var(--ink)] leading-relaxed">
        I build the parts of the system nobody notices until they break — queues, schedulers,
        and the boring infrastructure that keeps data moving correctly under load.
        Most recently at <em className="text-[var(--moss)]">Thoughtworks</em>, where I spend more time reading postmortems than writing slide decks.
      </p>
      <div className="mono text-[0.82rem] text-[var(--ink-soft)] mt-[18px] flex gap-2.5 flex-wrap">
        <span className="chip">Java</span>
        <span className="chip">Spring Boot</span>
        <span className="chip">Kafka</span>
        <span className="chip">PostgreSQL</span>
        <span className="chip">AWS</span>
        <span className="chip">Quarkus</span>
      </div>
    </section>
  );
}
