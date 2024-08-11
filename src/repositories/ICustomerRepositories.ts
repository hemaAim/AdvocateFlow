import { Customer } from "../entities/Customer"; 




export interface ICustomerRepository { 
    findByEmail(email: string): Promise<Customer| undefined>;
    create(customer:Customer): Promise<Customer>;
    findAll(): Promise<Customer[]>; 
    remove(id: string): Promise<void>; 
    findById(id: string): Promise<Customer | null>;

}