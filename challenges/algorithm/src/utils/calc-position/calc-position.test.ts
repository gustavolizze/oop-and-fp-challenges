import { calcPosition } from './calc-position';

describe('(Utils) CalcPosition fn', () => {
	it('Should calc position', () => {
		const result = calcPosition(20, 32);

		expect(result).toEqual(144);
	});
});
