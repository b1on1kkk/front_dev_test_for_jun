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
      const entities = await this.prisma.entities.findMany({
        where: {
          AND: [
            { x_coordinate: { gte: Math.min(x1, x2) } },
            { x_coordinate: { lte: Math.max(x1, x2) } },
            { y_coordinate: { gte: Math.min(y1, y2) } },
            { y_coordinate: { lte: Math.max(y1, y2) } },
          ],
        },
        select: {
          label: true,
        },
      });

      const uniqueLabelsSet = new Set();

      entities.forEach((entity) =>
        entity.label.split(',').forEach((e) => uniqueLabelsSet.add(e)),
      );

      return this.getReponseHandler.Success(Array.from(uniqueLabelsSet));
    } catch (error) {
      return this.getReponseHandler.Error();
    }
  }

  async all_entities() {
    try {
      const response = await this.prisma.entities.findMany();

      return this.getReponseHandler.Success(response);
    } catch (error) {
      return this.getReponseHandler.Error();
    }
  }

  async entity(id: number) {
    try {
      const response = await this.prisma.entities.findUnique({
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

// // First, define a query function in your service layer or wherever you handle database operations
// async function getEntitiesWithinRectangle(x1, y1, x2, y2) {
//     const entities = await prisma.entities.findMany({
//       where: {
//         AND: [
//           { x_coordinate: { gte: Math.min(x1, x2) } }, // Greater than or equal to min x-coordinate
//           { x_coordinate: { lte: Math.max(x1, x2) } }, // Less than or equal to max x-coordinate
//           { y_coordinate: { gte: Math.min(y1, y2) } }, // Greater than or equal to min y-coordinate
//           { y_coordinate: { lte: Math.max(y1, y2) } } // Less than or equal to max y-coordinate
//         ]
//       },
//       select: {
//         label: true
//       }
//     });
//     return entities.map(entity => entity.label);
//   }

//   // Then, you can use this function to get the labels of entities within a given rectangle
//   const labels = await getEntitiesWithinRectangle(0, -1, 8, 15);
//   console.log(labels); // This will output the labels of entities within the specified rectangle
