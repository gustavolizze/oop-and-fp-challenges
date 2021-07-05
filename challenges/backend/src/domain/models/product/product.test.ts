import { Product } from './product';

describe('(Domain - models) - Product Class test', () => {
	it('Should create product', () => {
		const getProduct = () => {
			new Product({
				name: 'test',
				price: 1,
				reviews: 4.5,
			});
		};

		expect(getProduct).not.toThrow();
	});

	it('Should create product and check if props is correct', () => {
		const product = new Product({
			name: 'test',
			price: 1,
			reviews: 4.5,
		});

		expect(product.name).toEqual('test');
		expect(product.price).toEqual(1);
		expect(product.reviews).toEqual(4.5);
	});
});
