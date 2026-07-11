import type { ReactNode } from "react";

type SectionHeadingProps = {
  /** Small mono label shown above the title (e.g. "// about") */
  eyebrow?: string;
  title: string;
  /** Optional supporting description */
  description?: ReactNode;
  /** id used for anchor navigation */
  id?: string;
  className?: string;
};

/**
 * Consistent section header used across the portfolio.
 * Renders semantic <h2> with an accessible eyebrow label.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  className = "",
}: SectionHeadingProps) {
  return (
    <header className={`mb-10 ${className}`}>
      {eyebrow && (
        <p className="eyebrow" aria-hidden="true">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </header>
  );
}