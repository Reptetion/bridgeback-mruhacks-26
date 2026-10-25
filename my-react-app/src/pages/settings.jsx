import { useState } from "react";
import "./jobs.css";

function Settings() {
  const [name, setName] = useState("BridgeBack demo");
  const [saved, setSaved] = useState(false);

  function handleSave(event) {
    event.preventDefault();
    setSaved(true);
  }

  return (
    <section aria-label="Your Settings">
      <p className="page-intro">
        Nothing here to see (for demo purposes only)
      </p>
    </section>
  );
}

export default Settings;
