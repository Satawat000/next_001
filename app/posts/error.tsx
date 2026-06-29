"use client";

function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-red-600">Something went wrong</h1>
      <p className="mt-4">{error.message}</p>
      <button
        onClick={reset}
        className="mt-4 rounded bg-black px-4 py-2 text-white"
      >
        Try again
      </button>
    </main>
  );
}

export default ErrorPage;
