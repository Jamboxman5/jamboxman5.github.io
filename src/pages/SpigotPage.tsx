import { useEffect } from "react";
import NavigationBar from "../components/NavigationBar";
import JahSkills from "../components/plugins/JahSkills";
import WesternBounties from "../components/plugins/WesternBounties";
import WesternHunting from "../components/plugins/WesternHunting";
import SixPocketShop from "../components/plugins/SixPocketShop";
import spigotPng from '/spigot.png';

export default function SpigotPage() {
  useEffect(() => {
    document.title = "Spigot Plugins";
  });
  return (
      <div className="bg-gradient-to-br from-indigo-800 to-orange-800 pt-40 pb-40 min-h-screen">
        <NavigationBar />
        <div className="flex flex-col space-y-4">
          <img src={spigotPng} className="mx-auto"/>
          <h1 className="text-center font-bold text-white">Spigot Plugins</h1>
          <p className="text-center font-semibold text-xl text-gray-200 w-8/16 mx-auto mt-6">
            A collection of my Minecraft multiplayer server modifications, implemented using the
            Spigot API, Vault API, and various other dependencies. Some of these were developed with public use in mind,
            others specifically to be used by my own server, and are tailored as such.
          </p>
          <div className="flex flex-row mx-auto w-1/2 mt-12">
            <button
                onClick={() =>
                  (window.location.href =
                    "https://hub.spigotmc.org/stash/projects/SPIGOT")
                }
                className="mx-auto bg-gradient-to-t from-indigo-900 text-center to-indigo-900 text-white font-medium text-lg py-4 w-7/16 rounded-2xl transition-all duration-300 hover:from-purple-900 hover:to-indigo-900 hover:ring-2 hover:ring-white ring-offset-1"
              >
                Spigot Repo
              </button>
              <button
                onClick={() =>
                  (window.location.href =
                    "https://hub.spigotmc.org/javadocs/bukkit/")
                }
                className="mx-auto bg-gradient-to-t from-indigo-900 text-center to-indigo-900 text-white font-medium text-lg py-4 w-7/16 rounded-2xl transition-all duration-300 hover:from-purple-900 hover:to-indigo-900 hover:ring-2 hover:ring-white ring-offset-1"
              >
                Spigot JavaDocs
              </button>
          </div>
        </div>

        <div className="flex flex-wrap space-x-10 space-y-10 my-10">
          
        
          <JahSkills/>
          <WesternBounties/>
          <WesternHunting/>
          <SixPocketShop/>
          
        </div>
      </div>
  );
}
