var gallonToLiter = function(gallons) {
  return gallons/.26417;
};
var gallons = $("#gallonsToLiter").val();
var result = gallonToLiter(gallons);
alert(result);

var quartsToLiter = function(quarts) {
  return quarts/1.0567;
};
var quarts = $("#quartsToLiter").val();
var result = quartsToLiter(quarts);
alert(result);

var pintsToLiter = function(pints) {
  return pints/2.1134;
}
var pints = $("#pintsToLiter").val();
var result = pintsToLiter(pints);
alert(result);

var cupsToLiter = function(cups) {
  return cups/4.2268
}
var cups = $("#cupsToLiter").val();
var result = cupsToLiter(cups);
alert(result);


// inpurfromuser + "ToLiter" = xToLiter(x)
