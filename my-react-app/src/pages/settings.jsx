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
    <section aria-label="Settings">
      <p className="page-intro">
        Demo settings only. Nothing to see here
      </p>
    </section>
  );
}

export default Settings;
