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

    if (useLowerCase == false && useUpperCase == false && useNumeric == false && useSpecial == false) {
      alert("Please select one type of character");
      useLowerCase=confirm("Do you want to include lowercase characters?");
      useUpperCase=confirm("Do you want to include uppercase characters?");
      useNumeric=confirm("Do you want to include numeric characters?");
      useSpecial=confirm("Do you want to include special characters?");
    }
  

    var passwordLength=parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));
    if(passwordLength < 8 || passwordLength > 128 || typeof(passwordLength) != "number" || passwordLength === NaN || passwordLength === null) {
        alert("Choose a number that is more than 8 and less than 128 characters");
        passwordLength=parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));

        if (useLowerCase==true){
          caseArray.push(lowerCaseChar);
      
      }
    
      }

  var password = writePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);