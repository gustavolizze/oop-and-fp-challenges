import { Price } from './price';

class PriceTest extends Price {
	currencyExchange = 2;
	code = 'TEST';
}

describe('(Domain - models) Price class', () => {
	it('Should create a new price', () => {
		const getPrice = () => {
			new PriceTest(2);
		};

		expect(getPrice).not.toThrow();
	});

	it('Should create price and check if props is correct', () => {
		const price = new PriceTest(2);

		expect(price.value).toEqual(2);
	});

	it('Must get correct price based on currency', () => {
		const price = new PriceTest(3);

		expect(price.price).toEqual(3 * price.currencyExchange);
	});

	it('Must get formatted value based on currency', () => {
		const price = new PriceTest(3);

		expect(price.formatted).toEqual(
			`${price.code} ${3 * price.currencyExchange}`,
		);
	});
});
