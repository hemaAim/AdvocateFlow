import { Request, Response } from "express";

import dayjs from "dayjs";
import { CreateDiligenceUseCase } from "../../useCases/Diligence/CreateDiligence-useCase";
import { CreateEventUseCase } from "../../useCases/EventGoogle/CreateEventUseCase";


interface CreateDiligenceDTO {
  comarca: string;
  description: string;
  id: string;
  number_processes: string;
  contratante: string;
  startDateTime: string;
  title: string;
  value: string; 
  autor: string;
}
export class CreateDiligenceController {
  constructor(
    private createDiligenceUserCase: CreateDiligenceUseCase,
    private createEventUseCase: CreateEventUseCase
  ) {}

  public async execute(req: Request, res: Response): Promise<Response> {
    
    try { 
      const {
        comarca,
        description,
        id,
        number_processes,
        startDateTime,
        contratante,
        title,
        value,
      } = req.body; 
      const { idUser } = req.params; 

      const diligenceData: CreateDiligenceDTO = {
        comarca,
        description,
        id,
        number_processes,
        startDateTime,
        autor: idUser,
        contratante,
        title,
        value, 
        
      };
      const diligence = await this.createDiligenceUserCase.execute(diligenceData, idUser );
     
      const eventPayload = {
        summary: title,
        description: this.buildEventDescription(diligenceData),
        startDateTime: startDateTime,
        endDateTime: dayjs(startDateTime).add(1, "hour").toISOString(),
      };
      const createdEvent = await this.createEventUseCase.execute(eventPayload);


      return res.status(201).json({ diligence: diligence, event: createdEvent });
 
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
  
  private buildEventDescription(diligenceData: CreateDiligenceDTO): string {
    const { description, number_processes, comarca, value , contratante} = diligenceData;
    const descriptionAll = `Description: ${description}\nNumber of processes: ${number_processes}\ncomarca: ${comarca}\nValue: ${value}\nContratante: ${contratante}`;
    return descriptionAll;
  }
}
