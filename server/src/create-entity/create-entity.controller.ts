import { Body, Controller, Post, Res } from '@nestjs/common';

import { CreateEntityService } from './create-entity.service';

import { CreateEntityDTO } from './dto/create-entity.dto';

import { Response } from 'express';

@Controller('create-entity')
export class CreateEntityController {
  constructor(private readonly createEntityService: CreateEntityService) {}

  @Post('/')
  async create_entity(@Res() res: Response, @Body() body: CreateEntityDTO) {
    const response = await this.createEntityService.create_entity(body);

    return res.status(response.statusCode).json(response);
  }
}
