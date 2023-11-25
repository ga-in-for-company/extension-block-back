import { Module } from '@nestjs/common';
import { ExtensionService } from './extension.service';
import { ExtensionController } from './extension.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Extension } from './entities/extension.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Extension])],
  controllers: [ExtensionController],
  providers: [ExtensionService],
})
export class ExtensionModule {}
