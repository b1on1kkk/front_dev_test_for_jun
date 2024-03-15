import { Module } from '@nestjs/common';

import { EditEntityService } from './edit-entity.service';
import { EditEntityController } from './edit-entity.controller';

import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [EditEntityService, PrismaService],
  controllers: [EditEntityController],
})
export class EditEntityModule {}
