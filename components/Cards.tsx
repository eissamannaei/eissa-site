import { ArrowIcon } from "./icons";

type Project = {
  name: string;
  status: string;
  desc: string;
  tags: string[];
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-sm border border-line bg-bg p-6 transition-colors duration-300 hover:border-accent">
      <div className="flex items-center justify-between">
        <span className="mono-label" style={{ color: "var(--color-accent)" }}>
          <span className="inline-block h-1.5 w-1.5 rounded-pill bg-accent" />{" "}
          {project.status}
        </span>
        <ArrowIcon className="h-4 w-4 text-ink-soft transition-colors group-hover:text-accent rtl:-scale-x-100" />
      </div>
      <h3 className="font-display mt-5 text-xl font-bold text-ink">
        {project.name}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
        {project.desc}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <li
            key={t}
            className="rounded-xs border border-line bg-bg-panel px-2.5 py-1 font-mono text-[11px] text-ink-soft"
          >
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function SkillCard({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="group rounded-sm border border-line bg-bg p-5 transition-colors duration-300 hover:border-accent hover:bg-accent-tint/40">
      <h3 className="font-display text-base font-bold text-ink">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{desc}</p>
    </div>
  );
}

export function ServiceCard({
  index,
  name,
  desc,
}: {
  index: number;
  name: string;
  desc: string;
}) {
  return (
    <div className="group flex gap-5 rounded-sm border border-line bg-bg p-6 transition-colors duration-300 hover:border-accent">
      <span className="font-mono text-sm text-accent">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <h3 className="font-display text-lg font-bold text-ink">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{desc}</p>
      </div>
    </div>
  );
}

export function TalkItem({
  name,
  context,
  topic,
}: {
  name: string;
  context: string;
  topic: string;
}) {
  return (
    <div className="group flex flex-col gap-2 border-b border-line py-6 transition-colors hover:border-accent sm:flex-row sm:items-center sm:justify-between">
      <div>
        <span className="mono-label">{context}</span>
        <h3 className="font-display mt-2 text-lg font-semibold text-ink transition-colors group-hover:text-accent">
          {name}
        </h3>
      </div>
      <span className="rounded-xs border border-line bg-bg-panel px-3 py-1 font-mono text-[11px] text-ink-soft">
        {topic}
      </span>
    </div>
  );
}

export function WritingItem({
  name,
  topic,
  soon,
}: {
  name: string;
  topic: string;
  soon: string;
}) {
  return (
    <div className="group flex items-center justify-between gap-4 border-b border-line py-6">
      <div>
        <span className="mono-label">{topic}</span>
        <h3 className="font-display mt-2 text-lg font-semibold text-ink">
          {name}
        </h3>
      </div>
      <span className="shrink-0 font-mono text-[11px] text-ink-soft">
        {soon}
      </span>
    </div>
  );
}
