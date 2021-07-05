import { InputType } from '..';
import { inRange } from 'lodash';

export const validateInputs = (input: InputType) => {
	const [x, y] = input.plan;

	if (inRange(x, 0, 1000) === false || inRange(y, 0, 1000) === false) {
		throw new Error('O plano x precisa ser maior que 0 e menor que 1000');
	}

	const [clientX, clientY] = input.client;

	if (inRange(clientX, 0, x) === false) {
		throw new Error('O eixo x do cliente precisar estar dentro do plano');
	}

	if (inRange(clientY, 0, y) === false) {
		throw new Error('O eixo y do cliente precisar estar dentro do plano');
	}

	const allShopsAreValid = input.shops.every(
		([shopX, shopY]) => inRange(shopX, 0, x) && inRange(shopY, 0, y),
	);

	if (allShopsAreValid === false) {
		throw new Error(
			'O(s) eixos do shops são invalidos ou estão fora do plano!',
		);
	}

	return input;
};
