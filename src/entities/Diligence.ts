import * as crypto from "crypto";

export interface DiligenceData {
  id?: string;
  title: string;
  comarca: string;
  number_processes: string;
  contratante: string;
  value: string;
  description: string;
  startDateTime: string 
  autor: string; 
}

export class Diligence {
  readonly id: string;
  readonly title: string;
  readonly comarca: string;
  readonly number_processes: string;
  readonly contratante: string;
  readonly value: string;
  readonly description: string;
  readonly startDateTime: string 
  readonly autor: string

  constructor(data: DiligenceData) {
    this.id = data.id || crypto.randomUUID();
    this.title = data.title;
    this.description = data.description;
    this.comarca = data.comarca;
    this.number_processes = data.number_processes;
    this.contratante = data.contratante;
    this.value = data.value;
    this.startDateTime = data.startDateTime;
    this.autor = data.autor;
  }
}


