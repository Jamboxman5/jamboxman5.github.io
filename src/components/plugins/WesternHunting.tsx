export default function WesternHunting() {
  return (
    <div className="mx-auto my-10 py-10 themed-element shadow-lg rounded-4xl p-8 w-8/10 lg:max-w-6/16 p-4 text-center flex flex-col">
      <p className="text-3xl font-bold mb-4">- Western Hunting -</p>

      <p className="text-xl font-semibold w-5/6 mx-auto flex-1 flex items-center justify-center">
        This plugin adds a simplified version of the Red Dead Redemption II
        style of hunting & fishing. Caught fish & killed animals will drop pelts
        or carcasses rated between one & three stars. The star rating may be
        affected by the tool used & its enchantments.
      </p>

      <div className="flex flex-row w-3/4 mx-auto my-6">
        <button
          onClick={() =>
            (window.location.href = "https://github.com/Jamboxman5/JahSkills")
          }
          className="mx-auto mt-5 bg-gradient-to-t from-indigo-800 to-indigo-800 text-white font-medium text-lg py-4 w-7/16 rounded-2xl transition-all duration-300 hover:from-purple-800 hover:to-indigo-800 hover:ring-2 hover:ring-white ring-offset-1"
        >
          Source Code
        </button>
        <button
          onClick={() =>
            (window.location.href =
              "https://github.com/Jamboxman5/WesternHunting")
          }
          className="mx-auto mt-5 bg-gradient-to-t from-indigo-800 to-indigo-800 text-white font-medium text-lg py-4 w-7/16 rounded-2xl transition-all duration-300 hover:from-purple-800 hover:to-indigo-800 hover:ring-2 hover:ring-white ring-offset-1"
        >
          SpigotMC Page
        </button>
      </div>

      <p className="text-xl font-semibold text-gray-500 text-left">
        Dependencies: Vault <br /> Soft-Dependencies: Custom Resourcepack
      </p>
    </div>
  );
}
