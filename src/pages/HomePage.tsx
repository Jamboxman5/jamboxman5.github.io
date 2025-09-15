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

        <div className="pt-16"></div>
      </div>
    </div>
  );
}
