import { Module } from '@nestjs/common';

import { GetEntityController } from './get-entity.controller';
import { GetEntityService } from './get-entity.service';

import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [GetEntityController],
  providers: [GetEntityService, PrismaService],
})
export class GetEntityModule {}
