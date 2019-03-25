var gallonToLiter = function(gallons) {
  return gallons/.26417;
};
var gallons = parseFloat(prompt("Enter # of gallons"));
var result = gallonToLiter(gallons);
alert(result);

var quartsToLiter = function(quarts) {
  return quarts/1.0567;
};
var quarts = parseFloat(prompt("Enter # of quarts"));
var result = quartsToLiter(quarts);
alert(result);

var pintsToLiter = function(pints) {
  return pints/2.1134;
}
var pints = parseFloat(prompt("Enter # of pints"));
var result = pintsToLiter(pints);
alert(result);

var cupsToLiter = function(cups) {
  return cups/4.2268
}
var cups = parseFloat(prompt("Enter # of cups"));
var result = cupsToLiter(cups);
alert(result);

var inpurfromuser = prompt("Enter either gallons, quarts, pints, cups");

// inpurfromuser + "ToLiter" = xToLiter(x)
