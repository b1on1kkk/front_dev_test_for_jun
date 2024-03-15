import { Injectable } from '@nestjs/common';

import { PrismaService } from 'prisma/prisma.service';

import { EditEntityDTO } from './dto/edit-entity.dto';

@Injectable()
export class EditEntityService {
  constructor(private readonly prisma: PrismaService) {}

  async change_all(id: number, body: EditEntityDTO) {
    console.log(body);

    try {
      await this.prisma.entities.update({
        where: { id: id },
        data: {
          name: body.name,
          x_coordinate: body.x_coordinate,
          y_coordinate: body.y_coordinate,
          label: body.label,
        },
      });

      return { message: 'Data changed successfuly!', statusCode: 200 };
    } catch (error) {
      return { message: 'User not found!', statusCode: 404 };
    }
  }
}
