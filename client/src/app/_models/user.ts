export class User {
    created_at: Date;
    updated_at: Date;
    constructor(public _id: String, public firstName: String, public lastName: String,
        public username: String, public password: String, public email: String, public role: String) {}    
}