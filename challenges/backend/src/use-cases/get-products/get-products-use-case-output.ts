export interface GetProductsUseCaseOutput {
	name: string;
	reviews: string;
	prices: {
		[key: string]: {
			price: number;
			code: string;
			formatted: string;
		};
	};
}
