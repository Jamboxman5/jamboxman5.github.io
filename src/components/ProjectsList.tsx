import { useState } from "react";

export default function ProjectsList() {
  const [dropdownActive, setDropDownActive] = useState(false);

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
          className="absolute mt-2 bg-gray-800 divide-y divide-gray-100 rounded-lg shadow-sm w-44"
          onMouseLeave={() => setDropDownActive(false)}
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <a
                href="https://github.com/Jamboxman5/CSC495-AccommoDate-API"
                className="w-full text-left block px-4 py-2 hover:bg-gray-700 text-indigo-400 font-medium hover:text-indigo-300"
              >
                AccommoDate (API)
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Jamboxman5/CSC495-AccommoDate-Interface"
                className="w-full text-left block px-4 py-2 hover:bg-gray-700 text-indigo-400 font-medium hover:text-indigo-300"
              >
                AccommoDate (Interface)
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Jamboxman5/CSC344-Turing-Machine-Simulation"
                className="w-full text-left block px-4 py-2 hover:bg-gray-700 text-indigo-400 font-medium hover:text-indigo-300"
              >
                Turing Machine Simulation
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Jamboxman5/CSC454-Factory-Simulation"
                className="w-full text-left block px-4 py-2 hover:bg-gray-700 text-indigo-400 font-medium hover:text-indigo-300"
              >
                Drill / Press Simulation
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Jamboxman5/CSC344-Logical-Reduction"
                className="w-full text-left block px-4 py-2 hover:bg-gray-700 text-indigo-400 font-medium hover:text-indigo-300"
              >
                Logical Reduction (Clojure)
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Jamboxman5/CSC322-Dungeon-Crawler-Game"
                className="w-full text-left block px-4 py-2 hover:bg-gray-700 text-indigo-400 font-medium hover:text-indigo-300"
              >
                Dungeon Crawler
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Jamboxman5/CSC344-Shell-Regex"
                className="w-full text-left block px-4 py-2 hover:bg-gray-700 text-indigo-400 font-medium hover:text-indigo-300"
              >
                Shell / Regex / Mail Parser
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
