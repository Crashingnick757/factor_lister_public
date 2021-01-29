var numbers = [];


var number_of_numbers = numbers.length;

var number_list = numbers;

console.log("There are "+number_of_numbers+" numbers, and they are are "+number_list);

for (var i = 0; i < numbers.length; i++) {
var factors = require("./factors/"+numbers[i]+".json");
  if(factors.factors[0] === "prime"){
  console.log(numbers[i]+" is a prime number");
} else {
  console.log("Factors of "+numbers[i]+" are "+factors.factors);
}
}
