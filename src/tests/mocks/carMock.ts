import { ICar } from '../../interfaces/ICar';

const carMockCreate:ICar = {
  model: "Camaro Amarelo",
  year: 1988,
  color: "amarelo",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
};

const carMockwithId:ICar & {_id:string} = {
    _id: "60f1b0f9b0b5b8b1b4b1b1b1",
    model: "Camaro Amarelo",
    year: 1988,
    color: "amarelo",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
}

export { carMockCreate, carMockwithId };