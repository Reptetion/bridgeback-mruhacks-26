import { useState } from "react";
import Candidates from "./pages/candidates.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Matches from "./pages/matches.jsx";
import Jobs from "./pages/jobs.jsx";
import Bridgers from "./pages/bridgers.jsx";
import Settings from "./pages/settings.jsx";
import "./App.css";

const pages = {
  Dashboard: { title: "Dashboard", eyebrow: "Talent workspace", Page: Dashboard },
  Candidates: { title: "Candidates", eyebrow: "Find talent", Page: Bridgers },
  Bridgers: { title: "Bridgers", eyebrow: "Connect with talent", Page: Candidates },
  Jobs: { title: "Jobs", eyebrow: "Open roles", Page: Jobs },
<<<<<<< HEAD
  Settings: { title: "Settings", eyebrow: "Workspace", Page: Settings },
=======
  Bridgers: { title: "Bridgers", eyebrow: "Find talent", Page: Bridgers },
  Settings: { title: "Your Settings", eyebrow: "Settings", Page: Settings },
>>>>>>> d3df524617f635257ba989b57982642626b5fe24
};

const navigationItems = Object.keys(pages);

function App() {
  const [activePage, setActivePage] = useState("Candidates");
  const { title, eyebrow, Page } = pages[activePage];

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#" aria-label="Bridgeback home">
          <span className="brand-mark" aria-hidden="true">B</span>
          <span>Bridgeback</span>
        </a>

        <nav className="sidebar-nav" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <button
              className={`nav-item${item === activePage ? " is-active" : ""}`}
              type="button"
              key={item}
              onClick={() => setActivePage(item)}
              aria-current={item === activePage ? "page" : undefined}
            >
              <span className="nav-indicator" aria-hidden="true" />
              {item}
            </button>
          ))}
        </nav>
      </aside>

      <main className="main-content">
        <header className="page-header">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
        </header>
        <Page />
      </main>
    </div>
  
  );
}

export default App;
