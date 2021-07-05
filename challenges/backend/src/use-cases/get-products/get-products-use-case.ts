/* eslint-disable @typescript-eslint/no-explicit-any */
import { Products } from '../../infra/database/in-memory';
import { PricesFactory } from '../../domain/factories';
import { GetProductsUseCaseOutput } from './get-products-use-case-output';

export class GetProductsUseCase {
	execute(): GetProductsUseCaseOutput[] {
		return Products.map((product) => {
			const prices = PricesFactory.getAll(product);

			return {
				name: product.name,
				reviews: product.reviews,
				prices: Object.keys(prices).reduce((result, value) => {
					return {
						...result,
						[value]: {
							price: (prices as any)[value].price,
							code: (prices as any)[value].code!,
							formatted: (prices as any)[value].formatted,
						},
					};
				}, {}),
			} as any;
		});
	}
}
