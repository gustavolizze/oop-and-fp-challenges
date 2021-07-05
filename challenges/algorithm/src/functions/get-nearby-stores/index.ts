import { flow, take, curryRight } from 'lodash';
import { validateInputs } from './validate-inputs';
import { calcShopsDistance } from './calc-shops-distances';
import { orderByShopsByDistance } from './order-shops-by-distance';
import { formatOutput } from './format-output';

export interface InputType {
	client: [number, number];
	shops: [number, number][];
	plan: [number, number];
}

export const getNearbyStores = flow(
	validateInputs,
	calcShopsDistance,
	orderByShopsByDistance,
	curryRight(take, 1)(3),
	formatOutput,
);
