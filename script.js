// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
     listedPlanets.name,
     listedPlanets.diameter,
     listedPlanets.star,
     listedPlanets.distance,
     listedPlanets.moons,
     listedPlanets.imageUrl

   })
   form.addEventListener("submit", function (event) {
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