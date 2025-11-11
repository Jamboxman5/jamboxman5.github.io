import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/navbar/NavigationBar";
import accommodate from "/accommodate.png";
import checkmate from "/checkmate.png";
import abnpgame from "/abnpgame.png";
import { Link } from "react-router-dom";
import AboutMe from "../components/AboutMe";
export default function HomePage() {
  useEffect(() => {
    document.title = "Home - Sam Thompson's Portfolio";
  });

  useEffect(() => {
    fetch("https://api.github.com/repos/Jamboxman5/JahSkills/commits").then(
      (res) => res.json()
    );
    // .then((data) => {
    //   console.log(data);
    // });
  });

  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <div className="w-full themed-bg pt-40 pb-40 h-full">
        <NavigationBar />
        <h1 className="text-center font-bold themed-title">Welcome!</h1>
        <p className="text-center font-medium themed-title text-xl mt-3">
          Gaze upon my stuff! Or else!
        </p>

        <div className="flex flex-wrap mt-10">
          <AboutMe />

          <div className="mx-auto my-10 py-10 themed-element shadow-lg rounded-4xl p-8 w-8/10 lg:max-w-7/16 text-center">
            <div className="flex flex-col items-center justify-center space-y-4 h-full">
              <p className=" text-3xl text-center font-bold">Live Projects:</p>

              <button
                onClick={() => navigate("/reacttools/fueleco")}
                className=" w-full mt-5 bg-gradient-to-t from-indigo-800 to-indigo-800 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:from-purple-800 hover:to-indigo-800 hover:ring-2 hover:ring-white ring-offset-1"
              >
                Fuel Economy Calculator
              </button>

              <button
                onClick={() =>
                  (window.location.href = "/CSC495-AccommoDate-Interface/#/")
                }
                className=" w-full mt-5 bg-gradient-to-t from-indigo-800 to-indigo-800 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:from-purple-800 hover:to-indigo-800 hover:ring-2 hover:ring-white ring-offset-1"
              >
                AccommoDate
              </button>
            </div>
          </div>
        </div>

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
      </div>
    </div>
  );
}
