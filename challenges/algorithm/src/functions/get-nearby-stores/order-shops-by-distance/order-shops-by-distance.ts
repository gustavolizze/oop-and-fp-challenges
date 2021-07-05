import { CalcShopsDistanceOutput } from '../calc-shops-distances';

export const orderByShopsByDistance = (input: CalcShopsDistanceOutput) => {
	return {
		...input,
		shops: input.shops.sort(
			(a, b) => a.distanceFromClient - b.distanceFromClient,
		),
	};
};
