var subtract = function (a, b) {
    var result = a - b;
    console.log(a + " - " + b + " = " + result);
    return result;
};
subtract(2, 1);
//---------------------------------------------
var multiply;
multiply = function (a, b) { return a * b; };
console.log(multiply(5, 5));
//-----------------------------------------
var multiply2;
multiply2 = function (a, b, callback) { return callback(a * b); };
multiply2(4, 5, function (result) { return console.log("RESULT: " + result); });
