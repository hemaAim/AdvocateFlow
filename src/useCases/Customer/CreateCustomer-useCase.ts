import { UserAlreadyExistsError } from "../../Erros/Validation/ValidationErros";
import { CreateCustomerInput } from "../../dto/inputs/create-Customer-inputs";
import { CustomerModel } from "../../dto/models/Customer-model"
import { Customer } from "../../entities/Customer";
import { ICustomerRepository } from "../../repositories/ICustomerRepositories";

export class CreateCustomerUserCase {
  constructor(private customerRepository: ICustomerRepository) { }

  async execute(data: CreateCustomerInput): Promise<CustomerModel> {
    const casa = await this.customerRepository.findByEmail(data.email);

    if (casa) {
      console.log(casa);
      throw new UserAlreadyExistsError("E-mail already exists");
    }

 

    const customer = new Customer(data);
    return await this.customerRepository.create(customer);
  }
} 
















/*


 const casa = await CustomerModel.findOne({ email: data.email });

    if (casa) {
      console.log(casa);
    }
    const salvar = new CustomerModel({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    const res = await salvar.save();
*/