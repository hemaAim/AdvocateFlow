import { Customer } from "../entities/Customer";
import CustomerModel, { CustomerDocument } from "../models/UserModel";
import { ICustomerRepository } from "../repositories/ICustomerRepositories";


export class MongoDBCustomerRepository implements ICustomerRepository {
  
  async findByEmail(email: string): Promise<Customer| undefined> {
    const user = await CustomerModel.findOne({ email });
    if (user) {
      return new Customer({
        name: user.name,
        email: user.email,
        password: user.password,
      });
    }
    return undefined;
  } 
  /*
   
   *  async findByEmail(email: string): Promise<Customer | undefined> {
    const user = await CustomerModel.findOne({ email });
    return user ? this.mapCustomerDocumentToEntity(user) : undefined;
  }

   
   */

  async create(user: Customer): Promise<Customer> {
    const UserCreated = await CustomerModel.create(user);
    return UserCreated;
  }

  async findAll(): Promise<Customer[]> {
    const users = await CustomerModel.find();
    return users.map((user: CustomerDocument) => {
      return new Customer({
        name: user.name,
        email: user.email,
        password: user.password,
        id: user.id
      });
    });
  }/*

  async update(product: Product): Promise<Product> {
    const existingProduct = await this.productRepository.findById(product.id);
    if (!existingProduct) {
      throw new Error('Product not found');
    }
    return this.productRepository.update(product);
  }*/

  async remove(id: string): Promise<void> {
    await CustomerModel.deleteOne({ id: id });
  }

  async findById(id: string): Promise<Customer| null> {
    const user = await CustomerModel.findById(id)
    return user


  }
}
