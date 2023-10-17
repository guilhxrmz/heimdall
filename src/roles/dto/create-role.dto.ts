import { IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @IsString()
  @ApiProperty()
  role_name: string;

  @IsString()
  @ApiProperty()
  description: string;
}
