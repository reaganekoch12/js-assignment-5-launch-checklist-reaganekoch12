window.addEventListener("load", function(event) {
    let listedPlanets;
  
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
  
    listedPlanetsResponse.then(function(result) {
      listedPlanets = result;
      console.log(listedPlanets);
    }).then(function() {
      console.log(listedPlanets);
      // Below this comment, call the appropriate helper function to pick a planet from the list of planets
      let randomPlanet = pickPlanet(listedPlanets);
      // Call addDestinationInfo with the chosen planet's information
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
  