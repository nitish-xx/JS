const accountId = 14453
let accountEmail = "nitish@google.com"
var accountPassword = "2345"
accountCity = "Noida"
let accounState;

// accountID = 2  // not allowed

accountEmail = "hc@gmail.com"
accountPassword = "364474"
accountCity="delhi"
/*
prefer not to use var 
because of issue in block scope and functional scope
*/
console.log(accountEmail);

console.table([accountPassword,accountId,accountCity,accounState])

