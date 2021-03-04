var max = 999;
var digit = {
    number: 438,
    hundreds: 0,
    tens: 0,
    units: 0,
};
if (digit.number <= 999) {
    digit.units = Math.floor(digit.number % 10);
    digit.tens = Math.floor(digit.number / 10 % 10);
    digit.hundreds = Math.floor(digit.number / 100 % 10);
} else {
    digit.number = 0;
    console.log('1-999');
}
console.log(digit);