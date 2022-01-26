import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type LandDocument = Land & Document;

@Schema()

export class Land {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  count: number;

  @Prop()
  pathkey: number[];

}

export const LandSchema = SchemaFactory.createForClass(Land);