export type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Personal website built with React and modern UI design.",
    tech: ["React", "TypeScript", "Tailwind"],
    link: "#",
    github: "https://github.com/USERNAME/portfolio",
  },
  {
    title: "Task Management App",
    description: "Fullstack task manager with authentication and database.",
    tech: ["Node.js", "Express", "MongoDB"],
    link: "#",
    github: "https://github.com/USERNAME/portfolio",
  },
  {
    title: "Realtime Chat App",
    description: "Realtime messaging using websockets.",
    tech: ["Socket.io", "React", "Firebase"],
    link: "#",
    github: "https://github.com/USERNAME/portfolio",
  },
];
