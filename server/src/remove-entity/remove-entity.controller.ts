import { Controller, Delete, Param, Res } from '@nestjs/common';

import { RemoveEntityService } from './remove-entity.service';

import { Response } from 'express';

@Controller('/remove-entity')
export class RemoveEntityController {
  constructor(private readonly removeEntityService: RemoveEntityService) {}

  @Delete('/:id')
  async remove_entity(@Res() res: Response, @Param('id') id: string) {
    const response = await this.removeEntityService.remove_entity(
      +id.split(':')[1],
    );

    return res.status(response.statusCode).json(response);
  }
}
