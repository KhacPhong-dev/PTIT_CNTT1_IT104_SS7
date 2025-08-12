export class Account {
    protected accountNumber: string;
    protected balance: number;
    protected history: string[];
    protected status: string;
    protected overdraftLimit: number;
    constructor(accountNumber: string, initialBalance: number, status: string, overdraftLimit: number = 0) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.history = [];
        this.status = status;
        this.overdraftLimit = overdraftLimit;
    }
    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            this.history.push(`Nạp tiền: ${amount} VND`);
            console.log(`Đã nạp ${amount} VND vào tài khoản ${this.accountNumber}.`);
        } else {
            console.log("Số tiền nạp phải lớn hơn 0.");
        }
    }
    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
            this.history.push(`Rút tiền: ${amount} VND`);
            console.log(`Đã rút ${amount} VND từ tài khoản ${this.accountNumber}.`);
        } else if (amount > this.balance + this.overdraftLimit) {
            console.log("Số dư không đủ để rút số tiền này.");
        } else {
            console.log("Số tiền rút phải lớn hơn 0.");
        }
    }
    showHistory(): void {
        console.log(`Lịch sử giao dịch của tài khoản ${this.accountNumber}:`);
        for (const entry of this.history) {
            console.log(entry);
        }
    }

    getBalance(): number {
        return this.balance;
    }
    getAccountNumber(): string {
        return this.accountNumber;
    }
    getStatus(): string {
        return this.status;
    }
    setStatus(status: string): void {
        this.status = status;
    }
}
export class CheckingAccount extends Account {
    constructor(accountNumber: string, initialBalance: number, status: string, overdraftLimit: number) {
        super(accountNumber, initialBalance, status, overdraftLimit);
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
            this.history.push(`Rút tiền: ${amount} VND`);
            console.log(`Đã rút ${amount} VND từ tài khoản thanh toán ${this.accountNumber}.`);
        } else if (amount > this.balance + this.overdraftLimit) {
            console.log("Số dư không đủ để rút số tiền này.");
        } else {
            console.log("Số tiền rút phải lớn hơn 0.");
        }
    }
}
export class SavingAccount extends Account {
    private interestRate: number;

    constructor(accountNumber: string, initialBalance: number, status: string, interestRate: number) {
        super(accountNumber, initialBalance, status);
        this.interestRate = interestRate;
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.history.push(`Rút tiền: ${amount} VND`);
            console.log(`Đã rút ${amount} VND từ tài khoản tiết kiệm ${this.accountNumber}.`);
        } else if (amount > this.balance) {
            console.log("Số dư không đủ để rút số tiền này.");
        } else {
            console.log("Số tiền rút phải lớn hơn 0.");
        }
    }
}

const checkingAccount = new CheckingAccount("CA12345", 100000, "active", 50000);
checkingAccount.deposit(20000);
checkingAccount.withdraw(120000);
checkingAccount.showHistory();
