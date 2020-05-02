import { EmailValidator } from '@angular/forms';

export default class Member {
    MemberName: string;
    Pseudo: string;
    Password: string;
    MemberAge: number;
    MemberMail: EmailValidator;
}