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
    _id: "63235cd68418bba5d1d401da",
    model: "Camaro Amarelo",
    year: 1988,
    color: "amarelo",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
}

export { carMockCreate, carMockwithId };