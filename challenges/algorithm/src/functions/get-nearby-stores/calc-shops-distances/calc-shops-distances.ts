import { calcDistance, calcPosition } from '../../../utils';
import { InputType } from '..';

export interface CalcShopsDistanceOutput extends Omit<InputType, 'shops'> {
	shops: {
		position: [number, number];
		distanceFromClient: number;
	}[];
}

export const calcShopsDistance = (
	input: InputType,
): CalcShopsDistanceOutput => {
	const [clientX, clientY] = input.client;

	return {
		...input,
		shops: input.shops.map((shop) => {
			const [shopX, shopY] = shop;

			return {
				position: [shopX, shopY],
				distanceFromClient: calcDistance(
					calcPosition(clientX, shopX),
					calcPosition(clientY, shopY),
				),
			};
		}),
	};
};
