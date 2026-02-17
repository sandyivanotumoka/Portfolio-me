import type { Project } from "../data/projects";
import { useRef } from "react";

type Props = {
  project: Project;
};

function ProjectCard({ project }: Props) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      className="group relative overflow-hidden p-6 rounded-xl transition-all duration-300
      bg-white dark:bg-neutral-900/60
      border border-black/5 dark:border-white/10
      shadow-[0_8px_24px_rgba(0,0,0,0.06)]
      dark:shadow-[0_10px_40px_rgba(0,0,0,0.45)]
      hover:-translate-y-1
      hover:shadow-[0_14px_40px_rgba(0,0,0,0.12)]
      dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
    >
      {/* spotlight hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background:
            "radial-gradient(300px circle at var(--mx) var(--my), rgba(255,255,255,0.25), transparent 60%)",
        }}
      />

      <h3 className="text-xl font-semibold">{project.title}</h3>

      <p className="mt-3 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-3 py-1 rounded-full bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-4 text-sm">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-500 hover:underline"
        >
          Live →
        </a>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-500 hover:underline"
        >
          Github →
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
