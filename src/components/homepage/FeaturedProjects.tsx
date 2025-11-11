import accommodate from "/accommodate.png";
import checkmate from "/checkmate.png";
import abnpgame from "/abnpgame.png";
import { Link } from "react-router-dom";

export default function FeaturedProjects() {
  return (
    <div className="w-full bg-gray-900 mt-20">
      <p className="text-white font-bold text-center text-3xl pt-10">
        Featured Projects
      </p>
      <div className="flex flex-wrap w-full mt-10 min-h-[240px] pb-16">
        <a
          href="https://github.com/Jamboxman5/CSC495-AccommoDate-API"
          className="w-7/24 text-center bg-gradient-to-r from-indigo-900 to-purple-900 mx-auto rounded-2xl transition-all duration-300 transform hover:-translate-y-3 hover:ring-2 hover:ring-white hover:ring-offset-1 shadow-md hover:shadow-xl"
        >
          <img src={accommodate} className="rounded-t-2xl" />
          <div className="text-gray-200 hover:text-gray-200 font-medium text-2xl text-center py-4">
            AccommoDate
          </div>
        </a>

        <Link
          to="/projects/CheckMate"
          className="w-7/24 text-center bg-gradient-to-r from-purple-900 to-purple-900 mx-auto rounded-2xl transition-all duration-300 transform hover:-translate-y-3 hover:ring-2 hover:ring-white hover:ring-offset-1 shadow-md hover:shadow-xl"
        >
          <img src={checkmate} className="rounded-t-2xl" />
          <div className="text-gray-200 hover:text-gray-200 font-medium text-2xl text-center py-4">
            CheckMate
          </div>
        </Link>
        <a
          href="https://github.com/Jamboxman5/ABNP-Game"
          className="w-7/24 text-center bg-gradient-to-r from-purple-900 to-orange-900 mx-auto rounded-2xl transition-all duration-300 transform hover:-translate-y-3 hover:ring-2 hover:ring-white hover:ring-offset-1 shadow-md hover:shadow-xl"
        >
          <img src={abnpgame} className="rounded-t-2xl" />
          <div className="text-gray-200 hover:text-gray-200 font-medium text-2xl text-center py-4">
            ABNPGame
          </div>
        </a>
      </div>
    </div>
  );
}
