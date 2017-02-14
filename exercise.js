var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Isak",
    bankAccount: bankAccount,
    hobbies: ["Kitesurfing", "Fishing"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
