async function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    document.getElementById("missionTarget").innerHTML = `
      <h2>Mission Destination</h2>
      <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
      </ol>
      <img src="${imageUrl}">`;
  }
  
  function validateInput(input) {
    if (input === "") {
      return "Empty";
    } else if (isNaN(input)) {
      return "Not a Number";
    } else {
      return "Is a Number";
    }
  }
  
  function formSubmission(event, document, list, pilot, copilot, fuelLevel, cargoLevel) {
    event.preventDefault();
    let pilotStatus = validateInput(pilot);
    let coPilotStatus = validateInput(copilot);
    let fuelStatus = validateInput(fuelLevel);
    let cargoStatus = validateInput(cargoLevel);
  
    if (
      pilotStatus === "Empty" ||
      coPilotStatus === "Empty" ||
      fuelStatus === "Empty" ||
      cargoStatus === "Empty"
    ) {
      alert("All fields are required!");
    } else if (
      pilotStatus === "Not a Number" ||
      pilotStatus === "Is a Number" ||
      coPilotStatus === "Not a Number" ||
      coPilotStatus === "Is a Number" ||
      fuelStatus !== "Is a Number" ||
      cargoStatus !== "Is a Number"
    ) {
      alert("Try again");
    } else {
      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
      document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
    }
    
    
      if (fuelLevel < 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
      } else if (cargoLevel > 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
      } else {
        document.getElementById("faultyItems").style.visibility = "hidden";
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
        document.getElementById("launchStatus").style.color = "green";
      }
    }
  
  
  async function myFetch() {
    let response = await fetch('https://handlers.education.launchcode.org/static/planets.json');
    return response.json();
  }
  
  function pickPlanet(planets) {
    return planets[Math.floor(Math.random() * planets.length)];
  }
  

module.exports = {
  addDestinationInfo,
  validateInput,
  formSubmission,
  myFetch,
  pickPlanet
};
//MAKE SURE TAHT THE PILOT AND COPILOT BOOLEANS ARE DOING THE SAME AS CARGOlEVEL AND FUELLEVEL