import { Diligence } from "../../entities/Diligence";
import { IDiligenceRepository } from "../../repositories/IDiligenceRepositories";

export class FindDiligenceByIdUseCase {
  constructor(private diligenceRepository: IDiligenceRepository) {}

  public async execute(id: string): Promise<Diligence | null> {
    const diligence = await this.diligenceRepository.findById(id);
    return diligence;
  }
}
