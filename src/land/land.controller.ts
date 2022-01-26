import { Controller, HttpStatus, Post, Query, Res } from '@nestjs/common';
import { LandService } from './land.service';

@Controller('land')
export class LandController {
  
  constructor(private readonly landService: LandService) { }

  @Post("/create")
  async addUser(@Res() res, @Query() land) {
    console.log("incoome",land)
    const newuser = await this.landService.createLand(land)
    return res.status(HttpStatus.OK).json({
      message: "Land has been created successfully",
      newuser
    })
  }

}
