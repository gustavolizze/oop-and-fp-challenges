export interface CommonEnvironment {
	isDev: boolean;
	port: number;
}

export interface Environment {
	name: string;
}

export interface Environments {
	dev: Environment;
	production: Environment;
	common: CommonEnvironment;
}

export type EnvironmentKey = keyof Omit<Environments, 'common'>;
