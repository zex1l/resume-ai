import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className="text-white h-[80vh] flex items-center justify-center flex-col">
      <h1 className="text-9xl text-gray-500">404</h1>
      <p className="text-3xl text-gray-500">Page not found</p>
      <Link className="mt-6 text-gray-400 hover:text-white" to="/">
        Go to home
      </Link>
    </div>
  );
};
