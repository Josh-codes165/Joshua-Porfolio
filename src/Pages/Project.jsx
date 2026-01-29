import { projects } from "../Componenets/projects";


function Project() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Project;
