import { useNavigate } from "react-router-dom";
import GamesList from "./GamesList";
import ToolsList from "./ToolsList";

export default function NavigationBar() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  return (
<nav className="bg-gradient-to-r from-gray-900 to-indigo-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-8xl mx-auto px-4">
        <ul className="flex space-x-7 py-5">
          <button
            onClick={handleHome}
              className="!bg-transparent hover:!bg-gray-800 text-white !text-lg font-semibold py-2 px-4 rounded transition duration-200 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
          >
            Projects
          </button>
          <ToolsList/>
          
          <GamesList/>


          <button
            onClick={handleHome}
            className="ml-auto !bg-transparent hover:!bg-indigo-800 text-white font-semibold py-2 px-4 rounded transition duration-200"
          >
            Home
          </button>
        </ul>
      </div>
    </nav>
  );
}
