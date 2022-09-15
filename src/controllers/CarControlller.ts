import { Request, Response } from 'express';
import CarService from '../services/CarService';

class CarController {
  constructor(private carService: CarService) {}
  
  public async create(req: Request, res: Response) {
    const result = await this.carService.create(req.body);
    res.status(201).json(result);
  }
  
  public async read(req: Request, res: Response) {
    const result = await this.carService.read();
    res.status(200).json(result);
  }

  public async readOne(req: Request, res: Response) {
    const result = await this.carService.readOne(req.params.id);
    res.status(200).json(result);
  }
}

export default CarController;