export class Account {
    public id: number;
    public userName: string;
    private password: string;
    public isLogin: boolean = false;
    public role: string;

    constructor(id: number, userName: string, password: string, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.role = role;
    }

    login(): void {
        console.log("Login method should be overridden in subclass.");
    }

    logout(): void {
        if (this.isLogin) {
            console.log("Đăng xuất thành công");
            this.isLogin = false;
        } else {
            console.log("Bạn đã đăng xuất trước đó.");
        }
    }
}
export class UserAcc extends Account {
    public status: string;

    constructor(id: number, userName: string, password: string, role: string, status: string) {
        super(id, userName, password, role);
        this.status = status;
    }

    login(): void {
        if (this.status === "active") {
            this.isLogin = true;
            console.log(`${this.userName} đã đăng nhập thành công.`);
        } else if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa.");
        }
    }
}
export class AdminAcc extends Account {
    constructor(id: number, userName: string, password: string, role: string) {
        super(id, userName, password, role);
    }

    banUser(user: UserAcc): void {
        user.status = "banned";
        console.log(`Người dùng ${user.userName} đã bị cấm.`);
    }
}
const user = new UserAcc(1, "user1", "password123", "user", "active");
user.login();
user.logout();
const bannedUser = new UserAcc(2, "user2", "password456", "user", "banned");
const admin = new AdminAcc(3, "admin1", "adminpass", "admin");
admin.banUser(user);
user.login();
user.logout();