import { Diligence } from "../../entities/Diligence";
import { IDiligenceRepository } from "../../repositories/IDiligenceRepositories";


export class BuscarDiligenciasPorEmpresaUseCase {
  constructor(private diligenciaRepository: IDiligenceRepository) {}

  public async execute(contratante: string): Promise<Diligence[] | null> {
    const diligencias = await this.diligenciaRepository.findByCompany(
      contratante
    );
    return diligencias;
  }
}
