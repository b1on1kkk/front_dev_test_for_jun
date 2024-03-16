import { Injectable } from '@nestjs/common';

import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class RemoveEntityService {
  constructor(private readonly prisma: PrismaService) {}

  async remove_entity(id: number) {
    try {
      await this.prisma.entity.delete({
        where: { id: +id },
      });

      return { message: 'Entity removed successfuly!', statusCode: 200 };
    } catch (error) {
      return { message: 'Entity is not found!', statusCode: 404 };
    }
  }
}
