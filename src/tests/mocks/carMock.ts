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

const carMockForChange:ICar = {
    model: "Camaro Azul",
    year: 1998,
    color: "azul",
    buyValue: 3502000,
    seatsQty: 3,
    doorsQty: 3,
}

const carMockForChangeWithId:ICar & { _id:string }= {
    _id: "63235cd68418bba5d1d401da",
    model: "Camaro Azul",
    year: 1998,
    color: "azul",
    buyValue: 3502000,
    seatsQty: 3,
    doorsQty: 3,
}

const carMockWithError:ICar & { _id:string } = {
    _id: "63235cd68418bba5d1d401da",
    model: "Camaro Azul",
    year: 100,
    color: "a",
    buyValue: 3502000,
    seatsQty: 3,
    doorsQty: 3,
}

export { carMockCreate, carMockwithId, carMockForChange, carMockForChangeWithId, carMockWithError };