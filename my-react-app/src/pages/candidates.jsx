import { useState } from "react";
import { motion } from "framer-motion";
import { candidates } from "../data/people.js";
import "./pages.css";

function Candidates() {
  const [cards, setCards] = useState(candidates);
  const [bridged, setBridged] = useState([]);
  const [skipped, setSkipped] = useState([]);

  function handleDecision(id, decision) {
    if (decision === "bridge") {
      setBridged((current) => [...current, id]);
      setSkipped((current) => current.filter((item) => item !== id));
    }

    if (decision === "skip") {
      setSkipped((current) => [...current, id]);
      setBridged((current) => current.filter((item) => item !== id));
    }

    setCards((current) => current.filter((candidate) => candidate.id !== id));
  }

  function handleDragEnd(candidateId, info) {
    if (info.offset.x > 120) {
      handleDecision(candidateId, "bridge");
      return;
    }

    if (info.offset.x < -120) {
      handleDecision(candidateId, "skip");
      return;
    }
  }

  return (
    <section aria-label="Bridgers">
      <p className="page-intro">
        Swipe through matches. Drag right to bridge, or left to skip.
      </p>

      <div className="swipe-deck" aria-live="polite">
        {cards.length === 0 ? (
          <div className="swipe-empty-state">
            <h2>You&apos;ve reviewed everyone.</h2>
            <p>Check back later for more matches.</p>
          </div>
        ) : (
          cards.slice(0, 3).map((candidate, index) => {
            const isTop = index === 0;
            const offset = index * 16;
            const scale = 1 - index * 0.05;

            return (
              <motion.article
                key={candidate.id}
                className={`swipe-card${isTop ? " is-top" : ""}`}
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{
                  scale,
                  y: offset,
                  opacity: 1,
                  rotate: index === 0 ? 0 : index % 2 === 0 ? 2 : -2,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                drag={isTop ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragEnd={(_, info) => {
                  if (isTop) {
                    handleDragEnd(candidate.id, info);
                  }
                }}
                whileDrag={isTop ? { rotate: 8, scale: 1.02 } : undefined}
                style={{ zIndex: cards.length - index }}
              >
                <img
                  className="bridger-photo swipe-card__photo"
                  src={candidate.photo}
                  alt={`Photo of ${candidate.name}`}
                />

                <div className="swipe-card__content">
                  <div className="swipe-card__meta">
                    <strong>{candidate.match}%</strong>
                    <span>Match</span>
                  </div>

                  <div className="swipe-card__header">
                    <div>
                      <h2>{candidate.name}</h2>
                      <p>{candidate.role}</p>
                    </div>
                    <span className="swipe-card__status">
                      {candidate.status}
                    </span>
                  </div>

                  <p className="swipe-card__location">
                    📍 {candidate.location}
                  </p>

                  <ul className="skill-list" aria-label="Skills">
                    {candidate.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>

                  <p className="swipe-card__bio">{candidate.bio}</p>

                  <div className="swipe-card__footer">
                    <div className="bridger-actions">
                      <button
                        type="button"
                        className="skip-button"
                        onClick={() => handleDecision(candidate.id, "skip")}
                      >
                        Skip
                      </button>
                      <button
                        type="button"
                        className="bridge-button"
                        onClick={() => handleDecision(candidate.id, "bridge")}
                      >
                        Connect
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })
        )}
      </div>

      {bridged.length > 0 && (
        <p className="bridger-status">Bridged: {bridged.length}</p>
      )}
      {skipped.length > 0 && (
        <p className="bridger-status bridger-status--muted">
          Skipped: {skipped.length}
        </p>
      )}
    </section>
  );
}

export default Candidates;