"use string"; 

let userInputString=document.getElementById("uIString").value;


function reverseString(str){

	let userInputString=document.getElementById("uIString").value;
	let reverseString=("");
	console.log(userInputString.length);
	for (i = userInputString.length - 1; i >=0; i --) {
		reverseString += userInputString[i];
		document.getElementById("reverseString").innerHTML = reverseString;
	}

}
function capitalizeFirst(string){
	let userInputString=document.getElementById("uIString").value;
	let CapString;
	let splitArray = userInputString.split(" ");
	splitArray [i] =
	captString = splitArray.charAt(0).toUpperCase()+splitArray.slice(1);
	document.getElementById("capitalizeFirst").innerHTML = reverseString;
}

function capitalizeFirstLetter(string) {
	let userInputString=document.getElementById("uIString").value;
	let stringToArray = userInputString.split(" ");
	console.log(stringToArray);
	let len=(stringToArray.length)
	for(let i=0; i < len; i++){
		let word=stringToArray.slice(i);
		console.log(word);
		changeLowerToUpper(word);
		console.log(word);


		console.log(stringToArray);
		return stringToArray;
	}

    document.getElementById("capitalizeFirst").innerHTML = capitalizeFirst;
}
function changeLowerToUpper (word) {
	return word.charAt(0).toUpperCase();
}