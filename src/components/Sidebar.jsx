import { useState } from "react";
import {
  IoChevronDown,
  IoMailOutline,
  IoPhonePortraitOutline,
  IoCalendarOutline,
  IoLocationOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
} from "react-icons/io5";
import { profile } from "../data/profile";

const Sidebar = () => {
  const [active, setActive] = useState(false);

  return (
    <aside className={`sidebar${active ? " active" : ""}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src={profile.avatar}
            alt={profile.fullName}
            style={{ maxWidth: "200px", filter: "grayscale(1)" }}
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title={profile.fullName}>
            {profile.name}
          </h1>

          <p className="title">{profile.title}</p>
        </div>

        <button
          className="info_more-btn"
          onClick={() => setActive((prev) => !prev)}
          aria-expanded={active}
        >
          <span>{active ? "Hide Contacts" : "Show Contacts"}</span>
          <IoChevronDown />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IoMailOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href={`mailto:${profile.email}`} className="contact-link">
                {profile.email}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoPhonePortraitOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="contact-link"
              >
                {profile.phoneDisplay}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoCalendarOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time dateTime={profile.birthday.date}>
                {profile.birthday.display}
              </time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoLocationOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>{profile.sidebarLocation}</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a
              href={profile.github}
              className="social-link"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <IoLogoGithub />
            </a>
          </li>

          <li className="social-item">
            <a
              href={profile.linkedin}
              className="social-link"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <IoLogoLinkedin />
            </a>
          </li>

          <li className="social-item">
            <a
              href={profile.instagram}
              className="social-link"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <IoLogoInstagram />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
