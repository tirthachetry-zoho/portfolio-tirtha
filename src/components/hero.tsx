"use client";

import { useState, useEffect } from "react";

export function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setTime(now.toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="py-14 pb-10 border-b border-[var(--rule)]">
      <div className="flex justify-between items-start gap-6 flex-wrap">
        <div>
          <h1 className="text-[2.6rem] font-bold tracking-[-0.01em] mb-1.5">Tirtha Chetry</h1>
          <div className="mono text-[0.85rem] text-[var(--moss)] tracking-[0.04em]">
            <span className="text-[var(--ink-soft)]">$ whoami → </span>
            senior software engineer, distributed systems
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="mono text-[0.75rem] text-[var(--ink-soft)]">
            <span className="text-[var(--moss)]">📍</span> BLR · {time}
          </div>
          <nav className="flex gap-5 mono text-[0.8rem] pt-2.5">
            <a href="#about" className="text-[var(--ink-soft)] border-b border-transparent pb-1 transition-colors hover:text-[var(--rust)] hover:border-[var(--rust)]">
              About
            </a>
            <a href="#projects" className="text-[var(--ink-soft)] border-b border-transparent pb-1 transition-colors hover:text-[var(--rust)] hover:border-[var(--rust)]">
              Work
            </a>
            <a href="#articles" className="text-[var(--ink-soft)] border-b border-transparent pb-1 transition-colors hover:text-[var(--rust)] hover:border-[var(--rust)]">
              Writing
            </a>
            <a href="#contact" className="text-[var(--ink-soft)] border-b border-transparent pb-1 transition-colors hover:text-[var(--rust)] hover:border-[var(--rust)]">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
