import { useState } from "react";
import { candidates, jobs, matchScore } from "../data/people.js";
import BridgeButton from "../components/bridge.jsx";
import SkipButton from "../components/skip.jsx";
import "./jobs.css";

function Candidates() {
  const [bridged, setBridged] = useState([]);
  const [skipped, setSkipped] = useState([]);

  function bridge(id) {
    setBridged((current) => [...current, id]);
    setSkipped((current) => current.filter((item) => item !== id));
  }

  function skip(id) {
    setSkipped((current) => [...current, id]);
    setBridged((current) => current.filter((item) => item !== id));
  }

  return (
    <section aria-label="Bridgers">
      <p className="page-intro">
        Find talent. Each bridger is a hardcoded candidate, shown with the job
        their skills match best. Bridge to keep a match, Skip to pass on it.
      </p>
      <div className="bridger-list">
        {candidates.map((candidate) => {
          const bestJob = jobs
            .map((job) => ({ job, ...matchScore(candidate, job) }))
            .sort((a, b) => b.percent - a.percent)[0];
          const isBridged = bridged.includes(candidate.id);
          const isSkipped = skipped.includes(candidate.id);
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
                {bestJob && (
                  <p>
                    Best job match: <strong>{bestJob.job.title}</strong> (
                    {bestJob.percent}%)
                  </p>
                )}
                <div className="bridger-actions">
                  <BridgeButton
                    bridged={isBridged}
                    onBridge={() => bridge(candidate.id)}
                  />
                  <SkipButton
                    skipped={isSkipped}
                    onSkip={() => skip(candidate.id)}
                  />
                </div>
                {isBridged && (
                  <p className="bridger-status">
                    Bridged to {bestJob.job.title}
                  </p>
                )}
                {isSkipped && (
                  <p className="bridger-status">Skipped for now</p>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Candidates;