import { useState } from "react";
import { jobs, matches } from "../data/people.js";
import "./jobs.css";

function Jobs() {
  const [saved, setSaved] = useState([]);

  function toggleSave(jobId) {
    setSaved((current) =>
      current.includes(jobId)
        ? current.filter((id) => id !== jobId)
        : [...current, jobId],
    );
  }

  return (
    <section aria-label="Jobs">
      <p className="page-intro">
        Hardcoded jobs for the demo. Each job shows its best skill match from
        the hardcoded candidates.
      </p>
      <div className="job-list">
        {jobs.map((job) => {
          const match = matches.find((item) => item.job.id === job.id);
          const isSaved = saved.includes(job.id);
          return (
            <article className="job-card" key={job.id}>
              <header className="job-card__header">
                <div>
                  <h2>{job.title}</h2>
                  <p>
                    {job.location} <span aria-hidden="true">·</span> {job.type}
                  </p>
                </div>
                <span className="job-card__match">
                  {match ? `${match.percent}% match` : ""}
                </span>
              </header>
              <p>{job.description}</p>
              <ul className="skill-list" aria-label="Required skills">
                {job.requiredSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              {match && (
                <p className="job-card__candidate">
                  Best match: <strong>{match.candidate.name}</strong> (
                  {match.candidate.role})
                </p>
              )}
              <button
                type="button"
                className="job-card__save"
                onClick={() => toggleSave(job.id)}
                aria-pressed={isSaved}
              >
                {isSaved ? "Saved" : "Save job"}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Jobs;
