export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    phone?: string;
    email?: string;
    isReviewer: boolean;
    isAdmin: boolean;

    constructor(id: number = null, username: string = "", password: string = "",
        firstName: string = "", lastName: string = "", phone: string = "",
        email: string = "", isReviewer: boolean = false, isAdmin: boolean = false) {
            this.id = id;
            this.username = username;
            this.password = password;
            this.firstName = firstName;
            this.lastName = lastName;
            this.phone = phone;
            this.email = email;
            this.isReviewer = isReviewer;
            this.isAdmin = isAdmin;
        }
}