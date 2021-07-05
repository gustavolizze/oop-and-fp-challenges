import { Product, BRL, EUR, INR, USD } from '../models';

export interface PriceFactoryResult {
	brl: BRL;
	eur: EUR;
	inr: INR;
	usd: USD;
}

export class PricesFactory {
	static getAll(product: Product): PriceFactoryResult {
		const { price } = product;

		return {
			brl: new BRL(price),
			eur: new EUR(price),
			inr: new INR(price),
			usd: new USD(price),
		};
	}
}
