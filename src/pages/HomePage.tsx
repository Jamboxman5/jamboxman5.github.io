import { useEffect } from "react";
import NavigationBar from "../components/navbar/NavigationBar";

import AboutMe from "../components/homepage/AboutMe";
import LiveProjects from "../components/homepage/LiveProjects";
import FeaturedProjects from "../components/homepage/FeaturedProjects";
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
          <LiveProjects />
        </div>

        <FeaturedProjects />
      </div>
    </div>
  );
}
