'use client';

function GoHomeBtn() {
  return (
    <div>
      <button
        type="button"
        // temp fix
        onClick={() => (window.location.href = '/')}
        className="button button-green button-smaller"
      >
        Go Home
      </button>
    </div>
  );
}

export default GoHomeBtn;
