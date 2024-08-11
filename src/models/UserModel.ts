import mongoose, {  Document } from "mongoose";
import { Customer } from "../entities/Customer"; 

export interface CustomerDocument extends  Customer {} 

export const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }, 
  id:{ 
    type: String,
    required: false
  
  
  
  }
},
{timestamps: true});
 


const CustomerMongooseModel = mongoose.model<CustomerDocument>('Customer', CustomerSchema);

export default CustomerMongooseModel;
