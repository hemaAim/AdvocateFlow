import { OkResponse } from "../../Erros/Status-Code/Success";
import { Diligence } from "../../entities/Diligence";
import { IDiligenceRepository } from "../../repositories/IDiligenceRepositories";

interface AddDiligenceDTO {
     id: string;
     title: string; 
     comarca: string;
     number_processes: string;
     startDateTime: string;
     contratante: string;
     value: string;
     description: string; 
     autor: string; 
  
}
export class CreateDiligenceUseCase {
  constructor(private diligenceRepository: IDiligenceRepository) { }

  async execute(data: AddDiligenceDTO, autor: string): Promise<Diligence> {
    const customerAlreadyExists = await this.diligenceRepository.findByProcesses(data.number_processes)

    if (customerAlreadyExists) {
        console.log(customerAlreadyExists) 
        new OkResponse()
        throw new Error("Diligence already exist")
      
    }
    const diligence = new Diligence({...data, autor}) 

 
    return await this.diligenceRepository.create(diligence) 
  
  }
}