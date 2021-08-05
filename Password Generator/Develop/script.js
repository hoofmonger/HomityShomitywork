// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
specialCharacter = [" ", "!", "#", "@", "$", "%", "&", "'", ")", "(", "*", "+", ",", "-", ".", "/", ";", ":", "<", ">", "?", "[", "]", "{", "}", "|", "~", "`"];
numericalCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let characterLength = parseInt(prompt("How many characters do you want your password to be? Please choose between 8 and 128. "));
console.log(characterLength);

if (characterLength === Number)


lowerCasePrompt = confirm("Do you want lower case letters?")
;
console.log(lowerCasePrompt);

upperCasePrompt = confirm("Do you want upper case letters?")

console.log(upperCasePrompt);

specialCharacterPrompt = confirm("Do you want special characters?")

sole.log(specialCharacterPrompt);

numericalCharacterPrompt = confirm("Do you want numerical Characters")
console.log(numericalCharacterPrompt);
chosenValues = [...lowerCase, ...upperCase, ...specialCharacter, ...numericalCharacter]

if (lowerCasePrompt, numericalCharacterPrompt, specialCharacterPrompt, upperCasePrompt)
if (numericalCharacterPrompt, specialCharacterPrompt, upperCasePrompt)
if (specialCharacterPrompt, upperCasePrompt)
if (upperCasePrompt)
if (lowerCasePrompt)
if (lowerCasePrompt, upperCasePrompt)
if (lowerCasePrompt, upperCasePrompt, specialCharacterPrompt)
if (lowerCasePrompt, upperCasePrompt, numericalCharacterPrompt)
if (lowerCasePrompt, specialCharacterPrompt, numericalCharacterPrompt)
function getRandomCharacter(chosenValues){
  var character = arr[Math.floor(Math.random()*chosenValues.length)]
  console.log(character)


  
return chosenValues.push

}


}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
