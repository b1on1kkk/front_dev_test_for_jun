import { Body, Controller, Param, Put, Res } from '@nestjs/common';

import { Response } from 'express';

import { EditEntityService } from './edit-entity.service';

import { EditEntityDTO } from './dto/edit-entity.dto';

@Controller('edit-entity')
export class EditEntityController {
  constructor(private readonly editEntityService: EditEntityService) {}

  @Put('/change_all/:id')
  async change_all(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() body: EditEntityDTO,
  ) {
    const response = await this.editEntityService.change_all(
      +id.split(':')[1],
      body,
    );

    return res.status(response.statusCode).json(response);
  }
}
