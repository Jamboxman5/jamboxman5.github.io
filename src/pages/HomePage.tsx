import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/navbar/NavigationBar";
import mePNG from "/me.png";
import accommodate from "/accommodate.png";
import checkmate from "/checkmate.png";
import abnpgame from "/abnpgame.png";
import GitHubCalendar from "react-github-calendar";
import ThemeSelector from "../components/ThemeSelector";

export default function HomePage() {
  useEffect(() => {
    document.title = "Home - Sam Thompson's Portfolio";
  });

  useEffect(() => {
    fetch("https://api.github.com/repos/Jamboxman5/JahSkills/commits")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      });
  });

  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <div className="w-full themed-bg pt-40 pb-40 h-full">
        <NavigationBar />
        <h1 className="text-center font-bold text-white">Welcome!</h1>
        <p className="text-center font-medium text-gray-200 text-xl mt-3">
          Gaze upon my stuff! Or else!
        </p>

        <div className="flex flex-wrap mt-10">
          <div className="mx-auto my-10 py-10 bg-gray-800 shadow-lg rounded-4xl p-8 w-8/10 lg:max-w-7/16 text-center">
            <p className="text-white text-3xl text-center font-bold">
              Samuel Thompson
            </p>
            <p className="text-gray-300 text-lg text-center font-semibold mt-4">
              B.S. Software Engineering <br /> SUNY College at Oswego
            </p>
            <div className="flex flex-wrap py-10 space-x-6 ">
              {/* Photo */}
              <div className="flex flex-col w-8/10 lg:max-w-9/20 space-y-4 mx-auto">
                <img src={mePNG} />
                <p className="text-white text-lg font-medium">
                  "Hey, that's me!" <br /> - Sam Thompson, 2025
                </p>
              </div>
              {/* Info */}
              <div className="flex flex-col items-center justify-center w-8/10 lg:max-w-9/20 space-y-8 mx-auto">
                {/* Languages */}
                <div className="text-center text-gray-300 text-lg font-medium mx-auto">
                  <p className="text-white font-semibold ">Languages</p>
                  <div className="flex flex-wrap mx-auto">
                    <p className="text-gray-300 font-thin mx-2">Java</p>
                    <p className="text-gray-300 font-thin mx-2">JavaScript</p>
                    <p className="text-gray-300 font-thin mx-2">TypeScript</p>
                    <p className="text-gray-300 font-thin mx-2">XML</p>
                    <p className="text-gray-300 font-thin mx-2">HTML</p>
                    <p className="text-gray-300 font-thin mx-2">CSS</p>
                    <p className="text-gray-300 font-thin mx-2">C</p>
                    <p className="text-gray-300 font-thin mx-2">C++</p>
                    <p className="text-gray-300 font-thin mx-2">C#</p>
                    <p className="text-gray-300 font-thin mx-2">SQL</p>
                    <p className="text-gray-300 font-thin mx-2">Clojure</p>
                    <p className="text-gray-300 font-thin mx-2">Python</p>
                    <p className="text-gray-300 font-thin mx-2">ASP / Prolog</p>
                    <p className="text-gray-300 font-thin mx-2">YAML</p>
                  </div>
                </div>
                {/* About Me */}
                <div className="text-center text-gray-300 text-lg font-medium mx-auto">
                  <p className="text-white font-semibold ">About Me</p>
                  <p className="text-gray-300 font-thin">
                    I like computers. I like solving problems. I like solving
                    problems with computers. I also like to make things that
                    help people solve their own problems. If you've got a
                    computer problem, hardware or software, let me help solve
                    it.
                  </p>
                </div>
              </div>
            </div>
            {/* Contact */}
            <div className="text-center text-gray-300 text-lg font-medium w-7/8 mx-auto">
              <p className="text-white font-semibold ">Contact</p>
              <table className="w-full">
                <tbody>
                  <tr>
                    <td>
                      <p className="text-left font-normal">Email</p>
                    </td>
                    <td>
                      <p className="text-center mx-4 text-white">|</p>
                    </td>
                    <td>
                      <p className="text-right font-thin">
                        samthompson1818@gmail.com
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="text-left font-normal">Phone</p>
                    </td>
                    <td>
                      <p className="text-center mx-4 text-white">|</p>
                    </td>
                    <td>
                      <p className="text-right ml-auto font-thin">
                        +1 (315) 200-9977
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="text-left font-normal">Discord</p>
                    </td>
                    <td>
                      <p className="text-center mx-4 text-white">|</p>
                    </td>
                    <td>
                      <p className="text-right ml-auto font-thin">@sthomps9</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a
              href="https://github.com/Jamboxman5"
              className="text-gray-200 hover:!text-gray-200"
            >
              <p className="text-center font-semibold text-xl text-white mb-4  pt-10">
                GitHub Activity Tracker
              </p>
              <GitHubCalendar
                username="Jamboxman5"
                colorScheme="dark"
                blockSize={16} // Size of each square
                blockMargin={3} // Spacing between squares
                fontSize={16} // Font size for month/day labels
                theme={{
                  light: [
                    "#ebedf0",
                    "#9be9a8",
                    "#40c463",
                    "#30a14e",
                    "#216e39",
                  ],
                  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                }}
              />
            </a>
          </div>

          <div className="mx-auto my-10 py-10 bg-gray-800 shadow-lg rounded-4xl p-8 w-8/10 lg:max-w-7/16 text-center">
            <div className="flex flex-col items-center justify-center space-y-4 h-full">
              <p className="text-white text-3xl text-center font-bold">
                Live Projects:
              </p>

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
            <a
              href="https://github.com/Paul-Austin-Oswego-CSC480-HCI521/OZ-CSC-480-HCI-521-Fall-2024"
              className="w-7/24 text-center bg-gradient-to-r from-purple-900 to-purple-900 mx-auto rounded-2xl transition-all duration-300 transform hover:-translate-y-3 hover:ring-2 hover:ring-white hover:ring-offset-1 shadow-md hover:shadow-xl"
            >
              <img src={checkmate} className="rounded-t-2xl" />
              <div className="text-gray-200 hover:text-gray-200 font-medium text-2xl text-center py-4">
                CheckMate
              </div>
            </a>
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
