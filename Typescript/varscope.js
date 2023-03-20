var global_v = 11; //global variable
var vs = /** @class */ (function () {
    function vs() {
        this.va_var = 22;
    }
    vs.prototype.localnumber = function () {
        var local_v = 65;
        console.log("Local variable: " + local_v);
    };
    vs.static_v = 52;
    return vs;
}());
console.log("global variable " + global_v);
var obj = new vs();
console.log("Class Variable: " + obj.va_var);
console.log("Static Variable: " + vs.static_v);
// console.log("Local number: "+obj.localnumber)
obj.localnumber();
//============================================================================================================
function fun1() {
    console.log("Hello World!!");
}
var sasi = function () {
    return "Function without name";
};
console.log(sasi());
var sum = function (x, y) {
    return x + y;
};
console.log(sum(3, 7));
