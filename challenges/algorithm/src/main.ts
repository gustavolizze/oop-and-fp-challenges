import { getNearbyStores, InputType } from './functions/get-nearby-stores';

export function main() {
	const inputs: InputType[] = [
		{
			client: [20, 32],
			shops: [
				[40, 88],
				[18, 56],
				[99, 2],
			],
			plan: [100, 100],
		},
		{
			client: [90, 32],
			shops: [
				[40, 88],
				[18, 56],
				[99, 2],
			],
			plan: [100, 100],
		},
	];

	inputs.forEach((input) => {
		const result = getNearbyStores(input);

		console.log(` ----------- `);
		console.log(`  `);
		console.log(`Entrada: `, { input });
		console.log(`Saida: `, result);
		console.log(`  `);
		console.log(` ----------- `);
	});
}

main();
