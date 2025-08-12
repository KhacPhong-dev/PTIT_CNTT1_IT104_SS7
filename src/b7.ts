export class Account {
    public accountNumber: string;
    protected balance: number;
    protected history: string[];
    protected status: string;

    constructor(accountNumber: string, initialBalance: number, status: string) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.history = [];
        this.status = status;
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
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.history.push(`Rút tiền: ${amount} VND`);
            console.log(`Đã rút ${amount} VND từ tài khoản ${this.accountNumber}.`);
        } else if (amount > this.balance) {
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

const myAccount = new Account("123456789", 1000000, "active");
myAccount.deposit(500000);
myAccount.withdraw(200000);
myAccount.showHistory();

