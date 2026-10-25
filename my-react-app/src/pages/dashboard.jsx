import { candidates } from "../data/people.js";
import "./pages.css";

function Dashboard() {
  const activeProfiles = candidates.slice(0, 4);

  function getInitials(name) {
    return name
      .split(" ")
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  }

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
          <strong>
            {candidates.filter((candidate) => candidate.status === "Available").length}
          </strong>
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

      <div className="dashboard-summary">
        <h2>Candidate summary</h2>
        <div className="dashboard-summary__list">
          {activeProfiles.map((candidate) => (
            <article className="dashboard-summary__item" key={candidate.id}>
              <div className="dashboard-summary__avatar">
                {candidate.photo ? (
                  <img src={candidate.photo} alt={candidate.name} />
                ) : (
                  <span>{getInitials(candidate.name)}</span>
                )}
              </div>

              <div className="dashboard-summary__info">
                <h3>{candidate.name}</h3>
                <p>{candidate.role}</p>
                <span>{candidate.match}% match</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
