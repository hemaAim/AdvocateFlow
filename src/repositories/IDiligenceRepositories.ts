import {Diligence} from "../entities/Diligence"; 




export interface IDiligenceRepository { 
    findByProcesses(number_processes: string): Promise<Diligence| undefined>;
    create(diligence:Diligence): Promise<Diligence>;
    findAll(): Promise<Diligence[]>; 
    remove(id: string): Promise<void>; 
    findByCompany(contratante: string): Promise<Diligence[]| null>
    findById(id: string): Promise<Diligence | null>;
    findByUser(userId: string): Promise<Diligence[]>;
}