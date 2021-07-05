export abstract class Price {
	abstract readonly currencyExchange: number;
	abstract readonly code: string;

	constructor(public readonly value: number) {}

	get price(): number {
		return this.value * this.currencyExchange;
	}

	get formatted(): string {
		return `${this.code} ${this.price}`;
	}
}
