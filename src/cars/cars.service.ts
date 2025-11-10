import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dtos/create-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Ford',
      model: 'Focus',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with ID '${id}' not found`);
    return car;
  }

  create(createCarDto: CreateCarDto) {
    const newCar = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(newCar);
    return newCar;
  }
}
