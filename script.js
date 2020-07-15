// Assignment Code
var generateBtn = document.querySelector("#generate");
var caseArray=[];
var lowerCaseChar=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseChar=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
var numericChar=["1","2","3","4","5","6","7","8","9","0"];
var specialChar=["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];

// Write password to the #password input
function writePassword() {

  var useLowerCase=confirm("Do you want to include lowercase characters?");
    var useUpperCase=confirm("Do you want to include uppercase characters?");
    var useNumeric=confirm("Do you want to include numeric characters?");
    var useSpecial=confirm("Do you want to include special characters?");


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
