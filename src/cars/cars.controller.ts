/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    console.log({ id });
    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Patch(':id')
  updateCar(@Param('id', ParseUUIDPipe) id: string, @Body() createCarDto: CreateCarDto) {
    return createCarDto;
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return `Car with ID ${id} deleted`;
  }
}
