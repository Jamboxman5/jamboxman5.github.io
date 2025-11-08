import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ToolsList() {
  const [dropdownActive, setDropDownActive] = useState(false);

  const navigate = useNavigate();

  const handleBoatCalculator = () => {
    navigate("/reacttools/fueleco");
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
        Tools
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
              <button
                onClick={handleBoatCalculator}
                className="w-full text-left block px-4 py-2 hover:themed-highlight text-indigo-400 font-medium hover:text-indigo-300"
              >
                Fuel Economy Tracker
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
