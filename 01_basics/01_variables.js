const accountId = 122344
let accountEmail = "asdf@gmail.com"
var accountPassword = "12345"
accountCity = "Noorpur"
let accountState;

// accountId = 2  not allowed


accountEmail = "ajdh@gmail.com"
accountPassword = "542453"
accountCity = "Noida"


console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope 
*/

console.table([accountId,accountEmail,accountPassword,accountCity])