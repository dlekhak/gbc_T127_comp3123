class Customer {
    firstName: string;
    lastName: string;
    
    public greeter() {
        
        console.log('Hello ')
        console.log('Hello ${this.firstName} ${this.lastName}');
    }
    
}

// object = instance of the class
let customer = new Customer();
customer.firstName = "Dilli";
customer.lastName = "Lekhak";
customer.greeter();


