import { candidates, jobs, matches } from "../data/people.js";
import "./jobs.css";

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
          <strong>{jobs.length}</strong>
          <span>Jobs</span>
        </article>
        <article className="stat-card">
          <strong>{matches.length}</strong>
          <span>Skill matches</span>
        </article>
        <article className="stat-card">
          <strong>1</strong>
          <span>Active candidate chat</span>
        </article>
      </div>
      <div className="match-list" style={{ marginTop: 16 }}>
        {matches.slice(0, 2).map(({ job, candidate, percent }) => (
          <article className="match-card" key={job.id}>
            <h2>
              {candidate.name} <span aria-hidden="true">→</span> {job.title}
            </h2>
            <p>
              {percent}% skill match. {candidate.skills.join(", ")}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Dashboard;
