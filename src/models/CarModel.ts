import { model as mongooseCreateModel, Schema } from 'mongoose';
import ICar from '../interfaces/ICar';
import MongoModel from './MongoModel';

const carMongoseSchema = new Schema<ICar>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
}, { versionKey: false });

class Cars extends MongoModel<ICar> {
  constructor(model = mongooseCreateModel('Car', carMongoseSchema)) {
    super(model);
  }
}

export default Cars;