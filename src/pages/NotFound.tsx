import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <h1 className="mb-4 font-display text-8xl font-bold">
          <span className="text-gradient">404</span>
        </h1>
        <p className="mb-8 text-xl text-gray-300">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center rounded-lg bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-sky-500/25 transition-all duration-300 hover:scale-105 hover:shadow-sky-400/40"
        >
          <ArrowLeft className="mr-2" size={20} />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
