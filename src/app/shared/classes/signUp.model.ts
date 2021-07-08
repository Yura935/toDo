import { ISignUp } from "../interfaces/signUp.interface";
import { IUserAddress } from "../interfaces/userAddress.interface";

export class SignUp implements ISignUp {
    constructor(
        public name: string,
        public username: string,
        public email: string,
        public phone: string,
        public address: IUserAddress
    ) { }
}