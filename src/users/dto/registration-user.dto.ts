import { IsString, IsEmail, IsOptional } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class RegistrationUserDto extends CreateUserDto {
  
  @IsString()
  @ApiProperty()
  status: 'CONFIRMED'| 'REJECTED' | 'IDLE' = 'IDLE';

}
