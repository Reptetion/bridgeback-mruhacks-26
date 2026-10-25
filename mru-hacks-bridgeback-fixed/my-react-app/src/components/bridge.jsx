export default function BridgeButton({ bridged, onBridge }) {
  return (
    <button
      type="button"
      className="bridge-button"
      onClick={onBridge}
      disabled={bridged}
    >
      {bridged ? "Bridged" : "Bridge"}
    </button>
  );
}
