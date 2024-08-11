 import { Request, Response } from "express";
import { OAuthClientImpl } from "../../implementation/OAuthClientImpl";



export class GoogleRedirectControllers {
  constructor(private auth2client: OAuthClientImpl) {}
  public async execute(req: Request, res: Response): Promise<void> {
    const code = req.query.code;

    if (typeof code === "string") {
      const { tokens } = await this.auth2client.getToken(code);
      this.auth2client.setCredentials(tokens)
      console.log(tokens) 
      console.log(code)
      res.send({
        msg: "you have successfully logged in",
      });
    }
  }
}