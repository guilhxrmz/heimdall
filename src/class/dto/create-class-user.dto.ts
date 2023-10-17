import { IsString } from '@nestjs/class-validator';

export class CreateClassUserDto {
  @IsString()
  userId: string;
  @IsString()
  classId: string;
}
