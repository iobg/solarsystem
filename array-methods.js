var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/* 
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");
planets.forEach(function(planet){
	el.innerHTML += " " + planet;
});

var capArray = planets.map(function(planet){
	return planet.charAt(0).toUpperCase() + planet.slice(1);

});
console.log(capArray);

// Use the map method to create a new array where the first letter of each planet is capitalized

// Use the filter method to create a new array that contains planets with the letter 'e'
var eplanets = planets.filter(function(planet){
	return planet.indexOf('e') >-1;
});
console.log(eplanets);
// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

words = words.reduce(function(first,second){
	return first +" " + second;
});
console.log(words);

