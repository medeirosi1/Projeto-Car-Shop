import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { ErrorTypes } from '../../../errors/catalog';
import Cars from '../../../models/CarModel';
import { carMockCreate, carMockwithId } from '../../mocks/carMock';

describe('Car Model', () => {
    const carModel = new Cars();

    
    before(() => {
        sinon.stub(Model, 'create').resolves(carMockwithId);
        sinon.stub(Model, 'find').resolves([carMockwithId]);
        // sinon.stub(Model, 'findOne').resolves();
        // sinon.stub(Model, 'findByIdAndUpdate').resolves();
        // sinon.stub(Model, 'findByIdAndDelete').resolves();
    })

    after(() => {
        sinon.restore();
    });

    describe('Criando um Carro', () => {
        it.only('Criado com Sucesso', async () => {
            const car = await carModel.create(carMockCreate);
            expect(car).to.be.an('object');
            expect(car).to.be.deep.equal(carMockwithId);
        });
    })
})