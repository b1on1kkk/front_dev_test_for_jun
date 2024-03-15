import { Controller, Get, Param, Query, Res } from '@nestjs/common';
import { Response } from 'express';

import { GetEntityService } from './get-entity.service';

import type { TQuery } from './interface/interface';

@Controller('get-entity')
export class GetEntityController {
  constructor(private readonly getEntityService: GetEntityService) {}

  @Get('/entity_filtered')
  async entity_filtered(@Res() res: Response, @Query() query: TQuery) {
    const { x1, x2, y1, y2 } = query;

    const response = await this.getEntityService.entity_filtered(
      +x1,
      +y1,
      +x2,
      +y2,
    );

    return res.status(response.statusCode).json(response);
  }

  @Get('/all_entities')
  async all_entities(@Res() res: Response) {
    const response = await this.getEntityService.all_entities();

    return res.status(response.statusCode).json(response);
  }

  @Get('/entity/:id')
  async entity(@Res() res: Response, @Param('id') id: string) {
    const response = await this.getEntityService.entity(+id.split(':')[1]);

    return res.status(response.statusCode).json(response);
  }
}
