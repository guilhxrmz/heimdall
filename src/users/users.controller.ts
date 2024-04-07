import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody, ApiTags } from "@nestjs/swagger";
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  @Post('login')
  @ApiBody({
    schema: {
      properties: {
        email: { type: 'string', example: 'user@example.com' },
        password: { type: 'string', example: 'mypassword' },
      },
    },
  })
  async login(
    @Body() body: { email: string; password: string },
    @Res() res: Response,
  ) {
    const { email, password } = body;

    if (!email || !password) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: 'Email and password mandatory' });
    }

    const isAuthenticated = await this.usersService.login(email, password);

    if (isAuthenticated) {
      return res.status(HttpStatus.OK).json({ message: 'Logged' });
    } else {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: 'Invalid Credentials' });
    }
  }
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('role/:idRole/inst/:idInst')
  findByRoleAndInst(@Param('idRole') @Param('idInst')idRole: string , idInst : string ) {
    return this.usersService.findByRoleAndInst(idRole, idInst);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
