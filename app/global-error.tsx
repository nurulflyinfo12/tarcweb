"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold text-red-500">
            System Error
          </h1>

          <p className="mt-4">
            Something unexpected happened.
          </p>

          <button
            onClick={() => reset()}
            className="mt-6 px-6 py-3 bg-black text-white rounded-lg"
          >
            Reload
          </button>
        </div>
      </body>
    </html>
  );
}