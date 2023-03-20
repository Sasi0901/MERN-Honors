var employee1 = /** @class */ (function () {
    function employee1(firstname, lastname, age, post) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.post = post;
    }
    employee1.prototype.GetFullName = function () {
        console.log(this.firstname + " " + this.lastname);
    };
    employee1.prototype.GetAge = function () {
        console.log(this.age);
    };
    employee1.prototype.GetPost = function () {
        console.log(this.post);
    };
    return employee1;
}());
var obj4 = new employee1("sasi", "rachapotu", 19, "SD");
obj4.GetFullName();
obj4.GetAge();
obj4.GetPost();
