import { validateInputs } from './validate-inputs';

describe('(functions - get-nearby-stores) Validate inputs', () => {
	[-20, 2000].map((plan) => {
		it(`If planX equals ${plan} should throw an error`, () => {
			const getResult = () =>
				validateInputs({
					client: [100, 20],
					plan: [plan, 100],
					shops: [],
				});

			expect(getResult).toThrow(
				'O plano x precisa ser maior que 0 e menor que 1000',
			);
		});

		it(`If planY equals ${plan} should throw an error`, () => {
			const getResult = () =>
				validateInputs({
					client: [100, 20],
					plan: [100, plan],
					shops: [],
				});

			expect(getResult).toThrow(
				'O plano x precisa ser maior que 0 e menor que 1000',
			);
		});
	});

	[-20, 2000, 300].map((client) => {
		it(`If clientX equals ${client} should throw an error`, () => {
			const getResult = () =>
				validateInputs({
					client: [client, 20],
					plan: [200, 200],
					shops: [],
				});

			expect(getResult).toThrow(
				'O eixo x do cliente precisar estar dentro do plano',
			);
		});

		it(`If clientY equals ${client} should throw an error`, () => {
			const getResult = () =>
				validateInputs({
					client: [0, client],
					plan: [200, 200],
					shops: [],
				});

			expect(getResult).toThrow(
				'O eixo y do cliente precisar estar dentro do plano',
			);
		});
	});

	it('If stores are out of plan an error should occur', () => {
		const getResult = () =>
			validateInputs({
				client: [20, 100],
				plan: [200, 200],
				shops: [[300, 300]],
			});

		expect(getResult).toThrow(
			'O(s) eixos do shops são invalidos ou estão fora do plano!',
		);
	});

	it('Should validate input', () => {
		const input = {
			client: [20, 100],
			plan: [200, 200],
			shops: [[150, 150]],
		};

		const result = validateInputs(input as any);

		expect(result).toEqual(input);
	});
});
