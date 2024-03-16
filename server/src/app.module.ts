import { Module } from '@nestjs/common';
import { CreateEntityModule } from './create-entity/create-entity.module';
import { RemoveEntityModule } from './remove-entity/remove-entity.module';
import { EditEntityModule } from './edit-entity/edit-entity.module';
import { GetEntityModule } from './get-entity/get-entity.module';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [
    CreateEntityModule,
    RemoveEntityModule,
    EditEntityModule,
    GetEntityModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
