import { useState } from "react";
import { candidates } from "../people.js";
import "./pages.css";

function CandidateList() {
  const [messages, setMessages] = useState({});

  function showMessage(id, message) {
    setMessages((current) => ({ ...current, [id]: message }));
  }

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
                <div className="bridger-actions">
                  <button
                    className="bridge-button"
                    type="button"
                    onClick={() =>
                      showMessage(candidate.id, "Candidate bridged successfully.")
                    }
                  >
                    Bridge
                  </button>
                  <button
                    className="skip-button"
                    type="button"
                    onClick={() =>
                      showMessage(candidate.id, "Candidate skipped for now.")
                    }
                  >
                    Skip
                  </button>
                </div>
                {messages[candidate.id] && (
                  <p className="bridger-status">{messages[candidate.id]}</p>
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