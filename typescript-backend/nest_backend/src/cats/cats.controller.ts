import { Cat } from './interfaces/cat.interface';
import { CatsService } from './cats.service';
import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return await this.catsService.findAll();
  }
}
