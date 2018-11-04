var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.greeter = function () {
        console.log('Hello ${this.firstName} ${this.lastName}');
    };
    return Customer;
}());
// object = instance of the class
var customer = new Customer();
customer.firstName = "Dilli";
customer.lastName = "Lekhak";
customer.greeter();
