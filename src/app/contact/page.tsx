import { Contact } from "@/components/contact";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="wrap py-16">
      <Link
        href="/"
        className="mono text-[0.8rem] text-[var(--ink-soft)] border-b border-transparent pb-1 transition-colors hover:text-[var(--rust)] hover:border-[var(--rust)] inline-block mb-8"
      >
        ← Back to home
      </Link>
      <Contact />
    </div>
  );
}
