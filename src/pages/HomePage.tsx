import { useEffect } from "react";
import NavigationBar from "../components/NavigationBar";

export default function HomePage() {
  useEffect(() => {
    document.title = "Home - Sam Thompson's Portfolio";
  });
  return (
    <div className="">
      <div className="w-screen bg-gradient-to-br from-indigo-600 to-orange-400 pt-40 min-h-screen">
        <NavigationBar />
        <h1 className="text-center font-bold text-white">
          Welcome to my Portfolio!
        </h1>
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">My Stuff:</h1>

          <a
            href="/tools/boat.html"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
          >
            Boat Fuel Economy Calculator
          </a>
        </div>{" "}
      </div>
    </div>
  );
}
