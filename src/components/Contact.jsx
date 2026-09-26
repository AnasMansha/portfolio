import {
  IoMailOutline,
  IoPhonePortraitOutline,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoInstagram,
  IoLocationOutline,
} from "react-icons/io5";
import { mapEmbed, profile } from "../data/profile";

const contactMethods = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: IoMailOutline,
  },
  {
    label: "Phone",
    value: profile.phoneDisplay,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    Icon: IoPhonePortraitOutline,
  },
  {
    label: "LinkedIn",
    value: "muhammad-anas-mansha",
    href: profile.linkedin,
    Icon: IoLogoLinkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "AnasMansha",
    href: profile.github,
    Icon: IoLogoGithub,
    external: true,
  },
  {
    label: "Instagram",
    value: "@anasmansha",
    href: profile.instagram,
    Icon: IoLogoInstagram,
    external: true,
  },
  {
    label: "Location",
    value: profile.location,
    Icon: IoLocationOutline,
  },
];

const Contact = ({ active }) => (
  <article className={`contact${active ? " active" : ""}`}>
    <header>
      <h2 className="h2 article-title">Contact</h2>
    </header>

    <section className="mapbox">
      <figure>
        <iframe
          src={mapEmbed}
          title="Map showing Lahore, Pakistan"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </figure>
    </section>

    <section className="contact-methods-section">
      <h3 className="h3 contact-methods-title">Get in touch</h3>

      <ul className="contact-methods">
        {contactMethods.map(({ label, value, href, Icon, external }) => {
          const content = (
            <>
              <div className="icon-box">
                <Icon />
              </div>

              <div className="contact-method-info">
                <p className="contact-title">{label}</p>
                <p className="contact-method-value">{value}</p>
              </div>
            </>
          );

          return (
            <li className="contact-method" key={label}>
              {href ? (
                <a
                  className="contact-method-card"
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  {content}
                </a>
              ) : (
                <div className="contact-method-card is-static">{content}</div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  </article>
);

export default Contact;
