"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingAccount = exports.CheckingAccount = exports.Account = void 0;
class Account {
    constructor(accountNumber, initialBalance, status, overdraftLimit = 0) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.history = [];
        this.status = status;
        this.overdraftLimit = overdraftLimit;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            this.history.push(`Nạp tiền: ${amount} VND`);
            console.log(`Đã nạp ${amount} VND vào tài khoản ${this.accountNumber}.`);
        }
        else {
            console.log("Số tiền nạp phải lớn hơn 0.");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
            this.history.push(`Rút tiền: ${amount} VND`);
            console.log(`Đã rút ${amount} VND từ tài khoản ${this.accountNumber}.`);
        }
        else if (amount > this.balance + this.overdraftLimit) {
            console.log("Số dư không đủ để rút số tiền này.");
        }
        else {
            console.log("Số tiền rút phải lớn hơn 0.");
        }
    }
    showHistory() {
        console.log(`Lịch sử giao dịch của tài khoản ${this.accountNumber}:`);
        for (const entry of this.history) {
            console.log(entry);
        }
    }
    getBalance() {
        return this.balance;
    }
    getAccountNumber() {
        return this.accountNumber;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
}
exports.Account = Account;
class CheckingAccount extends Account {
    constructor(accountNumber, initialBalance, status, overdraftLimit) {
        super(accountNumber, initialBalance, status, overdraftLimit);
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
            this.history.push(`Rút tiền: ${amount} VND`);
            console.log(`Đã rút ${amount} VND từ tài khoản thanh toán ${this.accountNumber}.`);
        }
        else if (amount > this.balance + this.overdraftLimit) {
            console.log("Số dư không đủ để rút số tiền này.");
        }
        else {
            console.log("Số tiền rút phải lớn hơn 0.");
        }
    }
}
exports.CheckingAccount = CheckingAccount;
class SavingAccount extends Account {
    constructor(accountNumber, initialBalance, status, interestRate) {
        super(accountNumber, initialBalance, status);
        this.interestRate = interestRate;
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.history.push(`Rút tiền: ${amount} VND`);
            console.log(`Đã rút ${amount} VND từ tài khoản tiết kiệm ${this.accountNumber}.`);
        }
        else if (amount > this.balance) {
            console.log("Số dư không đủ để rút số tiền này.");
        }
        else {
            console.log("Số tiền rút phải lớn hơn 0.");
        }
    }
}
exports.SavingAccount = SavingAccount;
const checkingAccount = new CheckingAccount("CA12345", 100000, "active", 50000);
checkingAccount.deposit(20000);
checkingAccount.withdraw(120000);
checkingAccount.showHistory();
