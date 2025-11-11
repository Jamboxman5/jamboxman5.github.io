import mePNG from "/me.png";
import GitHubCalendar from "react-github-calendar";
import { useTheme } from "../ThemeContext";

export default function AboutMe() {
  const { theme } = useTheme();

  const githubCalendarTheme =
    theme === "day" || theme === "sunrise" ? "light" : "dark";

  return (
    <div className="mx-auto my-10 py-10 themed-element shadow-lg rounded-4xl p-8 w-8/10 lg:max-w-7/16 text-center">
      <p className="text-3xl text-center font-bold">Samuel Thompson</p>
      <p className="text-lg text-center font-semibold mt-4">
        B.S. Software Engineering <br /> SUNY College at Oswego
      </p>
      <div className="flex flex-wrap py-10 space-x-6 ">
        {/* Photo */}
        <div className="flex flex-col w-8/10 lg:max-w-9/20 space-y-4 mx-auto">
          <img src={mePNG} />
          <p className=" text-lg font-medium">
            "Hey, that's me!" <br /> - Sam Thompson, 2025
          </p>
        </div>
        {/* Info */}
        <div className="flex flex-col items-center justify-center w-8/10 lg:max-w-9/20 space-y-8 mx-auto">
          {/* Languages */}
          <div className="text-center text-lg font-medium mx-auto">
            <p className="themed-element font-semibold ">Languages</p>
            <div className="flex flex-wrap mx-auto">
              <p className="text-gray-500 font-thin mx-2">Java</p>
              <p className="text-gray-500 font-thin mx-2">JavaScript</p>
              <p className="text-gray-500 font-thin mx-2">TypeScript</p>
              <p className="text-gray-500 font-thin mx-2">XML</p>
              <p className="text-gray-500 font-thin mx-2">HTML</p>
              <p className="text-gray-500 font-thin mx-2">CSS</p>
              <p className="text-gray-500 font-thin mx-2">C</p>
              <p className="text-gray-500 font-thin mx-2">C++</p>
              <p className="text-gray-500 font-thin mx-2">C#</p>
              <p className="text-gray-500 font-thin mx-2">SQL</p>
              <p className="text-gray-500 font-thin mx-2">Clojure</p>
              <p className="text-gray-500 font-thin mx-2">Python</p>
              <p className="text-gray-500 font-thin mx-2">ASP / Prolog</p>
              <p className="text-gray-500 font-thin mx-2">YAML</p>
            </div>
          </div>
          {/* About Me */}
          <div className="text-center text-gray-300 text-lg font-medium mx-auto">
            <p className="text-white font-semibold ">About Me</p>
            <p className="text-gray-500 font-thin">
              I like computers. I like solving problems. I like solving problems
              with computers. I also like to make things that help people solve
              their own problems. If you've got a computer problem, hardware or
              software, let me help solve it.
            </p>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div className="text-center text-gray-500 text-lg font-medium w-7/8 mx-auto">
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
        <div className="text-gray-500">
          <GitHubCalendar
            username="Jamboxman5"
            colorScheme={githubCalendarTheme}
            blockSize={16} // Size of each square
            blockMargin={3} // Spacing between squares
            fontSize={16} // Font size for month/day labels
            theme={{
              light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
              dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
            }}
          />
        </div>
      </a>
    </div>
  );
}
