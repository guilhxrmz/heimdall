import { IsString, IsEmail, IsOptional } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class RegistrationUserValidDto {
    @IsString()
    @ApiProperty()
    status: string;
    @IsString()
    @ApiProperty()
    name: string;
    @IsOptional()
    @IsString()
    @ApiProperty()
    class: []
    @IsEmail()
    @ApiProperty()
    email: string
    @IsString()
    @ApiProperty()
    encrypted_password: string
    @IsString()
    @ApiProperty()
    instituition: string
    @IsString()
    @ApiProperty()
    registration_number: string
    @IsString()
    @ApiProperty()
    role: string
    @IsString()
    @ApiProperty()
    __v: string
    @IsString()
    @ApiProperty()
    _id: string

}
