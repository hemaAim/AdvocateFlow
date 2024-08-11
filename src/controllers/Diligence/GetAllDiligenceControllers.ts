import { GetAllDiligenceUserCase } from "../../useCases/Diligence/GetAllDiligence-useCase";
import { Request, Response } from "express";



export class ListAllDiligenceController {
  constructor(private getAllDiligenceUseCase:  GetAllDiligenceUserCase) {}

  public async execute(
    req: Request,
    res: Response
  ): Promise<Response> {
   

    try {  
      const Diligence = await this.getAllDiligenceUseCase.execute();

      return res.json(Diligence);
    } catch (erro) {
      return res.status(500).json({ message: `Internal server error ${this.getAllDiligenceUseCase}` });
    }
  }
}

