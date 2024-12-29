"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CreditCardPayment_instances, _CreditCardPayment_logResult, _PayPalPayment_instances, _PayPalPayment_logResult;
class Payment {
}
class CreditCardPayment extends Payment {
    constructor() {
        super(...arguments);
        _CreditCardPayment_instances.add(this);
    }
    processPayment(amount) {
        __classPrivateFieldGet(this, _CreditCardPayment_instances, "m", _CreditCardPayment_logResult).call(this, amount);
    }
}
_CreditCardPayment_instances = new WeakSet(), _CreditCardPayment_logResult = function _CreditCardPayment_logResult(amount) {
    console.log(`Amount of ${amount} units paid through creditcard`);
};
class PayPalPayment extends Payment {
    constructor() {
        super(...arguments);
        _PayPalPayment_instances.add(this);
    }
    processPayment(amount) {
        __classPrivateFieldGet(this, _PayPalPayment_instances, "m", _PayPalPayment_logResult).call(this, amount);
    }
}
_PayPalPayment_instances = new WeakSet(), _PayPalPayment_logResult = function _PayPalPayment_logResult(amount) {
    console.log(`Amount of ${amount} units paid through paypal`);
};
function makePayment(payment, amount) {
    payment.processPayment(amount); //calls appropriate payment class by hiding exact implementation based on the instance created
}
const credPayment = new CreditCardPayment();
const paypalPayment = new PayPalPayment();
makePayment(credPayment, 5000);
makePayment(paypalPayment, 10000);
