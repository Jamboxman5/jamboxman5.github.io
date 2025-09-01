function submit() {
  const gasVolumeInput = document.getElementById("gasVolume").value;
  const gasPriceInput = document.getElementById("gasPrice").value;
  const milesDrivenInput = document.getElementById("milesDriven").value;

  const response = document.getElementById("gasInfo");

  var gasMileage = milesDrivenInput / gasVolumeInput;
  var costPerMile = gasPriceInput / milesDrivenInput;

  response.innerHTML = `Fuel Economy for the last ${milesDrivenInput} miles: ${gasMileage}mi/G`;
  response.innerHTML += `Gas Cost per Mile for the last ${milesDrivenInput} miles: $${costPerMile}`;
  
}

const button = document.getElementById("submitButton");
button.addEventListener('click', submit);
