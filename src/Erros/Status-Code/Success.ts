class HttpResponse {
  status: number;
  message: string;

  constructor(status: number, message: string) {
    this.status = status;
    this.message = message;
  }
}

export class OkResponse extends HttpResponse {
  constructor(message: string = 'OK') {
    super(200, message);
  }
}

export class CreatedResponse extends HttpResponse {
  constructor(message: string = 'Created') {
    super(201, message);
  }
}

export class NoContentResponse extends HttpResponse {
  constructor(message: string = 'No Content') {
    super(204, message);
  }
}
