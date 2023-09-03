import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('register')
  register(
    @Body('email') email: string,
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    return this.userService.addUser(email, username, password);
  }

  @Get('users')
  getAllUsers() {
    return this.userService.getAllUser();
  }
  @Post('one')
  getUser(@Body('username') username: string) {
    return this.userService.getUser(username);
  }
  @Post('signin')
  signinEndpoint(
    @Body('username') username: string,
    @Body('password') password: string,
  ): Promise<{ message: string }> {
    return this.userService.validate(username, password);
  }
}
