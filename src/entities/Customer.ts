import * as crypto from 'crypto';
import { v4 as uuidv4 } from "uuid";

export interface CustomerData {
  name: string;
  email: string;
  password: string;
  id?: string;
}

export class Customer {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly id?: string;

  constructor(data: CustomerData) {
    this.id = data.id || uuidv4();
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
  }
}
