import { useState } from "react";
import { IoChevronDown, IoDocumentTextOutline } from "react-icons/io5";
import { categories, projects } from "../data/projects";
import ProjectModal from "./ProjectModal";

const initialsOf = (title) =>
  title
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

const Portfolio = ({ active }) => {
  const [filter, setFilter] = useState("All");
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const matchesFilter = (project) =>
    filter === "All" || project.category === filter.toLowerCase();

  const selectFilter = (category) => {
    setFilter(category);
    setSelectOpen(false);
  };

  return (
    <article className={`portfolio${active ? " active" : ""}`}>
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {categories.map((category) => (
            <li className="filter-item" key={category}>
              <button
                className={filter === category ? "active" : ""}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button
            className={`filter-select${selectOpen ? " active" : ""}`}
            onClick={() => setSelectOpen((prev) => !prev)}
            aria-expanded={selectOpen}
          >
            <div className="select-value">{filter}</div>

            <div className="select-icon">
              <IoChevronDown />
            </div>
          </button>

          <ul className="select-list">
            {categories.map((category) => (
              <li className="select-item" key={category}>
                <button onClick={() => selectFilter(category)}>
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {projects.map((project) => (
            <li
              className={`project-item${matchesFilter(project) ? " active" : ""}`}
              key={project.id}
            >
              <button
                className="project-trigger"
                onClick={() => setSelectedProject(project)}
                aria-label={`Open case study for ${project.title}`}
              >
                <figure className="project-img">
                  <div className="project-item-icon-box" title="Case study">
                    <IoDocumentTextOutline />
                  </div>

                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className={
                        project.imageFit === "contain"
                          ? "project-img-contain"
                          : undefined
                      }
                    />
                  ) : (
                    <div className="project-placeholder">
                      <span>
                        {project.initials ?? initialsOf(project.title)}
                      </span>
                    </div>
                  )}
                </figure>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.displayCategory}</p>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </article>
  );
};

export default Portfolio;
