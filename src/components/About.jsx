import { aboutText, services } from "../data/profile";

const About = ({ active }) => (
  <article className={`about${active ? " active" : ""}`}>
    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
      {aboutText.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </section>

    <section className="service">
      <h3 className="h3 service-title">What I'm Doing</h3>

      <ul className="service-list">
        {services.map((service) => (
          <li className="service-item" key={service.title}>
            <div className="service-icon-box">
              <img src={service.icon} alt={`${service.title} icon`} width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">{service.title}</h4>

              <p className="service-item-text">{service.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  </article>
);

export default About;
