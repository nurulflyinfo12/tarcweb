"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-red-500">
        Something went wrong!
      </h1>

      <p className="mt-4 text-gray-600">
        {error.message}
      </p>

      <button
        onClick={() => reset()}
        className="mt-6 px-6 py-3 bg-black text-white rounded-lg"
      >
        Try Again
      </button>
    </div>
  );
}