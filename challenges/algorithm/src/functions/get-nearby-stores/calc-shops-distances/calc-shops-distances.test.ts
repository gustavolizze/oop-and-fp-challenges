import { calcShopsDistance } from './calc-shops-distances';

describe('(functions - get-nearby-stores) Calc shops positions', () => {
	it('Should calc shops distances', () => {
		const input = {
			client: [20, 30],
			plan: [500, 500],
			shops: [[20, 30]],
		};
		const result = calcShopsDistance(input as any);

		expect(result).toEqual({
			...input,
			shops: [
				{
					position: [20, 30],
					distanceFromClient: 0,
				},
			],
		});
	});
});
