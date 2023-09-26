// string, number, boolean, null, undefined are all supported
var myName = null;
myName = 'test';
;
// Arrays
var items = [5, 'luis'];
// Objects
var account = {
    name: 'luis',
    balance: 10
};
var accounts; // tells the variable to store an array of objects
var InvestmentAccount = /** @class */ (function () {
    function InvestmentAccount(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    InvestmentAccount.prototype.withdraw = function () {
    };
    return InvestmentAccount;
}());
