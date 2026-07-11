import { Contact } from "@/components/contact";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="wrap subpage py-16">
      <Link
        href="/"
        className="mono text-[0.8rem] text-muted-foreground border-b border-transparent pb-1 transition-colors hover:text-primary hover:border-primary inline-block mb-8"
      >
        ← Back to home
      </Link>
      <Contact />
    </div>
  );
}
