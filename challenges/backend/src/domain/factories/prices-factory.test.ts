import { Product } from '../models';
import { PricesFactory } from './prices-factory';

describe('(Domain factories) - PricesFactory Class', () => {
	it('Must get all prices correctly', () => {
		const product = new Product({
			name: 'Tenis nike',
			price: 2,
			reviews: 2.5,
		});

		const result = PricesFactory.getAll(product);

		expect(result.brl.price).toEqual(2);
		expect(result.eur.price).toEqual(2 * 5.9984);
		expect(result.inr.price).toEqual(2 * 13);
		expect(result.usd.price).toEqual(2 * 5.5);
	});
});
