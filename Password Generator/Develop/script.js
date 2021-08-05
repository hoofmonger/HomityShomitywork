// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
specialCharacter = [" ", "!", "#", "@", "$", "%", "&", "'", ")", "(", "*", "+", ",", "-", ".", "/", ";", ":", "<", ">", "?", "[", "]", "{", "}", "|", "~", "`"];
numericalCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
chosenValues = [lowerCase, upperCase, specialCharacter, numericalCharacter]
let characterLength = parseInt(prompt("How many characters do you want your password to be? Please choose between 8 and 128. "));
console.log(characterLength);

if (characterLength === Number)


let lowerCasePrompt = confirm("Do you want lower case letters?")
if (lowerCasePrompt === true);
console.log(lowerCasePrompt);

let upperCasePrompt = confirm("Do you want upper case letters?")
if (upperCasePrompt === true);
console.log(upperCasePrompt);

let specialCharacterPrompt = confirm("Do you want special characters?")
if (specialCharacterPrompt === true);
sole.log(specialCharacterPrompt);

let numericalCharacterPrompt = confirm("Do you want numerical Characters")
if (numericalCharacterPrompt = true)
console.log(numericalCharacterPrompt);
chosenValues.push(arr)





  
return getRandomCharacter.chosenValues

}
if (isNaN(parsed)) {return 8;}
     return parsed *128;
function getRandomCharacter(arr){
  var character = arr[Math.floor(Math.random()*arr.length)]
  console.log(character)
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
