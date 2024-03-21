import { TAddress } from './Address'
import { TCompany } from "./Company";


export type TUser = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: TAddress;
    phone: string;
    website: string;
    company: TCompany;
}