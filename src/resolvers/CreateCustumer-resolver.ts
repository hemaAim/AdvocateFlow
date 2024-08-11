import { Query, Arg, Resolver, Mutation } from "type-graphql";
import { MongoDBCustomerRepository } from "../implementation/RepositoryImpl-Customer";
import { CreateCustomerUserCase } from "../useCases/Customer/CreateCustomer-useCase";
import { CustomerModel } from "../dto/models/Customer-model"
import CustomerMongooseModel from "../models/UserModel";
import { CreateCustomerInput } from "../dto/inputs/create-Customer-inputs";



const userRepo = new MongoDBCustomerRepository();

@Resolver(() => CustomerModel )
export class CustomerResolver {
  constructor(private createCustomerUseCase: CreateCustomerUserCase) {
    this.createCustomerUseCase = new CreateCustomerUserCase(userRepo);
  }

  @Query(() => [CustomerModel ])
  async appointments() {
    return await CustomerMongooseModel.find();
  }

  @Mutation(() => CustomerModel ) 
  async createCustomer(
    @Arg("data") data:  CreateCustomerInput
  ): Promise<CustomerModel > {
    return this.createCustomerUseCase.execute(data);
  }
}
