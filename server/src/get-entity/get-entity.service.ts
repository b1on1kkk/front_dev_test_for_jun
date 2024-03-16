import { Injectable } from '@nestjs/common';

import { PrismaService } from 'prisma/prisma.service';
import { GetResponseHandler } from './helper/response_handler.helper';

@Injectable()
export class GetEntityService {
  private getReponseHandler: GetResponseHandler;

  constructor(private readonly prisma: PrismaService) {
    this.getReponseHandler = new GetResponseHandler();
  }

  async entity_filtered(x1: number, y1: number, x2: number, y2: number) {
    try {
      const entities = await this.prisma.entity.findMany({
        where: {
          AND: [
            {
              x_coordinate: {
                gte: x1,
                lte: x2,
              },
              y_coordinate: {
                gte: y1,
                lte: y2,
              },
            },
          ],
        },
      });

      return this.getReponseHandler.Success(entities);
    } catch (error) {
      return this.getReponseHandler.Error();
    }
  }

  async all_entities() {
    try {
      const response = await this.prisma.entity.findMany();

      return this.getReponseHandler.Success(response);
    } catch (error) {
      return this.getReponseHandler.Error();
    }
  }

  async entity(id: number) {
    try {
      const response = await this.prisma.entity.findUnique({
        where: { id: id },
      });

      if (!response) return this.getReponseHandler.Error();

      return this.getReponseHandler.Success([response]);
    } catch (error) {
      console.log(error);

      return this.getReponseHandler.Error();
    }
  }
}
