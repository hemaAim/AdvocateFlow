import { Request, Response } from "express";

import jwt from "jsonwebtoken";
import { AuthenticateCustomerUseCase } from "../../useCases/Customer/AuthenticationCustomer-useCase";
import { LoginCreatedWithSuccess } from "../../Erros/Validation/ValidationErros";
import { BadRequestError } from "../../Erros/Status-Code/Errors";


export class AuthenticateUserController {
  constructor(private readonly authenticateUserUseCase: AuthenticateCustomerUseCase) {}

  async execute(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const secret = "aimhemahematically";

   
    try {
      const user = await this.authenticateUserUseCase.execute({ email, password, });

      const token = jwt.sign({ username: user.name},secret, {
        "algorithm": "HS256",
        expiresIn: 86400 // expires in 24 hours
      });

     
      console.log("mostrar id:",token);
      console.log(user.id)

      return response.json({ token, user, message: new LoginCreatedWithSuccess().message });
    } catch (error) {
      return response.status(new BadRequestError().status).json(new BadRequestError);
    }
  }
}
