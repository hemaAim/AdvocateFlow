import { Request, Response, NextFunction } from 'express';

class HttpErrorResponse {
  status: number;
  message: string;

  constructor(status: number, message: string) {
    this.status = status;
    this.message = message;
  }
}

 export class BadRequestError extends HttpErrorResponse {
  constructor(message: string = 'Bad Request') {
    super(400, message);
  }
}

 export class UnauthorizedError extends HttpErrorResponse {
  constructor(message: string = 'Unauthorized') {
    super(401, message);
  }
}

 export class ForbiddenError extends HttpErrorResponse {
  constructor(message: string = 'Forbidden') {
    super(403, message);
  }
}

export class NotFoundError extends HttpErrorResponse {
  constructor(message: string = 'Not Found') {
    super(404, message);
  }
}

export class InternalServerError extends HttpErrorResponse {
  constructor(message: string = 'Internal Server Error') {
    super(500, message);
  }
}
 