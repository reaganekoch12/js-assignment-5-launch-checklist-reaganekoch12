window.addEventListener("load", function(event) {
let listedPlanets;

let listedPlanetsResponse = myFetch();

listedPlanetsResponse.then(function(result) {
  listedPlanets = result;
  console.log(listedPlanets);
}).then(function() {
  console.log(listedPlanets);
  let randomPlanet = pickPlanet(listedPlanets);
  addDestinationInfo(
    document,
    randomPlanet.name,
    randomPlanet.diameter,
    randomPlanet.star,
    randomPlanet.distance,
    randomPlanet.moons,
    randomPlanet.imageUrl
  );
});

let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  formSubmission(
    event,
    document,
    document.getElementById("faultyItems"),
    document.querySelector("input[name=pilotName]").value,
    document.querySelector("input[name=copilotName]").value,
    document.querySelector("input[name=fuelLevel]").value,
    document.querySelector("input[name=cargoMass]").value
  );
});
});
  //CHANGE IMAGE NAME TO THE SAME JSON 
  