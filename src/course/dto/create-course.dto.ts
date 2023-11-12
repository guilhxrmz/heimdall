import { IsNotEmpty, IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  institution_id: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  adm_id: string;
}
