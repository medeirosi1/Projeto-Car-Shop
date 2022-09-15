import { Request, Response } from 'express';
import CarService from '../services/CarService';

class CarController {
  constructor(private carService: CarService) {}
  
  public async create(req: Request, res: Response) {
    const result = await this.carService.create(req.body);
    res.status(201).json(result);
  }
}

export default CarController;