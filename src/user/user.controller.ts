import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post, Query, Req, Request, Res } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) { }

  @Post("/create")
  async addUser(@Res() res, @Query() user) {
    console.log("incoome",user)
    const newuser = await this.userService.addUser(user)
    return res.status(HttpStatus.OK).json({
      message: "User has been created successfully",
      newuser
    })
  }

  @Get("/users")
  async getAllUser(@Res() res) {
    const users = await this.userService.getAllUser()
    return res.status(HttpStatus.OK).json(users)
  }

  @Get("user/:userID")
  async getUser(@Res() res, @Param("userID") userID) {
    const user = await this.userService.getUser(userID)
    if (!user) throw new NotFoundException("User does not exist!");
    return res.status(HttpStatus.OK).json(user);
  }

  @Get("find")
  async findUser(@Res() res, @Query() query) {
    const user = await this.userService.findUser(query.wallet)
    console.log("admin", user)
    if (!user) throw new NotFoundException("User does not exist!");
    return res.status(HttpStatus.OK).json({ user: user });
  }

  @Get("admin")
  async findAdmin(@Res() res) {
    const user = await this.userService.findAdmin()
    return res.status(HttpStatus.OK).json({ admin: user });
  }
}

