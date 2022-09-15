import { ErrorTypes } from '../errors/catalog';
import { carSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import IService from '../interfaces/IService';

class CarService implements IService<ICar> {
  private _car: IModel<ICar>;

  constructor(car: IModel<ICar>) {
    this._car = car;
  }
  public async create(obj: ICar): Promise<ICar> {
    const parsed = carSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    const car = await this._car.create(parsed.data);
    return car;
  }
  public async read(): Promise<ICar[]> {
    const car = await this._car.read();
    return car;
  }
  public async readOne(_id: string): Promise<ICar | null> {
    const car = this._car.readOne(_id);
    if (!car) throw new Error(ErrorTypes.EntityNotFound);
    return car;
  }
  public async update(_id: string, obj: ICar): Promise< ICar | null> {
    const car = this._car.update(_id, obj);
    return car;
  }
  public async delete(_id: string): Promise< ICar | null> {
    const car = this._car.delete(_id);
    return car;
  }
}

export default CarService;