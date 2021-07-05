import { GetProductsUseCase } from './get-products-use-case';

describe('(use-cases) GetProducts Class', () => {
	it('Shoud return correct object to client', () => {
		const useCase = new GetProductsUseCase();
		const result = useCase.execute();

		expect(result.length).toEqual(3);
	});
});
