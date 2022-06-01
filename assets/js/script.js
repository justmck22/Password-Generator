// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
 var password = promptquestions();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function promptquestions() {
 



var actualLength = window.prompt('How many characters would you like you password to be? Please choose a number between 8 and 128.')
  if (actualLength < 8 || passwordLength > 128){
    return window.prompt('Please choose a number between 8 and 128.');
  }
  else if (actualLength => 8 && actualLength <= 128){
  var passwordLength = actualLength;
  }
var lowerCase = window.prompt('Would you like to use lower case letters?');
  if (lowerCase !== "yes" && lowerCase !== "no"){
     return window.prompt("Please respond with 'yes' or 'no'");
  }
  else if(lowerCase === "yes" || lowerCase === "no"){
        
    if(lowerCase === "yes"){
    var lowerCaseValue = "abcdefghijklmnopqrstuvwxyz";
    }
    else if(lowerCase === "no"){
    var lowerCaseValue = "";
    }
  }     
var upperCase = window.prompt("Would you like to use uppercase letters?");
  if(upperCase !== "yes" && upperCase !== "no"){
    return window.prompt("Please respond with 'yes' or 'no'");
  }
  else if(upperCase === "yes" || upperCase === "no"){
                
    if(upperCase === "yes"){
    var upperCaseValue = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    else if(upperCase === "no"){
    var upperCaseValue = "";
    }
  }
var numericalPrompt = window.prompt("Would you like to include numerical characters?");
  if(numericalPrompt !== "yes" && numericalPrompt !== "no"){
    return window.prompt("Please respond with 'yes' or 'no'");
  }
  else if(numericalPrompt === "yes" || numericalPrompt === "no"){
                  
    if(numericalPrompt === "yes"){
    var numericalPromptValue = "0123456789";
    }
    else if(numericalPrompt === "no"){
    var numericalPromptValue = "";
    }
  }
var specialCharacters = window.prompt("Would you like to include special characters?");
  if(specialCharacters !== "yes" && specialCharacters !== "no"){
    return window.prompt("Please respond with 'yes' or 'no'");
  }
  else if(specialCharacters === "yes" || specialCharacters === "no"){
          
    
   if(specialCharacters === "yes"){
    var specialCharactersValue = "!@#$%^&*()_+";
    }

    else if(specialCharactersValue === "no"){
      var specialCharactersValue ="";
      }
    
      else if(specialCharacters === "no" && lowerCaseValue === "" && upperCaseValue === "" && numericalPromptValue === "" ){
        alert("You cannot choose no for each prompt. Please choose yes for at least one prompt");
       promptquestions();
      }
    }
   
    
   

  
      
  

      
  


var passwordCharacters = lowerCaseValue + upperCaseValue + specialCharactersValue + numericalPromptValue;


var passwordBlank = []

for (let i = 0; i < passwordLength; i++) {
var allChoices = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
passwordBlank.push(allChoices);
}


// Join and return password
var password = passwordBlank.join("");
return password;
}