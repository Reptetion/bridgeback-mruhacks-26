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
        Demo settings only. Nothing here is sent to a server.
      </p>
      <form className="settings-card" onSubmit={handleSave}>
        <label>
          Workspace name
          <input
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              setSaved(false);
            }}
          />
        </label>
        <button type="submit">Save settings</button>
        {saved && <p className="bridger-status">Saved for this demo.</p>}
      </form>
    </section>
  );
}

export default Settings;
