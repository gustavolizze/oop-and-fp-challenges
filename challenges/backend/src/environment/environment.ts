import { EnvironmentKey, Environments, Environment } from './types';
import { merge } from 'lodash';

const CurrentEnvironmentKey: EnvironmentKey =
	(process.env.NODE_ENV as any) || 'dev';

const _environments: Environments = {
	common: {
		isDev: CurrentEnvironmentKey === 'dev',
		port: 8080,
	},
	dev: {
		name: 'Development',
	},
	production: {
		name: 'Production',
	},
};

const _environment: Environment =
	_environments[CurrentEnvironmentKey] || _environments.dev;

export const CurrentEnvironment = merge(_environment, _environments.common);
