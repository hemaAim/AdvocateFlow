
import bcrypt from "bcryptjs";
import { ICustomerRepository } from "../../repositories/ICustomerRepositories";
import { Customer } from "../../entities/Customer";

interface AuthenticateUserDTO {
  email: string;
  password: string; 
  
}

export class AuthenticateCustomerUseCase {
  constructor(private UserRepository: ICustomerRepository) {}

  async execute(data: AuthenticateUserDTO): Promise<Customer> {
    const user = await this.UserRepository.findByEmail(data.email);

    if (user) {
      const isPasswordsValid = await bcrypt.compare(
        data.password,
        user.password
      );

      if (!isPasswordsValid) {
        throw new Error("Username is not a valid password");
      }
    }
    if (!user) {
      throw new Error("User doesn´t exist");
    }
 
    

    return user;
  }
}
