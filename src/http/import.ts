import { Router } from "express";






import dotenv from "dotenv";

import { GoogleAuthControllers } from "../controllers/EventGoogle/GoogleAuthControllers";
import { GoogleRedirectControllers } from "../controllers/EventGoogle/GoogleRedirectController";
import { CreateCustomerUserCase } from "../useCases/Customer/CreateCustomer-useCase";
import { CreateCustomerController } from "../controllers/User/createUserControllers";
import { GetDiligencesByUserController } from "../controllers/Diligence/GetAllDiligenceByUserControllers";
import { GetDiligencesByUserUseCase } from "../useCases/Diligence/GetAllDiligenceByUser-useCase";
import { CreateDiligenceController } from "../controllers/Diligence/createDiligenceControllers";
import { CreateDiligenceUseCase } from "../useCases/Diligence/CreateDiligence-useCase";
import { CreateEventUseCase } from "../useCases/EventGoogle/CreateEventUseCase";
import { AuthenticateUserController } from "../controllers/User/AuthenticationController";
import { AuthenticateCustomerUseCase } from "../useCases/Customer/AuthenticationCustomer-useCase";
import { FindDiligenceByIdController } from "../controllers/Diligence/FindDiligenceByIdController";
import { FindDiligenceByIdUseCase } from "../useCases/Diligence/FindDiligenceById-useCase";
import { ListAllDiligenceByCompanyController } from "../controllers/Diligence/GetDiligenceByCompany";
import { BuscarDiligenciasPorEmpresaUseCase } from "../useCases/Diligence/GetDiligenceByCompany-useCase";
import { ListAllDiligenceController } from "../controllers/Diligence/GetAllDiligenceControllers";
import { GetAllDiligenceUserCase } from "../useCases/Diligence/GetAllDiligence-useCase";
import { MongoDBDiligenceRepository } from "../implementation/RepositoryImpl-Diligence";
import { MongoDBCustomerRepository } from "../implementation/RepositoryImpl-Customer";
import { OAuthClientImpl } from "../implementation/OAuthClientImpl";
import {authenticationMiddleware} from "../middlewares/authenticationMiddleware"

dotenv.config();

const router = Router();

const Auth = new OAuthClientImpl();
const userRepo = new MongoDBCustomerRepository();
const diligenceRepo = new MongoDBDiligenceRepository();



export {authenticationMiddleware}
// Google authentication
export const createGoogleController = new GoogleAuthControllers(Auth);

// Google Redirect
export const createGoogleRedirectController = new GoogleRedirectControllers(
  Auth
);

// create user
const createUserUseCase = new CreateCustomerUserCase(userRepo);
export const createUserController = new CreateCustomerController(
  createUserUseCase
);

// authenticate user
const authenticateUserUseCase = new AuthenticateCustomerUseCase(userRepo);
export const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase
);

// Diligence routes
const createEventUseCase = new CreateEventUseCase(Auth);
const createDiligenceUseCase = new CreateDiligenceUseCase(diligenceRepo);
export const createDiligenceController = new CreateDiligenceController(
  createDiligenceUseCase,
  createEventUseCase
);


//Get all Diligence by User
const getDiligenceByUser = new GetDiligencesByUserUseCase(diligenceRepo);
export const getDiligenceController = new GetDiligencesByUserController(
  getDiligenceByUser
);

//Get all Diligence
const listAllDiligenceUseCase = new GetAllDiligenceUserCase(diligenceRepo);
export const listAllUserControllers = new ListAllDiligenceController(
  listAllDiligenceUseCase
);

//Find Diligence by Cmpany
const getDiligenceByCompany = new BuscarDiligenciasPorEmpresaUseCase(
  diligenceRepo
);
export const listAllDiligenceByCompanyController =
  new ListAllDiligenceByCompanyController(getDiligenceByCompany);

//Find Diligence by ID
const findDiligenceByIdUseCase = new FindDiligenceByIdUseCase(diligenceRepo);
export const findDiligenceByIdController = new FindDiligenceByIdController(
  findDiligenceByIdUseCase
);

export { router };
