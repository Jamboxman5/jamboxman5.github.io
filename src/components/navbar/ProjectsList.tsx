import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectsList() {
  const [dropdownActive, setDropDownActive] = useState(false);

  const navigate = useNavigate();

  const handle495 = () => {
    navigate("/projects/csc-495");
  };

  return (
    <div>
      <button
        onFocus={() => setDropDownActive(true)}
        onBlur={() => setDropDownActive(false)}
        onMouseEnter={() => setDropDownActive(true)}
        onClick={() => setDropDownActive(!dropdownActive)}
        className="!bg-transparent hover:!bg-indigo-800 text-white !text-lg font-semibold py-2 px-4 rounded transition duration-200 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
        type="button"
      >
        Projects
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {dropdownActive && (
        <div
          className="absolute mt-2 themed-element divide-y divide-gray-100 rounded-lg shadow-sm w-44"
          onMouseLeave={() => setDropDownActive(false)}
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <a
                href="https://cs.oswego.edu/~sthomps9/coursework/CS1WorkSite/index.html"
                className="w-full text-left block px-4 py-2 hover:bg-gray-400 text-indigo-400 font-medium hover:text-indigo-300"
              >
                Principles of Programming
              </a>
            </li>
            <li>
              <button
                onClick={handle495}
                className="w-full text-left block px-4 py-2 hover:bg-gray-400 text-indigo-400 font-medium hover:text-indigo-300"
              >
                Software Engineering Seminar (Capstone)
              </button>
            </li>
            <li>
              <a
                href="https://github.com/Jamboxman5/CSC344-Turing-Machine-Simulation"
                className="w-full text-left block px-4 py-2 hover:bg-gray-400 text-indigo-400 font-medium hover:text-indigo-300"
              >
                Programming Languages
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Jamboxman5/CSC454-Factory-Simulation"
                className="w-full text-left block px-4 py-2 hover:bg-gray-400 text-indigo-400 font-medium hover:text-indigo-300"
              >
                System Simulation
              </a>
            </li>
            <li>
              <a
                href="https://cs.oswego.edu/~sthomps9/coursework/ISC250/"
                className="w-full text-left block px-4 py-2 hover:bg-gray-400 text-indigo-400 font-medium hover:text-indigo-300"
              >
                Programming Through Mobile Apps
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Jamboxman5/CSC322-Dungeon-Crawler-Game"
                className="w-full text-left block px-4 py-2 hover:bg-gray-400 text-indigo-400 font-medium hover:text-indigo-300"
              >
                Systems Programming
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Jamboxman5/CSC322-Dungeon-Crawler-Game"
                className="w-full text-left block px-4 py-2 hover:bg-gray-700 text-indigo-400 font-medium hover:text-indigo-300"
              >
                Game Programming
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
