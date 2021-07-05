import { orderByShopsByDistance } from './order-shops-by-distance';

describe('(functions - get-nearby-stores) Order shops by distance', () => {
	it('Should order shops by distance', () => {
		const input = {
			client: [20, 20],
			plan: [100, 100],
			shops: [
				{
					position: [30, 25],
					distanceFromClient: 25,
				},
				{
					position: [20, 20],
					distanceFromClient: 0,
				},
			],
		};

		const result = orderByShopsByDistance(input as any);

		expect(result).toEqual({
			...input,
			shops: [
				{
					position: [20, 20],
					distanceFromClient: 0,
				},
				{
					position: [30, 25],
					distanceFromClient: 25,
				},
			],
		});
	});
});
