import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Dragon from "./components/Dragon";

const App = () => {
  const [activePage, setActivePage] = useState("About");

  const navigate = (page) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Dragon />

      <main>
        <Sidebar />

        <div className="main-content">
          <Navbar activePage={activePage} onNavigate={navigate} />

          <About active={activePage === "About"} />
          <Resume active={activePage === "Resume"} />
          <Portfolio active={activePage === "Portfolio"} />
          <Contact active={activePage === "Contact"} />
        </div>
      </main>
    </>
  );
};

export default App;
