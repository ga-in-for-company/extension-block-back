import { PartialType } from '@nestjs/mapped-types';
import { CreateExtensionDto } from './create-extension.dto';

export class UpdateExtensionDto extends PartialType(CreateExtensionDto) {
  name: string;
  is_checked: number;
}
