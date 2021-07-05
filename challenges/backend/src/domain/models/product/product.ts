export interface ProductProps {
	name: string;
	reviews: number;
	price: number;
}

export class Product implements ProductProps {
	name: string;
	reviews: number;
	price: number;

	constructor({ name, price, reviews }: ProductProps) {
		this.name = name;
		this.price = price;
		this.reviews = reviews;
	}
}
