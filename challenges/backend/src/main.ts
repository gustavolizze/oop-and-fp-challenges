import sourceMapSupport from 'source-map-support';

import 'reflect-metadata';
import 'make-promises-safe';

import fastify from 'fastify';

// Plugins
import helmet from 'fastify-helmet';
import cors from 'fastify-cors';
import compress from 'fastify-compress';

//Use cases
import { GetProductsUseCase } from './use-cases';

export async function main() {
	// Dependencies
	sourceMapSupport.install({
		environment: 'node',
	});

	const app = fastify();

	await app.register(helmet);
	await app.register(cors);
	await app.register(compress, {
		encodings: ['gzip', 'deflate'],
	});

	app.get('/', async () => new GetProductsUseCase().execute());

	app.listen(8080, '0.0.0.0').then(() => {
		console.log(app.printRoutes());
	});
}
