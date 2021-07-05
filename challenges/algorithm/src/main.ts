import sourceMapSupport from 'source-map-support';

import 'reflect-metadata';
import 'make-promises-safe';

export function main(): void {
	// Dependencies
	sourceMapSupport.install({
		environment: 'node',
	});

	console.log('Hello Word!');
}
