import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import Cars from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import { carMockCreate, carMockwithId } from '../../mocks/carMock';

describe('Car Service', () => {
    const carModel = new Cars();
    const carService = new CarService(carModel);

    before(() => {
		sinon.stub(carModel, 'create').resolves(carMockwithId);
        sinon.stub(carModel, 'read').resolves([carMockwithId]);
		sinon.stub(carModel, 'readOne')
			.onCall(0).resolves(carMockwithId)
			.onCall(1).resolves(null)
			.onCall(2).resolves(carMockwithId)
		sinon.stub(carModel, 'update').resolves(carMockwithId)
	});

	after(() => {
		sinon.restore()
	});

    describe('Criando Carro', () => {
        it('Criado com Sucesso', async () => {
            const car = await carService.create(carMockCreate);
            expect(car).to.be.an('object');
            expect(car).to.be.deep.equal(carMockwithId);
        });

        it('Criado com Erro', async () => {
            try {
                await carService.create({} as any);
            } catch (error: any) {
                expect(error).to.be.an.instanceOf(ZodError);
            }
        });
    })

    describe('Listando todos os Carros', () => {
        it('Criado com Sucesso', async () => {
            const car = await carService.read();
            expect(car).to.be.an('array');
            expect(car).to.be.deep.equal([carMockwithId]);
        });
    })

    describe('Criando Carro', () => {
        it('Criado com Sucesso', async () => {
            const car = await carService.readOne('63235cd68418bba5d1d401da');
            expect(car).to.be.an('object');
            expect(car).to.be.deep.equal(carMockwithId);
        });

        it('Criado com Erro', async () => {
            try {
                await carService.readOne('999999999999999999999999');
            } catch (error: any) {
                expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
            }
        });
    })
})