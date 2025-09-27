import { useEffect } from "react";
import NavigationBar from "../components/NavigationBar";

export default function SpigotPage() {
  useEffect(() => {
    document.title = "Spigot Plugins";
  });
  return (
      <div className="bg-gradient-to-br from-indigo-800 to-orange-800 pt-40 pb-40 min-h-screen">
        <NavigationBar />
        <h1 className="text-center font-bold text-white">Spigot Plugins</h1>
        <h2 className="text-center font-semibold text-gray-200 mt-6">
          Minecraft multiplayer server modifications, implemented using the
          Spigot API, Vault API, and various other dependencies.
        </h2>

        <div className="flex flex-wrap space-x-10 space-y-10">
          
        
          <div className="mx-auto my-10 py-10 bg-gray-800 shadow-lg rounded-4xl p-8 w-7/16 p-4 text-center">
            <p className="text-3xl font-semibold text-gray-100 mb-4">
              Plugin Sources:
            </p>

            <div className="flex flex-col space-y-4">
              <button
                onClick={() =>
                  (window.location.href =
                    "https://github.com/Jamboxman5/JahSkills")
                }
                className="mt-5 bg-gradient-to-t from-indigo-800 to-indigo-800 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:from-purple-800 hover:to-indigo-800 hover:ring-2 hover:ring-white ring-offset-1"
              >
                JahSkills
              </button>
              <button
                onClick={() =>
                  (window.location.href =
                    "https://github.com/Jamboxman5/WesternHunting")
                }
                className="mt-5 bg-gradient-to-t from-indigo-800 to-indigo-800 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:from-purple-800 hover:to-indigo-800 hover:ring-2 hover:ring-white ring-offset-1"
              >
                Western Hunting
              </button>
              <button
                onClick={() =>
                  (window.location.href =
                    "https://github.com/Jamboxman5/Western-Bounties")
                }
                className="mt-5 bg-gradient-to-t from-indigo-800 to-indigo-800 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:from-purple-800 hover:to-indigo-800 hover:ring-2 hover:ring-white ring-offset-1"
              >
                Western Bounties
              </button>
            </div>
          </div>
          
        </div>
      </div>
  );
}
