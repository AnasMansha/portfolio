const pages = ["About", "Resume", "Portfolio", "Contact"];

const Navbar = ({ activePage, onNavigate }) => (
  <nav className="navbar">
    <ul className="navbar-list">
      {pages.map((page) => (
        <li className="navbar-item" key={page}>
          <button
            className={`navbar-link${activePage === page ? " active" : ""}`}
            onClick={() => onNavigate(page)}
          >
            {page}
          </button>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
