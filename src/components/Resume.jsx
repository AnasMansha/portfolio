import {
  IoBookOutline,
  IoBriefcaseOutline,
  IoCodeSlashOutline,
  IoTrophyOutline,
  IoDownloadOutline,
} from "react-icons/io5";
import {
  achievements,
  education,
  experience,
  profile,
} from "../data/profile";
import { skillCategories } from "../data/skills";

const Resume = ({ active }) => (
  <article className={`resume${active ? " active" : ""}`}>
    <header className="resume-header">
      <h2 className="h2 article-title">Resume</h2>

      <a
        className="resume-download"
        href={profile.resume}
        download
        aria-label="Download resume as PDF"
        title="Download PDF"
      >
        <IoDownloadOutline />
      </a>
    </header>

    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <IoBriefcaseOutline />
        </div>
        <h3 className="h3">Experience</h3>
      </div>

      <ol className="timeline-list">
        {experience.map((job) => (
          <li className="timeline-item" key={`${job.company}-${job.period}`}>
            <h4 className="h4 timeline-item-title">{job.role}</h4>
            <span>
              {job.companyUrl ? (
                <a
                  href={job.companyUrl}
                  className="timeline-company"
                  target="_blank"
                  rel="noreferrer"
                >
                  {job.company}
                </a>
              ) : (
                job.company
              )}
              {` · ${job.period}`}
            </span>
            <p className="timeline-text">{job.text}</p>
          </li>
        ))}
      </ol>
    </section>

    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <IoBookOutline />
        </div>
        <h3 className="h3">Education</h3>
      </div>

      <ol className="timeline-list">
        {education.map((item) => (
          <li className="timeline-item" key={item.school}>
            <h4 className="h4 timeline-item-title">{item.school}</h4>
            <span>{item.period}</span>
            <p className="timeline-text">{item.text}</p>
          </li>
        ))}
      </ol>
    </section>

    <section className="skill">
      <div className="title-wrapper">
        <div className="icon-box">
          <IoCodeSlashOutline />
        </div>
        <h3 className="h3 skills-title">Technical Skills</h3>
      </div>

      <div className="skills-categories">
        {skillCategories.map(({ category, skills }) => (
          <div className="skills-category" key={category}>
            <h4 className="h4 skills-category-title">{category}</h4>

            <ul className="skills-icons-grid">
              {skills.map(({ name, Icon }) => (
                <li className="skill-icon-item" key={name}>
                  <div className="skill-icon" aria-hidden="true">
                    <Icon size={24} />
                  </div>
                  <span className="skill-icon-name">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    <section className="timeline achievements">
      <div className="title-wrapper">
        <div className="icon-box">
          <IoTrophyOutline />
        </div>
        <h3 className="h3">Achievements</h3>
      </div>

      <ol className="timeline-list">
        {achievements.map((achievement) => (
          <li className="timeline-item" key={achievement}>
            <p className="timeline-text">{achievement}</p>
          </li>
        ))}
      </ol>
    </section>
  </article>
);

export default Resume;
