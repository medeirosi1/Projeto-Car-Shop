import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { ErrorTypes } from '../../../errors/catalog';
import Cars from '../../../models/CarModel';
import { carMockCreate, carMockForChange, carMockForChangeWithId, carMockwithId } from '../../mocks/carMock';

describe('Car Model', () => {
    const carModel = new Cars();

    
    before(() => {
        sinon.stub(Model, 'create').resolves(carMockwithId);
        sinon.stub(Model, 'find').resolves([carMockwithId]);
        sinon.stub(Model, 'findOne').resolves(carMockwithId);
        sinon.stub(Model, 'findByIdAndUpdate').resolves(carMockForChangeWithId);
        sinon.stub(Model, 'findByIdAndDelete').resolves(carMockForChangeWithId);
    })

    after(() => {
        sinon.restore();
    });

    describe('Criando um Carro', () => {
        it('Criado com Sucesso', async () => {
            const car = await carModel.create(carMockCreate);
            expect(car).to.be.an('object');
            expect(car).to.be.deep.equal(carMockwithId);
        });
    });

    describe('Listando todos os carros', () => {
        it('Criado com Sucesso', async () => {
            const car = await carModel.read();
            expect(car).to.be.an('array');
            expect(car).to.be.deep.equal([carMockwithId]);
        });
    });

    describe('Listando um Carro', () => {
        it('listado com Sucesso', async () => {
            const car = await carModel.readOne('63235cd68418bba5d1d401da');
            // expect(car).to.be.an('object');
            expect(car).to.be.deep.equal(carMockwithId);
        });

        it('id possua menos 24 caracteres', async () => {
            try {
                await carModel.readOne('63235cd68418bba5d1d401');
            } catch (error: any) {
                expect(error.message).to.be.deep.equal(ErrorTypes.InvalidMongoId);
            }
        });
    })

    describe('Atualizando um carro', () => {
		it('atualizado com Sucesso', async () => {
			const car = await carModel.update('63235cd68418bba5d1d401da', carMockForChange);
			expect(car).to.be.deep.equal(carMockForChangeWithId);
		});
        it('id possua menos 24 caracteres', async () => {
			try {
				await carModel.update('63235cd68418bba5d1d401', carMockForChange);
			} catch (error: any) {
				expect(error.message).to.be.eq(ErrorTypes.InvalidMongoId);
			}
		});
	});

    describe('Deletado um um carro', () => {
		it('deletado com Sucesso', async () => {
			const car = await carModel.delete('63235cd68418bba5d1d401da');
			expect(car).to.be.deep.equal(carMockForChangeWithId);
		});
        it('id possua menos 24 caracteres', async () => {
			try {
				await carModel.delete('63235cd68418bba5d1d401');
			} catch (error: any) {
				expect(error.message).to.be.eq(ErrorTypes.InvalidMongoId);
			}
		});
	});
})