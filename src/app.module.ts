import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { LandModule } from './land/land.module';
@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost/nft-city",  { useNewUrlParser: true }),
    UserModule,
    AuthModule,
    LandModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
