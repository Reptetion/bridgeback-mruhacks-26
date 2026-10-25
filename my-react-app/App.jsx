import { useState } from "react";
import Dashboard from "./pages/dashboard.jsx";
import Candidates from "./pages/bridgers.jsx";
import Settings from "./pages/settings.jsx";
import Bridgers from "./pages/chat.jsx";
import "./App.css";

const pages = [
  { name: "Dashboard", eyebrow: "Talent workspace", component: Dashboard },
  { name: "Candidates", eyebrow: "Find talent", component: Candidates },
  { name: "Bridgers", eyebrow: "Connect with talent", component: Bridgers },
  { name: "Settings", eyebrow: "Workspace", component: Settings },
];

function App() {
  const [activePage, setActivePage] = useState("Candidates");
  const page = pages.find((item) => item.name === activePage);
  const Page = page.component;

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#" aria-label="Bridgeback home">
          Bridgeback
        </a>

        <nav className="sidebar-nav" aria-label="Main navigation">
          {pages.map((item) => (
            <button
              className={`nav-item${item.name === activePage ? " is-active" : ""}`}
              type="button"
              key={item.name}
              onClick={() => setActivePage(item.name)}
              aria-current={item.name === activePage ? "page" : undefined}
            >
              <span className="nav-indicator" aria-hidden="true" />
              {item.name}
            </button>
          ))}
        </nav>
      </aside>

      <main className="main-content">
        <header className="page-header">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.name}</h1>
        </header>
        <Page />
      </main>
    </div>
  
  );
}

export default App;
