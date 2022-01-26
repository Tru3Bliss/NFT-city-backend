import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Land } from './schemas/land.schema';

@Injectable()
export class LandService {

  constructor(@InjectModel(Land.name) private userModel: Model<Land>) { }

  async createLand (land: Land): Promise<Land> {
    const newLand = new this.userModel(land);
    return newLand.save()
  }

}
