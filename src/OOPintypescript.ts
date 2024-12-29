
abstract class Payment {  //abstract class declared
    abstract processPayment(amount: Number): void; //abstract method
}

class CreditCardPayment extends Payment {  //concrete class implementing abstract class and inherited from Payment class #inheritance

    processPayment(amount: Number): void { //this implementation can be considered as dynamic polymorphism.
        this.#logResult(amount);
    }

    #logResult(amount: Number){  // #encapsulation
        console.log(`Amount of ${amount} units paid through creditcard`);
    }
}

class PayPalPayment extends Payment {  //concrete class implementing abstract class and inherited from Payment class #inheritance

    processPayment(amount: Number): void { //this implementation can be considered as dynamic polymorphism or runtime polymorphism.
        this.#logResult(amount);
    }

    #logResult(amount: Number){ // #encapsulation
        console.log(`Amount of ${amount} units paid through paypal`);
    }
}

function makePayment(payment: Payment, amount: Number): void {
    payment.processPayment(amount); //calls appropriate payment class by hiding exact implementation based on the instance created
}


const credPayment = new CreditCardPayment();
const paypalPayment = new PayPalPayment();

makePayment(credPayment, 5000);
makePayment(paypalPayment, 10000);


