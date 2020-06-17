// Write your JavaScript code here!

function validation() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();

      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      
      let pilotNameValue = Number (pilotName.value);
      let copilotNameValue = Number (copilotName.value);
      let fuelLeveValue = Number (fuelLevel.value);
      let cargoMassValue = Number (cargoMass.value);
      console.log(pilotNameValue, copilotNameValue, fuelLeveValue, cargoMassValue);
      

      if(pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         
      } else if(!isNaN(pilotNameValue)) {
         alert("Pilot must be a name!");
         
      } else if (!isNaN(copilotNameValue)) {
         alert("Copilot must be a name!");
         
      } else if (isNaN(fuelLeveValue)) {
         alert("Fuel Level must be a number!");
         
      } else if (isNaN(cargoMassValue)) {
         alert("Cargo Mass must be a number!");
         
      } else {

         let pilotStatus = document.getElementById("pilotStatus");
         let copilotStatus = document.getElementById("copilotStatus");
         pilotStatus.innerHTML=`Pilot ${pilotName.value} is ready for launch.`;
         copilotStatus.innerHTML=`Co-pilot ${copilotName.value} is ready for launch.`;
   
         let launchStatusFuel = false;
         let launchStatusMass = false;

         if(fuelLevel.value < 10000) {
            let faultyItemsDiv = document.getElementById("faultyItems");
            faultyItemsDiv.style.visibility = "visible";
            let fuelStatus = document.getElementById("fuelStatus");
            fuelStatus.innerHTML=`Fuel level too low for launch.`;
            let statusTitle = document.getElementById("launchStatus");
            statusTitle.innerHTML= `Shuttle Not Ready for Launch`;
            statusTitle.style.color = "red";
            
         } else {
            let faultyItemsDiv = document.getElementById("faultyItems");
            faultyItemsDiv.style.visibility = "visible";
            let fuelStatus = document.getElementById("fuelStatus");
            fuelStatus.innerHTML=`Fuel level high enough for launch.`;
            let statusTitle = document.getElementById("launchStatus");
            launchStatusFuel = true;
            
         }

         if(cargoMass.value > 10000) {
            let faultyItemsDiv = document.getElementById("faultyItems");
            faultyItemsDiv.style.visibility = "visible";
            let cargoStatus = document.getElementById("cargoStatus");
            cargoStatus.innerHTML=`Cargo mass too high for launch.`
            let statusTitle = document.getElementById("launchStatus");
            statusTitle.innerHTML= `Shuttle Not Ready for Launch`;
            statusTitle.style.color = "red";
            
         } else {
            let faultyItemsDiv = document.getElementById("faultyItems");
            faultyItemsDiv.style.visibility = "visible";
            let cargoStatus = document.getElementById("cargoStatus");
            cargoStatus.innerHTML=`Cargo mass low enough for launch.`
            let statusTitle = document.getElementById("launchStatus");
            launchStatusMass = true; 
            
         }

         if (launchStatusFuel === true && launchStatusMass === true) {
             let statusTitle = document.getElementById("launchStatus");
             statusTitle.innerHTML= `Shuttle is Ready for Launch`;
             statusTitle.style.color = "green";
         }
        
         
      }
         
     
   });
  
}

function fetchFunc () {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         let planetArea = document.getElementById("missionTarget");
         planetArea.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[3].name}</li>
             <li>Diameter: ${json[3].diameter}</li>
             <li>Star: ${json[3].star}</li>
             <li>Distance from Earth: ${json[3].distance}</li>
             <li>Number of Moons: ${json[3].moons}</li>
         </ol>
         <img src="${json[3].image}">`
      });
   });
}

window.addEventListener("load", validation);
window.addEventListener("load", fetchFunc);




/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
