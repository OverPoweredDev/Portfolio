import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-lvh text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">404</h1>
      <p className="text-lg md:text-xl mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="text-blue-500 hover:underline text-lg md:text-xl">
        Go back to the homepage
      </Link>
    </div>
  );
}
