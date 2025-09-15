import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  return (
    <nav className="bg-gradient-to-l from-blue-500 to-indigo-700 text-white shadow-md fixed top-0 left-0 w-full z-50 max-h-[25vh] overflow-y-auto">
      <div className="max-w-8xl mx-auto px-4">
        <ul className="flex space-x-7 py-5">
          <button
            onClick={handleHome}
            className="!bg-transparent hover:!bg-indigo-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
          >
            Projects
          </button>
          <button
            onClick={handleHome}
            className="!bg-transparent hover:!bg-indigo-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
          >
            Tools
          </button>
          <button
            onClick={handleHome}
            className="!bg-transparent hover:!bg-indigo-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
          >
            Games
          </button>
          <button
            onClick={handleHome}
            className="!bg-transparent hover:!bg-indigo-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
          >
            Art
          </button>

          <button
            onClick={handleHome}
            className="!bg-transparent hover:!bg-blue-400 text-white font-semibold py-2 px-4 rounded transition duration-200"
          >
            Home
          </button>
        </ul>
      </div>
    </nav>
  );
}
