"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAcc = exports.UserAcc = exports.Account = void 0;
class Account {
    constructor(id, userName, password, role) {
        this.isLogin = false;
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.role = role;
    }
    login() {
        console.log("Login method should be overridden in subclass.");
    }
    logout() {
        if (this.isLogin) {
            console.log("Đăng xuất thành công");
            this.isLogin = false;
        }
        else {
            console.log("Bạn đã đăng xuất trước đó.");
        }
    }
}
exports.Account = Account;
class UserAcc extends Account {
    constructor(id, userName, password, role, status) {
        super(id, userName, password, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            this.isLogin = true;
            console.log(`${this.userName} đã đăng nhập thành công.`);
        }
        else if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa.");
        }
    }
}
exports.UserAcc = UserAcc;
class AdminAcc extends Account {
    constructor(id, userName, password, role) {
        super(id, userName, password, role);
    }
    banUser(user) {
        user.status = "banned";
        console.log(`Người dùng ${user.userName} đã bị cấm.`);
    }
}
exports.AdminAcc = AdminAcc;
const user = new UserAcc(1, "user1", "password123", "user", "active");
user.login();
user.logout();
const bannedUser = new UserAcc(2, "user2", "password456", "user", "banned");
const admin = new AdminAcc(3, "admin1", "adminpass", "admin");
admin.banUser(user);
user.login();
user.logout();
