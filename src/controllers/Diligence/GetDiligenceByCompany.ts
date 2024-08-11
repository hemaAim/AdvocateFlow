
import { BuscarDiligenciasPorEmpresaUseCase } from "../../useCases/Diligence/GetDiligenceByCompany-useCase";
import { Request, Response } from "express";


export class ListAllDiligenceByCompanyController {
    constructor(private buscarDiligenciasPorEmpresaUseCase: BuscarDiligenciasPorEmpresaUseCase) {}
  
    public async  execute(req: Request, res: Response): Promise<Response> {
   
        const { contratante } = req.params;
  
      try {
        const diligencias = await this.buscarDiligenciasPorEmpresaUseCase.execute(contratante);
        if (diligencias) {
          return res.status(200).json(diligencias);
        }
        return res.status(404).json({ error: 'Empresa não encontrada ou sem diligências' });
      } catch (error) {
        return res.status(500).json({ error: 'Erro ao buscar diligências da empresa' });
      }
      
    }
  }
  