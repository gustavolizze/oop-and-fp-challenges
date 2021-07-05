import { calcDistance } from './calc-distance';

describe('(Utils) CalcDistance FN', () => {
	it('Should calc distance', () => {
		const result = calcDistance(144, 1444);

		expect(Math.trunc(result)).toEqual(39);
	});
});
