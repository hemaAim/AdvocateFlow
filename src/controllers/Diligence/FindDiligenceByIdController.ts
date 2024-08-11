import { FindDiligenceByIdUseCase } from "../../useCases/Diligence/FindDiligenceById-useCase";
import { Request, Response } from "express";


export class FindDiligenceByIdController {
  constructor(private findDiligenceByIdUseCase: FindDiligenceByIdUseCase) {}

  public async execute(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const diligence = await this.findDiligenceByIdUseCase.execute(id);
      if (diligence) {
        return res.status(200).json(diligence);
      }
      return res.status(404).json({ error: "Diligence não encontrada" });
    } 
    
    
    catch (error) {
      return res.status(500).json(error);
    }
  }
}
 