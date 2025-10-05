import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import mePNG from "/me.png";

export default function HomePage() {
  useEffect(() => {
    document.title = "Home - Sam Thompson's Portfolio";
  });

  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <div className="w-screen bg-gradient-to-br from-indigo-800 to-orange-800 pt-40 pb-40 min-h-screen">
        <NavigationBar />
        <h1 className="text-center font-bold text-white">Welcome!</h1>
        <p className="text-center font-medium text-gray-200 text-xl mt-3">
          Gaze upon my stuff! Or else!
        </p>

        <div className="flex flex-row mt-10">
          <div className="mx-auto my-10 py-10 bg-gray-800 shadow-lg rounded-4xl p-8 w-7/16 text-center">
            <p className="text-white text-3xl text-center font-bold">
              Samuel Thompson
            </p>
            <p className="text-gray-300 text-lg text-center font-semibold mt-4">
              B.S. Software Engineering <br /> SUNY College at Oswego
            </p>
            <div className="flex flex-row py-10">
              {/* Photo */}
              <div className="flex flex-col w-1/2 space-y-4 mx-2">
                <img src={mePNG} />
                <p className="text-white text-lg font-medium">
                  "Hey, that's me!" <br /> - Sam Thompson, 2025
                </p>
              </div>
              {/* Info */}
              <div className="flex flex-col w-1/2 space-y-4 mx-2">
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
                {/* Contact */}
                <div className="text-center text-gray-300 text-lg font-medium">
                  <p className="text-white font-semibold ">Contact</p>
                  <table className="w-full">
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
                        <p className="text-right ml-auto font-thin">
                          @sthomps9
                        </p>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto my-10 py-10 bg-gray-800 shadow-lg rounded-4xl p-8 w-7/16 text-center">
            <div className="flex flex-col space-y-4">
              <p className="text-white text-3xl text-center font-bold">
                Live Projects:
              </p>

              <button
                onClick={() => navigate("/reacttools/fueleco")}
                className="mt-5 bg-gradient-to-t from-indigo-800 to-indigo-800 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:from-purple-800 hover:to-indigo-800 hover:ring-2 hover:ring-white ring-offset-1"
              >
                Fuel Economy Calculator
              </button>
              <button
                onClick={() =>
                  (window.location.href = "/CSC495-AccommoDate-Interface/#/")
                }
                className="mt-5 bg-gradient-to-t from-indigo-800 to-indigo-800 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:from-purple-800 hover:to-indigo-800 hover:ring-2 hover:ring-white ring-offset-1"
              >
                AccommoDate
              </button>
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-900 min-h-[400px] mt-20">
          <p className="text-white font-bold text-center text-3xl pt-10">Featured Projects</p>
          <div className="flex flex-wrap w-full mt-8 min-h-[240px]">
            <div className="w-7/24 text-center bg-gray-700 mx-auto rounded-2xl">
              <p className="text-gray-200 font-medium text-2xl text-center pt-[100px]">AccommoDate</p>
            </div>
            <div className="w-7/24 text-center bg-gray-700 mx-auto rounded-2xl">
              <p className="text-gray-200 font-medium text-2xl text-center pt-[100px]">CheckMate</p>
            </div>
            <div className="w-7/24 text-center bg-gray-700 mx-auto rounded-2xl">
              <p className="text-gray-200 font-medium text-2xl text-center pt-[100px]">ABNPGame</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
