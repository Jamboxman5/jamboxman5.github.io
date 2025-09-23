import { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";

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
                className="mt-10 w-full py-4 px-4 bg-blue-600 text-white text-2xl font-semibold rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Submit
              </button>
            </form>

            {gasInfo && (
              <p className="mt-4 text-center text-white font-medium whitespace-pre-line">
                {gasInfo}
              </p>
            )}

            <div id="entryList" className="mt-6 space-y-2 text-white">
              {entries.map((entry, idx) => {
                const gasMileage = entry.miles / entry.gallons;
                return (
                  <div key={idx}>
                    {entry.month}/{entry.day}/{entry.year} | Drove {entry.miles} miles | Paid $
                    {entry.cost} for {entry.gallons} gallons |{" "}
                    {gasMileage.toFixed(2)} mi/G
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
