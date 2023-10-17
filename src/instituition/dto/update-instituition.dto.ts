import { PartialType } from '@nestjs/mapped-types';
import { CreateInstituitionDto } from './create-instituition.dto';

export class UpdateInstituitionDto extends PartialType(CreateInstituitionDto) {}
