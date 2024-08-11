import { Request, Response } from "express";
import { IOAuthClient } from "../../interface/OAuthClientInterface";
import { InternalServerError } from "../../Erros/Status-Code/Errors";



const scopes = ["https://www.googleapis.com/auth/calendar"];

export class GoogleAuthControllers {


  constructor(private oauthClient: IOAuthClient) {}

  public async execute(
    req: Request,
    res: Response
  ) { 
    

    try {
      const url = this.oauthClient.generateAuthUrl({
        access_type: "offline",
        scope: scopes,
      });
      
      res.redirect(url);

    
    } catch (error) {
      return res.status(500).json(new InternalServerError());
    }
  }
}
