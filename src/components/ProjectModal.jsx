import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { IoCloseOutline, IoLogoGithub } from "react-icons/io5";

const initialsOf = (title) =>
  title
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

const overlayMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 0.8 },
  exit: { opacity: 0 },
  transition: { duration: 0.25, ease: "easeOut" },
};

const panelMotion = {
  initial: { opacity: 0, scale: 0.92, y: 28 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.96, y: 16 },
  transition: { type: "spring", damping: 26, stiffness: 320, mass: 0.85 },
};

const ProjectModal = ({ project, onClose }) => {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [project, onClose]);

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          key="case-study-modal"
          className="modal-container active"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} case study`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
        >
          <motion.div
            className="overlay active"
            onClick={onClose}
            {...overlayMotion}
          />

          <motion.section className="project-modal" {...panelMotion}>
            <button
              className="modal-close-btn"
              onClick={onClose}
              ref={closeBtnRef}
              aria-label="Close case study"
            >
              <IoCloseOutline />
            </button>

            <div className="project-modal-content has-scrollbar">
              <figure className="project-modal-banner">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className={
                      project.imageFit === "contain"
                        ? "project-img-contain"
                        : undefined
                    }
                  />
                ) : (
                  <div className="project-placeholder project-placeholder-banner">
                    <span>
                      {project.initials ?? initialsOf(project.title)}
                    </span>
                  </div>
                )}
              </figure>

              <p className="project-modal-category">{project.displayCategory}</p>
              <h3 className="h3 project-modal-title">{project.title}</h3>

              <div className="project-modal-section">
                <h4 className="h5 project-modal-heading">Overview</h4>
                <p>{project.overview}</p>
              </div>

              <div className="project-modal-section">
                <h4 className="h5 project-modal-heading">Challenge</h4>
                <p>{project.challenge}</p>
              </div>

              <div className="project-modal-section">
                <h4 className="h5 project-modal-heading">Solution</h4>
                <p>{project.solution}</p>
              </div>

              <div className="project-modal-section">
                <h4 className="h5 project-modal-heading">Tech stack</h4>
                <ul className="tech-tags">
                  {project.tech.map((item) => (
                    <li className="tech-tag" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-modal-section">
                <h4 className="h5 project-modal-heading">Results &amp; impact</h4>
                <ul className="results-list">
                  {project.results.map((result) => (
                    <li key={result}>{result}</li>
                  ))}
                </ul>
              </div>

              {project.links?.github && (
                <div className="project-modal-links">
                  <a
                    className="project-link-btn"
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IoLogoGithub />
                    <span>View repo</span>
                  </a>
                </div>
              )}
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ProjectModal;
