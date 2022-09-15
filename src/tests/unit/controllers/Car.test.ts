import { expect } from 'chai';
import * as sinon from 'sinon';
import { NextFunction, Request, Response } from 'express';
import Cars from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import CarController from '../../../controllers/CarControlller';
import { carMockCreate, carMockwithId } from '../../mocks/carMock';


describe('Car Controller', () => {
    const carModel = new Cars();
    const carService = new CarService(carModel);
    const carController = new CarController(carService);
    const req = {} as Request;
    const res = {} as Response;

    before(() => {
        sinon.stub(carService, 'create').resolves(carMockCreate);
        sinon.stub(carService, 'read').resolves([carMockCreate]);
        sinon.stub(carService, 'readOne').resolves(carMockCreate);
        sinon.stub(carService, 'update').resolves(carMockwithId);
        sinon.stub(carService, 'delete').resolves(carMockwithId);
    
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
        res.sendStatus = sinon.stub().returns(res);
      });
    
      after(() => {
        sinon.restore()
      })

      describe('Criando um Carro', () => {
        it('Criado com Sucesso', async () => {
            req.body = carMockCreate;
            await carController.create(req, res);

            expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
            expect((res.json as sinon.SinonStub).calledWith(carMockCreate)).to.be.true;
        });
      });

      describe('Lendo todos os carros', () => {
        it('Listado com Sucesso', async () => {
            await carController.read(req, res);

            expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
            expect((res.json as sinon.SinonStub).calledWith(carMockCreate)).to.be.true;
        });
      });

      describe('Lendo um Carro', () => {
        it('Lido com Sucesso', async () => {
            req.params = { id: carMockwithId._id };
            await carController.readOne(req, res);

            expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
            expect((res.json as sinon.SinonStub).calledWith(carMockCreate)).to.be.true;
        });
      });

      describe('Atualizando um carro', () => {
        it('atualziado com Sucesso', async () => {
            req.params = { id: carMockwithId._id };
            req.body = carMockCreate;
            await carController.update(req, res);

            expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
            expect((res.json as sinon.SinonStub).calledWith(carMockwithId)).to.be.true;
        });
      });

      describe('Deletando um carro', () => {
        it('removido com Sucesso', async () => {
            req.params = { id: carMockwithId._id };
            await carController.delete(req, res);

            expect((res.sendStatus as sinon.SinonStub).calledWith(204)).to.be.true;
        });
      });

})