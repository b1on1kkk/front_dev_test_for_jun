import { IsString, IsInt } from 'class-validator';

export class EditEntityDTO {
  @IsString()
  name: string;

  @IsInt()
  x_coordinate: number;

  @IsInt()
  y_coordinate: number;

  @IsString()
  label: string;
}
