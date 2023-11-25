/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExtensionDto } from './dto/create-extension.dto';
import { UpdateExtensionDto } from './dto/update-extension.dto';
import { Extension } from './entities/extension.entity';

@Injectable()
export class ExtensionService {
  constructor(
    @InjectRepository(Extension)
    private extensionRepository: Repository<Extension>,
  ) {}

  async create(createExtensionDto: CreateExtensionDto) {
    await this.extensionRepository.save(createExtensionDto);
  }

  async findAll() {
    return await this.extensionRepository.find();
  }

  async update(updateExtensionDto: UpdateExtensionDto) {
    const { name, is_checked } = updateExtensionDto;
    const extension = await this.extensionRepository.findOne({
      where: { name, custom_or_fixed: 'fixed' },
    });
    if (!extension) {
      throw new NotFoundException(`Extension with name ${name} not found`);
    }
    extension.is_checked = is_checked;
    await this.extensionRepository.save(extension);
    return `Extension with name ${name} has been updated`;
  }

  async remove(name: string) {
    const extension = await this.extensionRepository.findOne({
      where: { name },
    });
    if (!extension) {
      throw new NotFoundException(`Extension with name ${name} not found`);
    }
    await this.extensionRepository.remove(extension);
    return `Extension with name ${name} has been removed`;
  }
}
