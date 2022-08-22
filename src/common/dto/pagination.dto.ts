import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @IsNumber()
  @Min(1)
  limit: number;
  @IsOptional()
  @IsNumber()
  @Min(0)
  offset: number;
}
