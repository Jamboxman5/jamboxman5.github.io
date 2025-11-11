import { useNavigate } from "react-router-dom";

export default function LiveProjects() {
  const navigate = useNavigate();

  return (
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
  );
}
