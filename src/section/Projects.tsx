import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      data-animate
      className="min-h-screen py-32 border-t border-white/10"
    >
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 " data-stagger>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;
