let currentGradient = document.querySelector("h3");
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let body = document.querySelector("body");
let button = document.querySelector("button");

//set colour inputs match the background generated on the first page load, 
//also display the initial CSS linear gradient property on page load.
setGradient();


// set the linear-gradient property to body background and display that CSS linear gradient property.
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	currentGradient.textContent = body.style.background + ";";
}

//generate random integer in range [min, max]
function randIntGen(min, max) {

	// if(min<0 || max<0) {
	//  give error=> negative inputs;
	// }
	return Math.floor(Math.random() * Math.abs(max-min+1) ) + min;
}

// we can use predifined Math.trunc() method in place of below function.
// removes the fractional part of a number.
function truncFP(num) {
	return num - num%1;
}

// you can use predefined toString() method in place of below function i.e., hexnum = num.toString(16).
// converts base 10 number to base 16 number(in string form).
function decToHex(decNum) {
	let num=decNum;
	let hexnum='', hexdigit;

	while(num>0) {
		hexdigit=num%16;
		if (hexdigit > 9) {
			hexdigit=String.fromCharCode(hexdigit+55); //as ASCII of 'A'=65
		}
		//we don't need below else part in JS: as in JS number+string=>string
		else { 
			hexdigit=String.fromCharCode(hexdigit+48); // as ASCII of '0'=48
		}
		hexnum=hexdigit+hexnum;
		num=truncFP(num/16);
	}

	if(decNum===0) {
		hexnum="0";
	}
	//to return the hex number with minimum 2 digits always
	if (decNum>=0 && decNum<=15) {
		hexnum = "0"+hexnum;
	}
	return hexnum;
}

function setRandomBackground() {
	let r1 = decToHex(randIntGen(0,255));
	let g1 = decToHex(randIntGen(0,255));
	let b1 = decToHex(randIntGen(0,255));

	let r2 = decToHex(randIntGen(0,255));
	let g2 = decToHex(randIntGen(0,255));
	let b2 = decToHex(randIntGen(0,255));

	color1.value="#"+r1+g1+b1;
	color2.value="#"+r2+g2+b2;
	setGradient();

}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomBackground);