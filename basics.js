const accountId = 144553;
let accountEmail = "shravani@example.com";
var accountPassword = "password";
accountCity = "Bangalore";
let accountState;//undefined

accountEmail = "jadhav@example.com";
accountPassword = "newpassword";
accountCity = "Pune";
console.log(accountId);
console.log(accountEmail);

console.table([accountId,accountEmail,accountPassword,accountCity, accountState]);

/*
Prefer not to use var because of issue of function scope and hoisting. It can lead to bugs and unexpected behavior in larger codebases. Instead, use let and const for better readability and maintainability.
 */