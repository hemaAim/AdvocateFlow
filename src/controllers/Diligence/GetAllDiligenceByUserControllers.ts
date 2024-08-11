import { GetDiligencesByUserUseCase } from "../../useCases/Diligence/GetAllDiligenceByUser-useCase";
import { Request, Response } from "express";






export class GetDiligencesByUserController {
    constructor(private getDiligencesByUserUseCase: GetDiligencesByUserUseCase) {}
  
    async execute(req: Request, res: Response): Promise<Response> {
      try {
        const { idUser } = req.params;
  
        const diligences = await this.getDiligencesByUserUseCase.execute(idUser);
  
        return res.json(diligences);
      } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal server error' });
      }
    }
  }