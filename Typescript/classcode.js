var student = /** @class */ (function () {
    function student(roll, firstname) {
        var _this = this;
        this.firstname = "sasi";
        this.localFuntion = function () {
            console.log(_this.firstname);
            // return 5;
        };
        this.roll = roll;
        this.firstname = firstname;
    }
    return student;
}());
var student5 = new student(52, "Sasi Venkata Kiran Rachapotu");
// console.log(student5.firstname)   
// student5.firstname = "Sasi Rachapotu";
console.log(student5.localFuntion());
