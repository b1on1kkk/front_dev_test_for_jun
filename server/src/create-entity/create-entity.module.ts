import { Module } from '@nestjs/common';

import { CreateEntityController } from './create-entity.controller';
import { CreateEntityService } from './create-entity.service';

import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [CreateEntityController],
  providers: [CreateEntityService, PrismaService],
})
export class CreateEntityModule {}
