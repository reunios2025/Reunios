import { Link } from 'react-router-dom';
import { FaceFrownIcon } from '@heroicons/react/24/outline';

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-white px-4">
      <FaceFrownIcon className="h-20 w-20 text-yellow-500 mb-6" />
      <h1 className="text-5xl font-bold mb-4 text-gray-800">Page Not Found</h1>
      <p className="text-gray-600 mb-6">Oops! The page you’re looking for doesn’t exist or has been moved.</p>
      <Link to="/" className="bg-yellow-400 text-black px-6 py-3 rounded hover:bg-yellow-500 transition">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
// This component displays a 404 Not Found page with a friendly message and a link back to the home page.