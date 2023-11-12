import { IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClassUserDto {
  @IsString()
  @ApiProperty()
  userId: string;
  @IsString()
  @ApiProperty()
  classId: string;
}
