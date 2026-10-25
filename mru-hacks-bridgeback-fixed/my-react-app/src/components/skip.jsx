export default function SkipButton({ skipped, onSkip }) {
  return (
    <button
      type="button"
      className="skip-button"
      onClick={onSkip}
      disabled={skipped}
    >
      {skipped ? "Skipped" : "Skip"}
    </button>
  );
}
