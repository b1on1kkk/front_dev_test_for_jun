import { Injectable } from '@nestjs/common';

import { PrismaService } from 'prisma/prisma.service';

import { CreateEntityDTO } from './dto/create-entity.dto';

@Injectable()
export class CreateEntityService {
  constructor(private prisma: PrismaService) {}

  async create_entity(body: CreateEntityDTO) {
    try {
      await this.prisma.entities.create({
        data: {
          name: body.name,
          x_coordinate: body.x_coordinate,
          y_coordinate: body.y_coordinate,
          label: body.label,
        },
      });

      return { message: 'Entity created successfuly!', statusCode: 200 };
    } catch (error) {
      return { message: 'Server error occured', statusCode: 500 };
    }
  }
}
