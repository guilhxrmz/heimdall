import { IsArray, IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClassDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  description: string;

  @IsArray()
  @ApiProperty()
  teachers_id: string[];
  
  @IsString()
  @ApiProperty()
  course_id: string;
}
