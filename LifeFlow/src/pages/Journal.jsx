import Button from "../components/Button";
import EmptyState from "../components/EmptyState";

function Journal() {
  return (
    <div className="page">

      <div className="page-header">

        <div>
          <h1>My Journal 📝</h1>
          <p>Reflect on your day and understand yourself better.</p>
        </div>

        <Button>
          + New Entry
        </Button>

      </div>

      <div className="journal-mood">

        <h2>How was your day?</h2>

        <div className="mood-options">
          <button>😞</button>
          <button>😐</button>
          <button>🙂</button>
          <button>😄</button>
          <button>🔥</button>
        </div>

      </div>

      <EmptyState
        icon="📖"
        title="No journal entries yet"
        message="Start writing about your day."
      />

    </div>
  );
}

export default Journal;