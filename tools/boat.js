function submit() {
  const plateInput = document.getElementById("plateNo").value;
  const gasVolumeInput = document.getElementById("gasVolume").value;
  const gasPriceInput = document.getElementById("gasPrice").value;
  const milesDrivenInput = document.getElementById("milesDriven").value;

  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const response = document.getElementById("gasInfo");

  var gasMileage = milesDrivenInput / gasVolumeInput;
  var costPerMile = gasPriceInput / milesDrivenInput;

  response.innerHTML = `Fuel Economy for the last ${milesDrivenInput} miles: ${gasMileage.toFixed(
    2
  )}mi/G <br>`;
  response.innerHTML += `Gas Cost per Mile for the last ${milesDrivenInput} miles: $${costPerMile.toFixed(
    2
  )}`;

  sendEntry({
    month: month,
    day: day,
    year: year,
    miles: milesDrivenInput,
    gallons: gasVolumeInput,
    cost: gasPriceInput,
    plate: plateInput,
  });
}

function createEntryList(entries) {
  const listElement = document.getElementById("entryList");
  listElement.innerHTML = "";

  entries.forEach((entry) => {
    const { month, day, year, miles, gallons, cost, plate } = entry;

    const div = document.createElement("div");
    var gasMileage = miles / gallons;

    div.textContent = `${month}/${day}/${year} | Drove ${miles} miles | Paid $${cost} for ${gallons} gallons | ${gasMileage.toFixed(
      2
    )}mi/G`;

    listElement.appendChild(div);
  });
}

async function sendEntry(entry) {
  try {
    const response = await fetch("https://mc.jahcraft.cc/api/entry/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry),
    });
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }

    const data = await response.json();
    createEntryList(data);
  } catch (err) {
    console.error("Error fetching API:", err);
  }
}

const button = document.getElementById("submitButton");
button.addEventListener("click", submit);
