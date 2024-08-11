import { Diligence } from "../../entities/Diligence";
import { IDiligenceRepository } from "../../repositories/IDiligenceRepositories";


export class GetDiligencesByUserUseCase {
    constructor(private diligenceRepository: IDiligenceRepository) {}
  
    async execute(userId: string): Promise<Diligence[]> {
      return await this.diligenceRepository.findByUser(userId);
    }
  }