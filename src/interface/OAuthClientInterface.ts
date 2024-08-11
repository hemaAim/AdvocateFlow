import { ParsedQs } from "qs";

export interface IOAuthClient {
    generateAuthUrl(options: any): string; 

    getToken(code: string): Promise<any>;
    setCredentials(credential: any): void; 
    createEvent(calendarId: string, requestBody: any): Promise<any> 

  }
  
  