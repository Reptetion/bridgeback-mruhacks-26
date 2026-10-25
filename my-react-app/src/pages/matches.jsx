import { matches } from "../data/people.js";
import "./jobs.css";

function Matches() {
  return (
    <section aria-label="Matches">
      <p className="page-intro">
        Every job paired with its best hardcoded candidate by shared skills.
      </p>
      <div className="match-list">
        {matches.map(({ job, candidate, matched, percent }) => (
          <article className="match-card" key={job.id}>
            <h2>
              {job.title} <span aria-hidden="true">·</span> {candidate.name}
            </h2>
            <p>
              {percent}% match ({matched.join(", ")}). {job.description}
            </p>
            <ul className="skill-list" aria-label="Required skills">
              {job.requiredSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Matches;
