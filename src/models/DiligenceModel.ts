import mongoose, { Document } from "mongoose";
import { Diligence } from "../entities/Diligence";

export interface DiligenceDocument extends Diligence {}

export const DiligenceSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    comarca: {
      type: String,
      required: true,
    },
    number_processes: {
      type: String,
      required: true,
    },
    contratante: {
      type: String,
      required: true,
    },
    startDateTime: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserModel",
      required: true,
    },
  },
  { timestamps: true }
);

const DiligenceModel = mongoose.model<DiligenceDocument>(
  "Diligence",
  DiligenceSchema
);

export default DiligenceModel;
