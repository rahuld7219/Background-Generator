var currentGradient = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("body");

//set colour inputs match the background generated on the first page load, 
//also display the initial CSS linear gradient property on page load.
setGradient();


//set the linear-gradient property to body background and display that CSS linear gradient property.
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	currentGradient.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);