import { useEffect, useState } from "react";
import NavigationBar from "../components/navbar/NavigationBar";

export default function BoatCalculatorPage() {
  const [plateNo, setPlateNo] = useState("");
  const [gasVolume, setGasVolume] = useState("");
  const [gasPrice, setGasPrice] = useState("");
  const [milesDriven, setMilesDriven] = useState("");
  const [gasInfo, setGasInfo] = useState("");
  const [entries, setEntries] = useState<any[]>([]);

  useEffect(() => {
    document.title = "Fuel Economy Tracker";
  }, []);

  const getAverageFuelMonth = () => {
    var miles = 0;
    var gallons = 0;
    for (const entry of entries) {
      if (entry.month == (new Date().getMonth() + 1) && entry.year == new Date().getFullYear()) {
        miles += entry.miles;
        gallons += entry.gallons;
      }
    }
    return (miles/gallons);
  }

  const getAverageFuelYear = () => {
    var miles = 0;
    var gallons = 0;
    for (const entry of entries) {
      if (entry.year == new Date().getFullYear()) {
        miles += entry.miles;
        gallons += entry.gallons;
      }
    }
    return (miles/gallons);
  }

  const handleSubmission = async () => {
    const plateInput = plateNo.toUpperCase();
    const gasVolumeInput = parseFloat(gasVolume);
    const gasPriceInput = parseFloat(gasPrice);
    const milesDrivenInput = parseFloat(milesDriven);

    if (
      !plateInput ||
      isNaN(gasVolumeInput) ||
      isNaN(gasPriceInput) ||
      isNaN(milesDrivenInput)
    ) {
      setGasInfo("Please fill out all fields correctly.");
      return;
    }

    const date = new Date();
    const entry = {
      month: date.getMonth() + 1,
      day: date.getDate(),
      year: date.getFullYear(),
      miles: milesDrivenInput,
      gallons: gasVolumeInput,
      cost: gasPriceInput,
      plate: plateInput,
    };

    const gasMileage = milesDrivenInput / gasVolumeInput;
    const costPerMile = gasPriceInput / milesDrivenInput;

    setGasInfo(
      `Fuel Economy for the last ${milesDrivenInput} miles: ${gasMileage.toFixed(
        2
      )} mi/G\nGas Cost per Mile: $${costPerMile.toFixed(2)}`
    );

    try {
      const response = await fetch("https://mc.jahcraft.cc/api/entry/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry),
      });

      if (!response.ok) throw new Error("HTTP error " + response.status);

      const data = await response.json();
      setEntries(data);
    } catch (err) {
      console.error("Error fetching API:", err);
      setGasInfo("Error saving entry. Please try again.");
    }
  };

  return (
    <div className="min-h-full">
      <div className="w-screen bg-gradient-to-br from-indigo-800 to-orange-800 pt-40 pb-40 min-h-screen">
        <NavigationBar />
        <div className="my-20 flex items-center justify-center px-4">
          <div className="min-w-7/8 min-h-5/8 max-w-lg bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg">
            <h1 className="text-5xl font-bold text-white text-center mb-2">
              Fuel Economy Tracker
            </h1>
            <p className="text-2xl text-gray-400 text-center mb-6">
              Please enter details below...
            </p>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmission();
              }}
            >
              <div>
                <label htmlFor="plateNo" className="block text-xl text-white">
                  Plate Number:
                </label>
                <input
                  type="text"
                  id="plateNo"
                  value={plateNo}
                  onChange={(e) => setPlateNo(e.target.value.toUpperCase())}
                  className="uppercase bg-gray-700 mt-1 w-full text-gray-200 rounded-lg border border-gray-300 pl-4 py-3 text-2xl shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>

              <div>
                <label htmlFor="gasVolume" className="block text-xl text-white">
                  Amount of Gas Purchased:
                </label>
                <input
                  type="number"
                  id="gasVolume"
                  value={gasVolume}
                  onChange={(e) => setGasVolume(e.target.value)}
                  className="bg-gray-700 mt-1 w-full text-gray-200 rounded-lg border border-gray-300 pl-4 py-3 text-2xl shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>

              <div>
                <label htmlFor="gasPrice" className="block text-xl text-white">
                  Price of Gas Purchased:
                </label>
                <input
                  type="number"
                  id="gasPrice"
                  value={gasPrice}
                  onChange={(e) => setGasPrice(e.target.value)}
                  className="bg-gray-700 mt-1 w-full text-gray-200 rounded-lg border border-gray-300 pl-4 py-3 text-2xl shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>

              <div>
                <label htmlFor="milesDriven" className="block text-xl text-white">
                  Miles Driven:
                </label>
                <input
                  type="number"
                  id="milesDriven"
                  value={milesDriven}
                  onChange={(e) => setMilesDriven(e.target.value)}
                  className="bg-gray-700 mt-1 w-full text-gray-200 rounded-lg border border-gray-300 pl-4 py-3 text-2xl shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>

              <button
                type="submit"
                className="mt-6 w-full py-4 px-4 bg-gradient-to-t from-indigo-800 to-indigo-800 text-white text-xl font-bold rounded-lg transition-all duration-300 hover:from-purple-800 hover:to-indigo-800 hover:ring-2 hover:ring-white ring-offset-1"
>
                Submit
              </button>
            </form>

            {gasInfo && (
              <div className="mt-4 text-center text-white font-semibold text-xl py-2 whitespace-pre-line">
                {gasInfo}
                {entries.length > 0 && (() => {
                  const totalMiles = entries.reduce((sum, e) => sum + e.miles, 0);
                  const totalGallons = entries.reduce((sum, e) => sum + e.gallons, 0);
                  const avgMileage = totalMiles / totalGallons;
                  return (
                    <div className="mt-4 text-center text-white font-medium whitespace-pre-line">
                      {entries && (
                        <table className="my-6 text-left text-white font-normal text-xl py-8 whitespace-pre-line w-full">
                          <tr>
                            <td>Average Fuel Economy (All Time): </td>
                            <td className="text-right font-medium">{avgMileage.toFixed(2)} mi/G</td>
                          </tr>
                          <tr>
                            <td>Average Fuel Economy (Month): </td>
                            <td className="text-right font-medium">{getAverageFuelMonth().toFixed(2)} mi/G</td>
                          </tr>
                          <tr>
                            <td>Average Fuel Economy (Year): </td>
                            <td className="text-right font-medium">{getAverageFuelYear().toFixed(2)} mi/G</td>
                          </tr>
                        </table>

                      )}                    
                    </div>
                  );
                })()}
              </div>
            )}

            <table
              id="entryList"
              className="mt-6 space-y-2 text-white max-w-full font-thin text-xs sm:text-base md:text-xl lg:text-2xl"
            >
              {entries.map((entry, idx) => {
                const gasMileage = entry.miles / entry.gallons;
                return (
                  <tr key={idx} className="w-full pt-2">
                    <td className="font-medium pr-2 whitespace-nowrap">
                      {entry.month}/{entry.day}/{entry.year}
                    </td>
                    <td className="pr-2 whitespace-nowrap">
                      {entry.miles} Miles
                    </td>
                    <td className="pr-2 whitespace-nowrap">
                      ${entry.cost} / {entry.gallons}G
                    </td>
                    <td className="text-right font-medium whitespace-nowrap">
                      {gasMileage.toFixed(2)} mi/G
                    </td>
                    <td className="text-right font-medium whitespace-nowrap">
                      <button 
                        className="bg-red-500 hover:bg-red-700 rounded-lg px-2 py-1 mt-1 ml-3"
                        >
                          X
                        </button>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
