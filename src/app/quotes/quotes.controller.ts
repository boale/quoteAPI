import { Controller, Get, Delete, Post, Put } from '@nestjs/common';

@Controller('api/quotes')
export class QuotesController {
  @Get()
  findAll() {
    return [];
  }

  @Post()
  create() {
    return { created: true };
  }

  @Get('random')
  random() {
    return { random: true };
  }

  @Get(':id')
  findById() {
    return { id: true };
  }

  @Put(':id')
  updateById() {
    return { updated: true };
  }

  @Delete(':id')
  deleteById() {
    return { deleted: true };
  }
}
