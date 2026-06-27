const commits = [
  {
    hash: "a3f9c1e",
    message: "refactor portfolio with paper/ink aesthetic",
    meta: "today",
    active: true,
  },
  {
    hash: "7d02b6a",
    message: "add distributed systems architecture patterns",
    meta: "1 week ago",
    active: false,
  },
  {
    hash: "e44a08f",
    message: "implement event sourcing case study",
    meta: "2 weeks ago",
    active: false,
  },
  {
    hash: "19cc502",
    message: "write kafka consumer optimization guide",
    meta: "1 month ago",
    active: false,
  },
  {
    hash: "f001b3d",
    message: "launch engineering blog portfolio",
    meta: "2 months ago",
    active: false,
  },
];

export function CommitRail() {
  return (
    <aside className="sticky top-10 self-start border-l-2 border-[var(--rule)] pl-5 hidden lg:block">
      <div className="mono text-[0.7rem] uppercase tracking-[0.08em] text-[var(--ink-soft)] mb-[18px]">
        git log --oneline
      </div>

      {commits.map((commit) => (
        <div
          key={commit.hash}
          className={`relative mb-[26px] cursor-pointer group ${
            commit.active ? "is-active" : ""
          }`}
        >
          <div
            className={`absolute left-[-23px] top-1 w-[9px] h-[9px] rounded-full border-2 ${
              commit.active
                ? "bg-[var(--rust)] border-[var(--rust)]"
                : "bg-[var(--paper)] border-[var(--moss)]"
            }`}
          />
          <div className="mono text-[0.72rem] text-[var(--rust)]">
            {commit.hash}
          </div>
          <div className="mono text-[0.78rem] text-[var(--ink)] leading-[1.4] mt-[2px]">
            {commit.message}
          </div>
          <div className="mono text-[0.68rem] text-[var(--ink-soft)] mt-[3px]">
            {commit.meta}
          </div>
        </div>
      ))}
    </aside>
  );
}
