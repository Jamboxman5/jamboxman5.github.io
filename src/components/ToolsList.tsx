import { useState } from "react"

export default function ToolsList() {

    const [dropdownActive, setDropDownActive] = useState(false);

    return (
        <div>
            <button
              onFocus={() => setDropDownActive(true)}
              onBlur={() => setDropDownActive(false)}
              onMouseEnter={() => setDropDownActive(true)}
              className="!bg-transparent hover:!bg-gray-800 text-white !text-lg font-semibold py-2 px-4 rounded transition duration-200 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
              type="button"
            >            
            Games
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>

          {dropdownActive && (
              <div className="absolute mt-2 bg-gray-900 divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
                            onMouseLeave={() => setDropDownActive(false)}
                >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <a
                      href="https://jamboxman5.github.io/tools/boat.html"
                      className="block px-4 py-2 hover:bg-gray-800 text-white dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Boat Calculator
                    </a>
                  </li>
                </ul>
              </div>
            )}
        </div>
    )

}
