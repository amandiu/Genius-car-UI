import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <h1 className="text-6xl font-bold text-orange-500">404</h1>
      <h2 className="text-2xl font-semibold mt-2">Oops! Page Not Found</h2>
      <p className="mt-2 text-gray-600 text-center">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
