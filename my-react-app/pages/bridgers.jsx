import { useState } from "react";
import { candidates } from "../people.js";
import BridgeButton from "../functions/bridge.jsx";
import SkipButton from "../functions/skip.jsx";
import "./pages.css";

function CandidateList() {
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
        Find talent. Bridge to keep a candidate, or Skip to pass on them.
      </p>
      <div className="bridger-list">
        {candidates.map((candidate) => {
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
                    Bridged successfully
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

export default CandidateList;