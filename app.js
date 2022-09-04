function max(a1, b1, c1, d1) {
    if (c1 && d1) {
        var great = a1;
        if (b1 > a1 && b1 > c1 && b1 > d1)
            great = b1;
        if (c1 > a1 && c1 > b1 && c1 > d1)
            great = c1;
        if (d1 > a1 && d1 > b1 && d1 > c1)
            great = d1;
    }
    else if (c1) {
        var great = a1;
        if (b1 > a1 && b1 > c1)
            great = b1;
        if (c1 > a1 && c1 > b1)
            great = c1;
    }
    else if (d1) {
        var great = a1;
        if (b1 > a1 && b1 > d1)
            great = b1;
        if (d1 > a1 && d1 > b1)
            great = d1;
    }
    else {
        var great = a1;
        if (b1 > a1)
            great = b1;
    }
    return great;
}
var a = prompt("Enter the first number");
var a1 = Number(a);
var b = prompt("Enter the second number");
var b1 = Number(b);
var c = prompt("Enter the third number");
var c1 = Number(c);
var d = prompt("Enter the fourth number");
var d1 = Number(d);
var maximum = max(a1, b1, c1, d1);
console.log("The maximum value is ".concat(maximum));
// 2nd program
function evenodd(n2) {
    if (n2 % 2 == 0)
        return "number is even";
    else
        return "number is odd";
}
var n1 = prompt("Enter a number to check its nature");
var n2 = Number(n1);
var verify = evenodd(n2);
console.log(verify);
