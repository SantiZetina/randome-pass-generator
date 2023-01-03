// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 
  var length = prompt("Enter desired password length (between 8 and 128 characters):");
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate input and ensure at least one character type is selected
  switch (true) {
    case (length < 8 || length > 128):
      alert("Invalid password length! Please try again.");
      return;
    case (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial):
      alert("At least one character type must be selected! Please try again.");
      return;
    default:
      break;
  }

  // Generate password that matches the selected criteria
  var password = generatePassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate password function
function generatePassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
  
  var password = "";

  // Set up character sets
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "!@#$%^&*()_+-=[]{}|;':,.<>?";

  // Use character sets based on selected criteria
  var charSet = "";
  if (includeLowercase) {
    charSet += lowercase;
  }
  if (includeUppercase) {
    charSet += uppercase;
  }
  if (includeNumeric) {
    charSet += numeric;
  }
  if (includeSpecial) {
    charSet += special;
  }

  // Generate password
  for (var i = 0; i < length; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  return password;
}
