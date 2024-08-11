import { Diligence } from "../../entities/Diligence";
import { IDiligenceRepository } from "../../repositories/IDiligenceRepositories";


export class GetAllDiligenceUserCase {
  constructor(private DiligenceRepository:  IDiligenceRepository) {}

  async execute(): Promise<Diligence[]> {
    const diligence = await this.DiligenceRepository.findAll();

    return diligence;
  }
}
