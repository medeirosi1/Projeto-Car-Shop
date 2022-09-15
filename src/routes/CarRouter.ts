import { Router, Request, Response } from 'express';
import CarController from '../controllers/CarControlller';
import Cars from '../models/CarModel';
import CarService from '../services/CarService';

const route = Router();

const carModel = new Cars();
const carService = new CarService(carModel);
const carController = new CarController(carService);

route.post('/cars', (req: Request, res: Response) =>
  carController.create(req, res));
// route.get('/frame/:id', (req: Request, res: Response) =>
//     frameController.readOne(req, res));
// route.put('/frame/:id', (req: Request, res: Response) =>
//     frameController.update(req, res));

export default route;