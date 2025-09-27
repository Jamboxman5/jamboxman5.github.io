import { useEffect } from "react";
import NavigationBar from "../components/NavigationBar";
import JahSkills from "../components/plugins/JahSkills";
import WesternBounties from "../components/plugins/WesternBounties";
import WesternHunting from "../components/plugins/WesternHunting";

export default function SpigotPage() {
  useEffect(() => {
    document.title = "Spigot Plugins";
  });
  return (
      <div className="bg-gradient-to-br from-indigo-800 to-orange-800 pt-40 pb-40 min-h-screen">
        <NavigationBar />
        <h1 className="text-center font-bold text-white">Spigot Plugins</h1>
        <p className="text-center font-semibold text-xl text-gray-200 w-8/16 mx-auto mt-6">
          A collection of my Minecraft multiplayer server modifications, implemented using the
          Spigot API, Vault API, and various other dependencies. Some of these were developed with public use in mind,
          others specifically to be used by my own server, and are tailored as such.
        </p>

        <div className="flex flex-wrap space-x-10 space-y-10 my-10">
          
        
          <JahSkills/>
          <WesternBounties/>
          <WesternHunting/>
          
        </div>
      </div>
  );
}
