import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ExtensionService } from './extension.service';
import { CreateExtensionDto } from './dto/create-extension.dto';
import { UpdateExtensionDto } from './dto/update-extension.dto';

@Controller('extension')
export class ExtensionController {
  constructor(private readonly extensionService: ExtensionService) {}

  @Post()
  async create(@Body() createExtensionDto: CreateExtensionDto) {
    return await this.extensionService.create(createExtensionDto);
  }

  @Get()
  findAll() {
    return this.extensionService.findAll();
  }

  @Put(':name')
  update(@Body() updateExtensionDto: UpdateExtensionDto) {
    return this.extensionService.update(updateExtensionDto);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.extensionService.remove(name);
  }
}
