import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleDto } from './create-role.dto';
import { IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
  @IsString()
  @ApiProperty()
  role_name: string;

  @IsString()
  @ApiProperty()
  description: string;
}
