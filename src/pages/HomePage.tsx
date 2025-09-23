import { useEffect } from "react";
import NavigationBar from "../components/NavigationBar";

export default function HomePage() {
  useEffect(() => {
    document.title = "Home - Sam Thompson's Portfolio";
  });
  return (
    <div className="min-h-screen">
      <div className="w-screen bg-gradient-to-br from-indigo-800 to-orange-800 pt-40 pb-40 min-h-screen">
        <NavigationBar />
        <h1 className="text-center font-bold text-white">Samuel Thompson</h1>
        <h2 className="text-center font-semibold text-gray-200 mt-6">
          B.S. Software Engineering
        </h2>
        <div className="mx-auto my-10 py-10 bg-gray-800 shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
          <p className="text-3xl font-semibold text-gray-100 mb-4">
            Live Projects:
          </p>

          <div className="flex flex-col space-y-4">
            <button
              onClick={() => (window.location.href = "/reacttools/fueleco")}
              className="mt-5 bg-gradient-to-t from-indigo-800 to-indigo-800 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:from-purple-800 hover:to-indigo-800 hover:ring-2 hover:ring-white ring-offset-1"
            >
              Fuel Economy Calculator
            </button>
            <button
              onClick={() =>
                (window.location.href = "/CSC495-AccommoDate-Interface/")
              }
              className="mt-5 bg-gradient-to-t from-indigo-800 to-indigo-800 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:from-purple-800 hover:to-indigo-800 hover:ring-2 hover:ring-white ring-offset-1"
            >
              AccommoDate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
