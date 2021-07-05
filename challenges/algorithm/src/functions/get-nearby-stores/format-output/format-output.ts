import { CalcShopsDistanceOutput } from '../calc-shops-distances';

export const formatOutput = (input: CalcShopsDistanceOutput): string => {
	return input.shops.map((shop) => `[${shop.position}]`).join(', ');
};
