import { candidates } from "../people.js";
import "./pages.css";

function CandidateList() {
  return (
    <section aria-label="Bridgers">
      <p className="page-intro">
        Find talent and connect with candidates who have the skills you need.
      </p>
      <div className="bridger-list">
        {candidates.map((candidate) => {
          return (
            <article className="bridger-card" key={candidate.id}>
              <img
                className="bridger-photo"
                src={candidate.photo}
                alt={`Photo of ${candidate.name}`}
              />
              <div>
                <h2>{candidate.name}</h2>
                <p>
                  {candidate.role} <span aria-hidden="true">·</span>{" "}
                  {candidate.status}
                </p>
                <ul className="skill-list" aria-label="Skills">
                  {candidate.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default CandidateList;