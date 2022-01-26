import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private userModel: Model<User>) { }


  async getAllUser(): Promise<User[]> {
    const users = await this.userModel.find().exec();
    return users;
  }

  async getUser(userId): Promise<User> {
    const user = await this.userModel.findById(userId).exec()
    return user;
  }

  async findUser(wallet): Promise<User[]> {
    const user = await this.userModel.find({ wallet: wallet }).exec()
    return user;
  }

  async findAdmin(): Promise<any> {
    const user = await this.userModel.find({ role: "admin" }).exec()
    return user.length;
  }

  async addUser(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save()
  }

  async updateUser(usreId, createUserDTO: CreateUserDTO): Promise<User> {
    const updateUser = await this.userModel.findByIdAndUpdate(usreId, createUserDTO, { new: true });
    return updateUser
  }

  async deleteUser(userId): Promise<any> {
    const deletedUser = await this.userModel.findByIdAndRemove(userId)
    return deletedUser
  }
}
