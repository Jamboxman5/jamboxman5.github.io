import { useEffect } from "react";
import NavigationBar from "../components/NavigationBar";

export default function HomePage() {
  useEffect(() => {
    document.title = "Home - Sam Thompson's Portfolio";
  });
  return (
    <div className="">
      <div className="w-screen bg-gradient-to-br from-indigo-800 to-orange-800 pt-40 min-h-screen">
        <NavigationBar />
        <h1 className="text-center font-bold text-white">
          Welcome to my Portfolio!
        </h1>
        <div className="mx-auto my-20 py-10 bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
          <p className="text-3xl font-bold text-gray-700 mb-4">My Stuff:</p>

          <button
            onClick={() => (window.location.href = "/tools/boat.html")}
            className="mt-5 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Fuel Economy Calculator
          </button>
        </div>
      </div>
    </div>
  );
}
