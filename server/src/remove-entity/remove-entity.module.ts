import { Module } from '@nestjs/common';

import { RemoveEntityController } from './remove-entity.controller';
import { RemoveEntityService } from './remove-entity.service';

import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [RemoveEntityController],
  providers: [RemoveEntityService, PrismaService],
})
export class RemoveEntityModule {}
