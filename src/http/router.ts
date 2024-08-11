import { Router, Request, Response } from "express";

const router = Router();

// Google authentication

import {
 authenticationMiddleware, authenticateUserController,createDiligenceController,createGoogleController,createGoogleRedirectController,createUserController,findDiligenceByIdController,getDiligenceController,listAllDiligenceByCompanyController,listAllUserControllers
} from "./import";

router.get("/google", async (req: Request, res: Response) => {
  createGoogleController.execute(req, res);
});

// Google Redirect
router.get("/google/redirect", async (req: Request, res: Response) => {
  createGoogleRedirectController.execute(req, res);
});

// create user
router.post("/user", async (req: Request, res: Response) => {
  createUserController.execute(req, res);
});


// authenticate user
router.post("/login", async (req: Request, res: Response) => {
  authenticateUserController.execute(req, res);
});

// Diligence routes
router.post("/diligence/user/:idUser", async (req: Request, res: Response) => {
  createDiligenceController.execute(req, res);
});

//Get all Diligence by User
router.get("/diligence/user/:idUser", async (req: Request, res: Response) => {
  getDiligenceController.execute(req, res);
});

//Get all Diligence

router.get("/diligence",authenticationMiddleware, async (req: Request, res: Response) => {
   listAllUserControllers.execute(req, res);
});



//Find Diligence by Cmpany

router.get( "/diligence/company/:contratante",  async (req: Request, res: Response) => {
    listAllDiligenceByCompanyController.execute(req, res);
  }
);

//Find Diligence by ID

router.get("/diligence/:id", async (req: Request, res: Response) => {
  findDiligenceByIdController.execute(req, res);
});

export { router };
