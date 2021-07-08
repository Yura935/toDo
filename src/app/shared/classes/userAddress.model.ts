import { IUserAddress } from "../interfaces/userAddress.interface";

export class UserAddress implements IUserAddress {
    constructor(
        public street: string,
        public suite: string,
        public city: string,
        public zipcode: string
    ) { }
}