export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-7xl font-bold text-red-500">404</h1>
      <h2 className="text-3xl font-semibold mt-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 mt-2">
        Sorry, the page you are looking for doesn't exist.
      </p>

      <a
        href="/"
        className="mt-6 px-6 py-3 bg-primary text-white rounded-lg"
      >
        Back Home
      </a>
    </div>
  );
}