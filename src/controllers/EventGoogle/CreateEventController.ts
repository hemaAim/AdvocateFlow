import { CreateEventUseCase } from "../../useCases/EventGoogle/CreateEventUseCase";
import { CreateEventDTO } from "../../useCases/EventGoogle/DTOCreateEvent";
import { Request, Response } from "express";


export class CreateEventController {
  private createEventUseCase: CreateEventUseCase;

  constructor(createEventUseCase: CreateEventUseCase) {
    this.createEventUseCase = createEventUseCase;
  }

  async execute(req: Request, res: Response): Promise<void> {
    const { summary, description, startDateTime, endDateTime } = req.body;

    const input: CreateEventDTO= {
      summary,
      description,
      startDateTime,
      endDateTime,
    };

    try {
      await this.createEventUseCase.execute(input);
      res.status(201).json({ message: "Event created successfully" });
    } catch (error) {
      console.error("Error creating event:", error);
      res.status(500).json({ error: "Internal Server Error 02" });
    }
  }
}
