export default function JahSkills() {
    return (
        <div className="mx-auto my-10 py-10 bg-gray-800 shadow-lg rounded-4xl p-8 w-8/10 lg:max-w-7/16 lg:max-w-7/16 p-4 text-center flex flex-col">
            
            <p className="text-3xl font-bold text-gray-100 mb-4">
              - JahSkills -
            </p>

            <p className="text-xl font-semibold text-gray-300 w-5/6 mx-auto flex-1 flex items-center justify-center">
              This plugin is adds RPG style skills & perks to the game. 
              It adds 8 different skill fields, each with 9 different unlockable perks.
              It also adds an experience, leveling, and skill point system.
              Players can also claim a skill field as a main class and receive perk boosts.
            </p>
            
            <div className="flex flex-row w-3/4 mx-auto my-6">

              <button
                onClick={() =>
                  (window.location.href =
                    "https://github.com/Jamboxman5/JahSkills")
                }
                className="mx-auto mt-5 bg-gradient-to-t from-indigo-800 to-indigo-800 text-white font-medium text-lg py-4 w-7/16 rounded-2xl transition-all duration-300 hover:from-purple-800 hover:to-indigo-800 hover:ring-2 hover:ring-white ring-offset-1"
              >
                Source Code
              </button>
              <button
                onClick={() =>
                  (window.location.href =
                    "https://github.com/Jamboxman5/JahSkills")
                }
                className="mx-auto mt-5 bg-gradient-to-t from-indigo-800 to-indigo-800 text-white font-medium text-lg py-4 w-7/16 rounded-2xl transition-all duration-300 hover:from-purple-800 hover:to-indigo-800 hover:ring-2 hover:ring-white ring-offset-1"
              >
                SpigotMC Page
              </button>

            </div>

            <p className="text-xl font-semibold text-gray-400 text-left">
              Dependencies: Vault <br/> Soft-Dependencies: PlaceholderAPI 
            </p>

          </div>
    )
}