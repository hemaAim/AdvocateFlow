import { OAuthClientImpl } from "../../implementation/OAuthClientImpl";
import { CreateEventDTO } from "./DTOCreateEvent";




export class CreateEventUseCase {
  constructor(private authClient: OAuthClientImpl) {}


  async execute(data: CreateEventDTO): Promise<void> {
    const { summary, description, startDateTime, endDateTime } = data;

    await this.authClient.createEvent("primary", {
      summary,
      description,
      start: {
        dateTime: startDateTime,
        timeZone: "America/Sao_Paulo",
      },
      end: {
        dateTime: endDateTime,
        timeZone: "America/Sao_Paulo",
      },
    
      colorId: 5
    });
  }
}

