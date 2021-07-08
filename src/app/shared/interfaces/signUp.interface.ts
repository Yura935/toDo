import { IUserAddress } from "./userAddress.interface";

export interface ISignUp {
    name: string,
    username: string,
    email: string,
    phone: string,
    address: IUserAddress
}