import { Document } from "mongoose";

export interface Land extends Document {
  readonly name: string;
  readonly price: number;
  readonly count: number;
}