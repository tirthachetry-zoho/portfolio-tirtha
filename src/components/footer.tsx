export function Footer() {
  return (
    <footer className="border-t border-[var(--rule)] py-6 pb-12 mono text-[0.72rem] text-[var(--ink-soft)] flex justify-between">
      <span>tirtha chetry — built with Next.js, just to prove I still can</span>
      <span>last deploy: {new Date().toISOString().split('T')[0]}</span>
    </footer>
  );
}
