import dotenv from "dotenv";

dotenv.config();

import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export const authenticationMiddleware = (request: Request,response: Response,next: any) => {


  const token = request.headers.authorization


  if (!token) {
    return response.status(401).json({ error: "Invalid token" });
  }

  try {  
    const replace = token.replace("Beare", " ")

    const senha = "aimhemahematically";

 
      jwt.verify(replace, senha, function (err,) {
        
      });
    

    next();
  } catch (error) {
    console.log(error);
    return response.status(401).json({ message: "credentiains Invalid token error" });
  }
};

/*

router.post("/schedule_event", async (req: Request, res: Response) => {
  createEventController.execute(req, res);
 });

*/
/*
function tokenChec(req: Request, res: Response, next:Function) {  

 

  const secret = "infisfdsfbob324b238e0fwufbwn320bfubwe"

console.log(secret);
  
  const auth = req.headers["authorization"];
  const token = auth && auth.split(" ")[1];

  if(!token){ 
    return res.status(401).json({ message: 'test token'})
  }
  try {
  

    if (typeof secret  === 'string') {
      jwt.verify(token, secret , (err, decoded) => { 
        if (err) {
          console.error('Erro ao verificar o token:', err);
          // Lógica para tratar o token inválido
        } else {
          // O token é válido, você pode acessar os dados decodificados em 'decoded'
          console.log(decoded);
      }
      console.log(secret, token);
      
      })
    }

  
    next();
    
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Invalid token" });
  }
}
*/
