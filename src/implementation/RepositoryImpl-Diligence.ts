import { Diligence } from "../entities/Diligence";
import DiligenceModel, { DiligenceDocument } from "../models/DiligenceModel";
import { IDiligenceRepository } from "../repositories/IDiligenceRepositories";


interface IDiligenceData {
  id: string;
  title: string;
  comarca: string;
  number_processes: string;
  contratante: string;
  value: string;
  description: string;
  startDateTime: string;
  autor: string;
}

export class MongoDBDiligenceRepository implements IDiligenceRepository {
  private mapToEntity(diligenceData: DiligenceDocument): Diligence {
    const {
      id,
      title,
      comarca,
      number_processes,
      contratante,
      value,
      description,
      startDateTime,
      autor,
    } = diligenceData;

    return new Diligence({
      id,
      title,
      comarca,
      number_processes,
      contratante,
      value,
      description,
      startDateTime,
      autor,
    });
  }

  async findByProcesses(number_processes: string): Promise<Diligence | undefined> {
    const job = await DiligenceModel.findOne({ number_processes });
    return job ? this.mapToEntity(job) : undefined;
  }

  async create(diligence: Diligence): Promise<Diligence> {
    const diligenceData: IDiligenceData = { ...diligence };
    const createdDiligence = await DiligenceModel.create(diligenceData);
    return this.mapToEntity(createdDiligence);
  }

  async findAll(): Promise<Diligence[]> {
    const jobs = await DiligenceModel.find();
    return jobs.map((job) => this.mapToEntity(job));
  }

  async remove(id: string): Promise<void> {
    await DiligenceModel.deleteOne({ id });
  }

  async findByCompany(contratante: string): Promise<Diligence[] | null> {
    const diligencesByCompany = await DiligenceModel.find({ contratante });

    if (diligencesByCompany.length === 0) {
      return null;
    }

    return diligencesByCompany.map((diligence) => this.mapToEntity(diligence));
  }

  async findById(id: string): Promise<Diligence | null> {
    const diligence = await DiligenceModel.findById(id);
    return diligence 
  } 
  /**
   * 
   *    async findById(id: string): Promise<Diligence| null> {
    const diligence = await DiligenceModel.findById(id)
    return diligence

  } 
   * 
   */

  async findByUser(userId: string): Promise<Diligence[]> {
    const diligencesByUser = await DiligenceModel.find({ autor: userId });
    return diligencesByUser.map((diligence) => this.mapToEntity(diligence));
  }

  async update(diligence: Diligence): Promise<Diligence> {
    const { id } = diligence;
    const existingDiligence = await DiligenceModel.findById(id);

    if (!existingDiligence) {
      throw new Error('Diligence not found');
    }

    const updatedDiligenceData: IDiligenceData = { ...diligence };
    Object.assign(existingDiligence, updatedDiligenceData);
    await existingDiligence.save();

    return this.mapToEntity(existingDiligence);
  }
}
