import { formatOutput } from './format-output';

describe('(functions - get-nearby-stores) format output', () => {
	it('should format the output', () => {
		const result = formatOutput({
			client: [10, 20],
			plan: [100, 100],
			shops: [
				{
					position: [20, 30],
					distanceFromClient: 100,
				},
				{
					position: [30, 50],
					distanceFromClient: 150,
				},
			],
		});

		expect(result).toEqual(`[20,30], [30,50]`);
	});
});
