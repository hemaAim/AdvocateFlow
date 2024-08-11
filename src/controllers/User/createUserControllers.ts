import { Request, Response } from "express";

import bcrypt from "bcryptjs";
import { CreateCustomerUserCase } from "../../useCases/Customer/CreateCustomer-useCase";
import { CreatedResponse } from "../../Erros/Status-Code/Success";
import { InternalServerError } from "../../Erros/Status-Code/Errors";


export class CreateCustomerController {
  constructor(private createCustomerUseCase: CreateCustomerUserCase) {}

  public async execute(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await this.createCustomerUseCase.execute({
        name,
        email,
        password: hashedPassword,
      
      });

      return res.status(201).json(new CreatedResponse('User created successfully'));
    } catch (error) {
      return res.status(500).json(new InternalServerError());
    }
  }
}
