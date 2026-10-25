import { candidates } from "../data/people.js";
import "./pages.css";

function Dashboard() {
  return (
    <section aria-label="Dashboard">
      <p className="page-intro">
        BridgeBack at a glance, from the hardcoded demo data.
      </p>
      <div className="stat-grid">
        <article className="stat-card">
          <strong>{candidates.length}</strong>
          <span>Candidates</span>
        </article>
        <article className="stat-card">
          <strong>{candidates.filter((candidate) => candidate.status === "Available").length}</strong>
          <span>Available candidates</span>
        </article>
        <article className="stat-card">
          <strong>0</strong>
          <span>Active bridges</span>
        </article>
        <article className="stat-card">
          <strong>1</strong>
          <span>Active candidate chat</span>
        </article>
      </div>
    </section>
  );
}

export default Dashboard;
