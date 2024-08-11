import { google } from "googleapis";
import { IOAuthClient } from "../interface/OAuthClientInterface";
import dotenv from "dotenv";
dotenv.config();

export const client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
);

export class OAuthClientImpl implements IOAuthClient {
  constructor() {}  
  
    generateAuthUrl(options: any): string {
    return client.generateAuthUrl(options); 
  } 

  getToken(options: string): Promise<any>{
    return client.getToken(options);
  } 
  

  setCredentials(options: any): void {
    return client.setCredentials(options);
  }
 
  async createEvent(calendarId: string, requestBody: any): Promise<void> {
    const calendar = google.calendar({ version: "v3", auth: client });
    await calendar.events.insert({ calendarId, requestBody });
  }
} 
