import { Cat } from './interfaces/cat.interface';
import { CatsService } from './cats.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return await this.catsService.findAll();
  }
  @Post()
  async create(@Body() createdCatDto: CreateCatDto): Promise<Cat> {
    return await this.catsService.create(createdCatDto);
  }
}
