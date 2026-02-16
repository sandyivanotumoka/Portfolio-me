import type { Project } from "../data/projects";

type Props = {
  project: Project;
};

function ProjectCard({ project }: Props) {
  return (
    <div className="group surface surface-hover surface-glow p-6">
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
